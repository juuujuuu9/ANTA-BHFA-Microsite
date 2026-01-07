import 'dotenv/config';
import { getAllAdmins } from '../auth';
import { sendFormSubmissionEmail } from '../email';

async function testEmail() {
  try {
    console.log('=== EMAIL CONFIGURATION TEST ===\n');
    
    // Check environment variables
    const resendKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;
    
    console.log('Environment Check:');
    console.log('  RESEND_API_KEY:', resendKey ? `✅ Present (${resendKey.substring(0, 10)}...)` : '❌ Missing');
    console.log('  FROM_EMAIL:', fromEmail || '❌ Missing (using default)');
    console.log('');
    
    // Get admins
    console.log('Fetching admins...');
    const admins = await getAllAdmins();
    console.log(`Found ${admins.length} admin(s):`);
    admins.forEach(admin => {
      console.log(`  - ${admin.username} (${admin.email})`);
    });
    console.log('');
    
    if (admins.length === 0) {
      console.log('❌ No admins found. Cannot test email.');
      process.exit(1);
    }
    
    const adminEmails = admins.map(a => a.email).filter(Boolean);
    
    if (adminEmails.length === 0) {
      console.log('❌ No valid admin emails found.');
      process.exit(1);
    }
    
    // Test email sending
    console.log('Sending test email...');
    const result = await sendFormSubmissionEmail(adminEmails, {
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      phone: '555-1234',
      shirtSize: 'M',
      sneakerSize: '10',
      submittedAt: new Date(),
      totalEntries: 1,
    });
    
    if (result.success) {
      console.log('\n✅ Test email sent successfully!');
      console.log('Check your inbox:', adminEmails.join(', '));
    } else {
      console.log('\n❌ Failed to send test email');
      console.log('Error:', result.error);
    }
    
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Error:', error);
    if (error instanceof Error) {
      console.error('Message:', error.message);
      console.error('Stack:', error.stack);
    }
    process.exit(1);
  }
}

testEmail();

