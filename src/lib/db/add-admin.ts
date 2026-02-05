import 'dotenv/config';
import { db, admins } from './index';
import { createAdmin } from '../auth';
import { eq } from 'drizzle-orm';

async function addAdmin() {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    
    const email = 'julianhardee@times10.net';
    const password = 'shadow01';
    const username = 'julianhardee';
    
    console.log(`Checking if admin with email ${email} already exists...`);
    
    // Check if admin already exists
    const existingAdmin = await db.select().from(admins).where(eq(admins.email, email)).limit(1);
    
    if (existingAdmin.length > 0) {
      console.log('Admin already exists with this email.');
      process.exit(0);
    }
    
    console.log(`Creating admin user: ${username} (${email})...`);
    await createAdmin(username, email, password);
    console.log('Admin created successfully!');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error adding admin:', error);
    process.exit(1);
  }
}

addAdmin();

