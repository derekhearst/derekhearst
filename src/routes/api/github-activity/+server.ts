import { json } from '@sveltejs/kit'

// Live GitHub activity, read from the public contribution calendar on Derek's profile.
// The calendar counts private contributions too and needs no token. GitHub only updates it
// every so often, so the parsed result is cached at the edge for an hour.
export const prerender = false

const USER = 'derekhearst'
const TTL_SECONDS = 60 * 60

export type ActivityDay = { date: string; count: number; level: number }
export type Activity = { total: number; days: ActivityDay[]; fetchedAt: string }

export async function GET({ fetch, url }) {
	const edgeCache = (globalThis as { caches?: { default?: Cache } }).caches?.default
	const cacheKey = new Request(`${url.origin}/api/github-activity`)
	const hit = await edgeCache?.match(cacheKey)
	if (hit) return hit

	const res = await fetch(`https://github.com/users/${USER}/contributions`, {
		headers: { 'User-Agent': 'derekhearst.com' },
	})
	if (!res.ok) return json({ error: `GitHub returned ${res.status}` }, { status: 502 })

	const response = json(parseCalendar(await res.text()), {
		headers: { 'Cache-Control': `public, max-age=${TTL_SECONDS}` },
	})
	await edgeCache?.put(cacheKey, response.clone())
	return response
}

function parseCalendar(html: string): Activity {
	// Each day is a <td data-date data-level id> cell, and its count lives in a <tool-tip for=id> element.
	const counts = new Map<string, number>()
	for (const [, id, text] of html.matchAll(/<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
		counts.set(id, Number(text.match(/^([\d,]+) contribution/)?.[1]?.replaceAll(',', '') ?? 0))
	}

	const days: ActivityDay[] = []
	for (const [cell] of html.matchAll(/<td[^>]*data-date="[^"]+"[^>]*>/g)) {
		const date = cell.match(/data-date="([^"]+)"/)?.[1]
		const id = cell.match(/id="([^"]+)"/)?.[1]
		const level = Number(cell.match(/data-level="(\d)"/)?.[1] ?? 0)
		if (date && id) days.push({ date, count: counts.get(id) ?? 0, level })
	}
	days.sort((a, b) => a.date.localeCompare(b.date))

	const total = Number(html.match(/([\d,]+)\s+contributions?\s+in the last year/)?.[1]?.replaceAll(',', '') ?? 0)
	return { total: total || days.reduce((sum, d) => sum + d.count, 0), days, fetchedAt: new Date().toISOString() }
}
