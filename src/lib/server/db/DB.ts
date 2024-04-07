import type { DrizzleD1Database } from 'drizzle-orm/d1'

export let DB: DrizzleD1Database | undefined

export async function setDB(db: DrizzleD1Database) {
	DB = db
}
