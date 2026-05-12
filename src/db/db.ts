import { drizzle } from 'drizzle-orm/neon-http';
import { drizzle as pgDrizzle } from 'drizzle-orm/postgres-js';
import * as schema from '../entities/schema';
import postgres from 'postgres';
import { neon } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL!;

let client: any;
let db: any
if (process.env.NODE_ENV === 'production') {
    client = neon(connectionString);
    db = drizzle(client, { schema, logger: true });

} else {
    client = postgres(connectionString, { max: 1 });
    db = pgDrizzle(client, { schema, logger: true });
}

export { db }
