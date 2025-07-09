
import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Make database optional in development
if (!process.env.DATABASE_URL && process.env.NODE_ENV === 'production') {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Create a mock database connection for development if no DATABASE_URL is provided
const connectionString = process.env.DATABASE_URL || 'postgresql://mock:mock@localhost:5432/mock';

export const pool = new Pool({ connectionString });
export const db = drizzle({ client: pool, schema });
