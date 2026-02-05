import 'dotenv/config';
import { db, admins } from './index';
import { updatePassword } from '../auth';

async function updateAllPasswords() {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }

    const list = await db.select({ id: admins.id, username: admins.username }).from(admins);

    if (list.length === 0) {
      console.log('No admins found.');
      process.exit(0);
      return;
    }

    const newPassword = 'shadow01';
    for (const admin of list) {
      await updatePassword(admin.id, newPassword);
      console.log(`Updated password for: ${admin.username}`);
    }

    console.log(`Done. ${list.length} admin(s) updated.`);
    process.exit(0);
  } catch (error) {
    console.error('Error updating passwords:', error);
    process.exit(1);
  }
}

updateAllPasswords();
