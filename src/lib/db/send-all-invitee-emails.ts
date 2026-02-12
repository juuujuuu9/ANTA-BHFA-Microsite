import 'dotenv/config';
import { db } from './index';
import { grandOpeningEntries } from './schema';
import { sendInviteeConfirmationEmail } from '../email';

async function sendAllInviteeEmails() {
  try {
    console.log('=== SEND ALL INVITEE EMAILS ===\n');

    const entries = await db.select().from(grandOpeningEntries).orderBy(grandOpeningEntries.id);
    console.log(`Found ${entries.length} entries\n`);

    if (entries.length === 0) {
      console.log('No entries to email.');
      process.exit(0);
      return;
    }

    let sent = 0;
    let failed = 0;

    for (const entry of entries) {
      const email = entry.email?.trim();
      if (!email || !email.includes('@')) {
        console.log(`⏭️  Skipping id ${entry.id} – invalid email`);
        failed++;
        continue;
      }

      const firstName = entry.firstName || undefined;
      process.stdout.write(`Sending to ${email} (${firstName || 'no name'})... `);

      const result = await sendInviteeConfirmationEmail(email, firstName);

      if (result.success) {
        console.log('✅');
        sent++;
      } else {
        console.log(`❌ ${result.error}`);
        failed++;
      }

      // Resend allows 2 requests/second – wait 600ms between sends
      await new Promise((r) => setTimeout(r, 600));
    }

    console.log(`\nDone. Sent: ${sent}, Failed: ${failed}`);
    process.exit(failed > 0 ? 1 : 0);
  } catch (error) {
    console.error('\n❌ Error:', error);
    process.exit(1);
  }
}

sendAllInviteeEmails();
