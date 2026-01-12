import 'dotenv/config';
import { db, admins } from './index';
import { createAdmin } from '../auth';
import { eq } from 'drizzle-orm';

async function addAnta() {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    
    const email = 'anta@anta.com';
    const password = 'hewl3tt';
    const username = 'anta';
    
    console.log(`Checking if admin with email ${email} already exists...`);
    
    // Check if admin already exists by email or username
    const existingByEmail = await db.select().from(admins).where(eq(admins.email, email)).limit(1);
    const existingByUsername = await db.select().from(admins).where(eq(admins.username, username)).limit(1);
    
    if (existingByEmail.length > 0) {
      console.log('Admin already exists with this email.');
      process.exit(0);
    }
    
    if (existingByUsername.length > 0) {
      console.log('Admin already exists with this username.');
      process.exit(0);
    }
    
    console.log(`Creating admin user: ${username} (${email})...`);
    await createAdmin(username, email, password);
    console.log('Admin created successfully!');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error adding admin:', error);
    process.exit(1);
  }
}

addAnta();
