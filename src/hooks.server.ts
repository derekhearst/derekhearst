import { DB, setDB } from '$lib/server/db/DB'
import { drizzle } from 'drizzle-orm/d1'

export async function handle({ event, resolve }) {
	const dbInstance = drizzle(event.platform?.env?.DB)
	if (dbInstance) {
		setDB(dbInstance)
	} else {
		console.error('DB not found in event.platform.env.DB')
	}
	return resolve(event)
}
