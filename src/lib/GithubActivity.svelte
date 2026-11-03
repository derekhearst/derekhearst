<script lang="ts">
	import type { Activity, ActivityDay } from '../routes/api/github-activity/+server'

	let activity = $state<Activity | null>(null)
	let failed = $state(false)
	let scroller = $state<HTMLDivElement>()

	$effect(() => {
		fetch('/api/github-activity')
			.then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
			.then((data: Activity) => (activity = data))
			.catch(() => (failed = true))
	})

	// On narrow screens the grid scrolls sideways; start at the most recent weeks.
	$effect(() => {
		if (activity && scroller) scroller.scrollLeft = scroller.scrollWidth
	})

	// GitHub's grid: one column per week, rows Sunday through Saturday.
	const weeks = $derived.by(() => {
		if (!activity?.days.length) return []
		const cols: (ActivityDay | null)[][] = []
		let col: (ActivityDay | null)[] = Array(new Date(activity.days[0].date + 'T00:00:00Z').getUTCDay()).fill(null)
		for (const day of activity.days) {
			col.push(day)
			if (col.length === 7) {
				cols.push(col)
				col = []
			}
		}
		if (col.length) cols.push(col)
		return cols
	})

	const busiest = $derived(activity?.days.reduce((a, b) => (b.count > a.count ? b : a), activity.days[0]))
	const last30 = $derived(activity?.days.slice(-30).reduce((sum, d) => sum + d.count, 0) ?? 0)

	const shades = ['bg-white/5', 'bg-accent/25', 'bg-accent/50', 'bg-accent/75', 'bg-accent']
	const fmt = (date: string) =>
		new Date(date + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })

	// Hover (or tap) a day to see its count. One listener on the grid instead of one per cell.
	let tip = $state<{ text: string; x: number; y: number } | null>(null)

	function showTip(e: PointerEvent) {
		const cell = (e.target as HTMLElement).closest<HTMLElement>('[data-date]')
		if (!cell?.dataset.date) return (tip = null)
		const count = Number(cell.dataset.count)
		const day = new Date(cell.dataset.date + 'T00:00:00Z').toLocaleDateString('en-US', {
			weekday: 'short',
			month: 'short',
			day: 'numeric',
			timeZone: 'UTC',
		})
		const rect = cell.getBoundingClientRect()
		tip = {
			text: `${count ? count.toLocaleString() : 'No'} contribution${count === 1 ? '' : 's'} on ${day}`,
			// Keep the ~220px-wide tooltip inside the window near the edges.
			x: Math.min(Math.max(rect.left + rect.width / 2, 115), window.innerWidth - 115),
			y: rect.top,
		}
	}
</script>

<svelte:window onscroll={() => (tip = null)} />

<div class="rounded-2xl border border-white/5 bg-zinc-900/60 p-6">
	<div class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
		<p class="flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-500 uppercase">
			<span class="relative flex size-2">
				<span class="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden"
				></span>
				<span class="relative inline-flex size-2 rounded-full bg-accent"></span>
			</span>
			Live from GitHub
		</p>
		{#if activity}
			<p class="text-sm text-zinc-400">
				<span class="font-mono text-white">{activity.total.toLocaleString()}</span> contributions in the last year ·
				<span class="font-mono text-white">{last30.toLocaleString()}</span> in the last 30 days
				{#if busiest}· busiest day <span class="font-mono text-white">{busiest.count}</span> on {fmt(busiest.date)}{/if}
			</p>
		{/if}
	</div>

	<div class="mt-5 overflow-x-auto pb-1" bind:this={scroller} onscroll={() => (tip = null)}>
		{#if activity}
			<div
				class="flex w-max gap-[3px]"
				role="img"
				aria-label="Contribution heatmap for the last year"
				onpointerover={showTip}
				onpointerdown={showTip}
				onpointerleave={() => (tip = null)}>
				{#each weeks as week, w (w)}
					<div class="flex flex-col gap-[3px]">
						{#each week as day, d (d)}
							<span
								class="size-2.5 rounded-[2px] {day ? `${shades[day.level]} hover:ring-1 hover:ring-white/60` : ''}"
								data-date={day?.date}
								data-count={day?.count}></span>
						{/each}
					</div>
				{/each}
			</div>
		{:else if failed}
			<p class="text-sm text-zinc-500">
				Couldn’t reach GitHub right now. <a class="text-accent hover:underline" href="https://github.com/derekhearst"
					>See my profile</a
				>.
			</p>
		{:else}
			<div class="h-[107px] animate-pulse rounded-lg bg-white/5"></div>
		{/if}
	</div>
	<p class="mt-3 text-xs text-zinc-500">Includes private work repos. Updated hourly.</p>
</div>

{#if tip}
	<div
		class="pointer-events-none fixed z-30 -translate-x-1/2 -translate-y-full rounded-md bg-zinc-800 px-2.5 py-1.5 text-xs whitespace-nowrap text-white shadow-lg ring-1 ring-white/10"
		style="left: {tip.x}px; top: {tip.y - 8}px">
		{tip.text}
	</div>
{/if}
