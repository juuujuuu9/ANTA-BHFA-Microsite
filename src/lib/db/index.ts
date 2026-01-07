import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

function getDatabaseUrl(): string {
  // Try import.meta.env first (Astro/Vite way), fallback to process.env (Node.js scripts)
  let url: string | undefined;
  
  try {
    // Check if import.meta is available (Astro/Vite environment)
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      url = import.meta.env.DATABASE_URL;
    }
  } catch {
    // import.meta not available, will use process.env
  }
  
  // Fallback to process.env (works in Node.js scripts and server-side)
  url = url || process.env.DATABASE_URL;
  
  if (!url) {
    const error = new Error(
      'DATABASE_URL environment variable is not set. ' +
      'Please check your .env file and ensure it contains DATABASE_URL.'
    );
    console.error('Database configuration error:', error.message);
    throw error;
  }
  
  return url;
}

const databaseUrl = getDatabaseUrl();

// Log connection info in development (without exposing full URL)
if (import.meta.env?.MODE === 'development') {
  const urlParts = databaseUrl.split('@');
  const dbInfo = urlParts.length > 1 ? `...@${urlParts[1].split('/')[1]}` : 'configured';
  console.log(`[DB] Connecting to database: ${dbInfo}`);
}

const sql = neon(databaseUrl);
export const db = drizzle(sql, { schema });

export * from './schema';

