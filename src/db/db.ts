import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from '../entities/schema';
import postgres from 'postgres';
import { neon } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL!;

let client: any;
if (process.env.NODE_ENV === 'production') {
    if (!connectionString?.startsWith('postgresql')) {
        console.error('Invalid/missing DATABASE_URL:', !!connectionString);
        throw new Error('DATABASE_URL invalid or missing');
    }
    client = neon(connectionString);
} else {
    client = postgres(connectionString, { max: 1 });
}

export const db = drizzle(client, { schema, logger: false });