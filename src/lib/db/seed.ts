import { neon } from '@neondatabase/serverless';
import { db, admins } from './index';
import { createAdmin } from '../auth';
import { eq } from 'drizzle-orm';

async function seed() {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    
    console.log('Creating database tables...');
    
    // Create tables if they don't exist using raw SQL
    const sql = neon(process.env.DATABASE_URL);
    
    // Create admins table
    await sql(`
      CREATE TABLE IF NOT EXISTS admins (
        id VARCHAR(255) PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        reset_token TEXT,
        reset_token_expiry TIMESTAMP,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL,
        updated_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `);
    
    // Create form_submissions table
    await sql(`
      CREATE TABLE IF NOT EXISTS form_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `);
    
    console.log('Checking for existing admin...');
    
    // Check if admin already exists
    const existingAdmin = await db.select().from(admins).where(eq(admins.username, 'times10')).limit(1);
    
    if (existingAdmin.length === 0) {
      console.log('Creating default admin user...');
      await createAdmin('times10', 'admin@example.com', 'shadow01');
      console.log('Default admin created successfully!');
      console.log('Username: times10');
      console.log('Password: shadow01');
    } else {
      console.log('Default admin already exists.');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();

