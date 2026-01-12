import 'dotenv/config';
import { db, admins } from './index';
import { eq } from 'drizzle-orm';

async function updateGenkiEmail() {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    
    const oldEmail = 'genki@times10';
    const newEmail = 'genki@times10.net';
    
    console.log(`Looking for admin with email: ${oldEmail}...`);
    
    // Find admin by old email
    const [admin] = await db.select().from(admins).where(eq(admins.email, oldEmail)).limit(1);
    
    if (!admin) {
      console.log('Admin not found with old email. Checking by username...');
      const [adminByUsername] = await db.select().from(admins).where(eq(admins.username, 'Genki')).limit(1);
      
      if (!adminByUsername) {
        console.error('Admin "Genki" not found in database.');
        process.exit(1);
      }
      
      // Check if new email already exists
      const [existingWithNewEmail] = await db.select().from(admins).where(eq(admins.email, newEmail)).limit(1);
      if (existingWithNewEmail) {
        console.error(`Email ${newEmail} is already in use by another admin.`);
        process.exit(1);
      }
      
      console.log(`Updating email from ${adminByUsername.email} to ${newEmail}...`);
      await db.update(admins)
        .set({ email: newEmail, updatedAt: new Date() })
        .where(eq(admins.id, adminByUsername.id));
      
      console.log('✅ Email updated successfully!');
      console.log(`Username: ${adminByUsername.username}`);
      console.log(`New Email: ${newEmail}`);
    } else {
      // Check if new email already exists
      const [existingWithNewEmail] = await db.select().from(admins).where(eq(admins.email, newEmail)).limit(1);
      if (existingWithNewEmail && existingWithNewEmail.id !== admin.id) {
        console.error(`Email ${newEmail} is already in use by another admin.`);
        process.exit(1);
      }
      
      console.log(`Updating email from ${oldEmail} to ${newEmail}...`);
      await db.update(admins)
        .set({ email: newEmail, updatedAt: new Date() })
        .where(eq(admins.id, admin.id));
      
      console.log('✅ Email updated successfully!');
      console.log(`Username: ${admin.username}`);
      console.log(`New Email: ${newEmail}`);
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error updating email:', error);
    process.exit(1);
  }
}

updateGenkiEmail();
