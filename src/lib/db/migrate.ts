import 'dotenv/config';
import { neon } from '@neondatabase/serverless';

async function migrate() {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    
    console.log('Starting database migration...');
    
    const sql = neon(process.env.DATABASE_URL);
    
    // Check if old columns exist
    const checkColumns = await sql`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'form_submissions' 
      AND column_name IN ('name', 'message')
    `;
    
    const hasOldColumns = checkColumns.length > 0;
    
    if (hasOldColumns) {
      console.log('Old schema detected. Migrating to new schema...');
      
      // Add new columns if they don't exist
      await sql`
        ALTER TABLE form_submissions
        ADD COLUMN IF NOT EXISTS first_name VARCHAR(255),
        ADD COLUMN IF NOT EXISTS last_name VARCHAR(255),
        ADD COLUMN IF NOT EXISTS phone VARCHAR(255),
        ADD COLUMN IF NOT EXISTS shirt_size VARCHAR(50),
        ADD COLUMN IF NOT EXISTS sneaker_size VARCHAR(50),
        ADD COLUMN IF NOT EXISTS creator_email VARCHAR(255),
        ADD COLUMN IF NOT EXISTS media VARCHAR(255),
        ADD COLUMN IF NOT EXISTS instagram_profile VARCHAR(255)
      `;
      
      // Migrate existing data: split name into first_name and last_name
      await sql`
        UPDATE form_submissions
        SET first_name = CASE 
          WHEN name IS NOT NULL THEN 
            CASE 
              WHEN position(' ' in name) > 0 THEN 
                substring(name from 1 for position(' ' in name) - 1)
              ELSE name
            END
          ELSE NULL
        END,
        last_name = CASE 
          WHEN name IS NOT NULL AND position(' ' in name) > 0 THEN 
            substring(name from position(' ' in name) + 1)
          ELSE NULL
        END
        WHERE name IS NOT NULL
      `;
      
      console.log('Data migration completed.');
      
      // Drop old columns (commented out for safety - uncomment if you want to remove old columns)
      // await sql(`
      //   ALTER TABLE form_submissions
      //   DROP COLUMN IF EXISTS name,
      //   DROP COLUMN IF EXISTS message;
      // `);
      
      console.log('Migration completed successfully!');
      console.log('Note: Old columns (name, message) are still present but unused.');
      console.log('You can manually drop them later if needed.');
    } else {
      console.log('Old schema not detected. Checking for missing columns...');
      
      // Define all required columns from schema
      const requiredColumns = [
        { name: 'first_name', type: 'VARCHAR(255)' },
        { name: 'last_name', type: 'VARCHAR(255)' },
        { name: 'email', type: 'VARCHAR(255)' },
        { name: 'phone', type: 'VARCHAR(255)' },
        { name: 'shirt_size', type: 'VARCHAR(50)' },
        { name: 'sneaker_size', type: 'VARCHAR(50)' },
        { name: 'creator_email', type: 'VARCHAR(255)' },
        { name: 'media', type: 'VARCHAR(255)' },
        { name: 'instagram_profile', type: 'VARCHAR(255)' },
      ];
      
      // Check which columns exist
      const existingColumns = await sql`
        SELECT column_name 
        FROM information_schema.columns 
        WHERE table_name = 'form_submissions'
      `;
      
      const existingColumnNames = existingColumns.map((c: { column_name: string }) => c.column_name);
      const missingColumns = requiredColumns.filter(
        col => !existingColumnNames.includes(col.name)
      );
      
      if (missingColumns.length > 0) {
        console.log(`Adding missing columns: ${missingColumns.map(c => c.name).join(', ')}`);
        
        // Add missing columns one by one
        for (const col of missingColumns) {
          await sql.unsafe(`ALTER TABLE form_submissions ADD COLUMN IF NOT EXISTS ${col.name} ${col.type}`);
          console.log(`  ✓ Added column: ${col.name}`);
        }
        
        console.log('Missing columns added successfully.');
      } else {
        console.log('Schema is already up to date. No migration needed.');
      }
    }

    // Create grand_opening_entries table if it doesn't exist (idempotent)
    console.log('Ensuring grand_opening_entries table exists...');
    await sql.unsafe(`
      CREATE TABLE IF NOT EXISTS grand_opening_entries (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        additional_guests VARCHAR(50) NOT NULL,
        checked_in BOOLEAN NOT NULL DEFAULT false,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL
      )
    `);
    // Add checked_in column if table existed without it
    await sql.unsafe(`
      ALTER TABLE grand_opening_entries ADD COLUMN IF NOT EXISTS checked_in BOOLEAN NOT NULL DEFAULT false
    `);
    console.log('  ✓ grand_opening_entries ready.');
    
    process.exit(0);
  } catch (error) {
    console.error('Error migrating database:', error);
    process.exit(1);
  }
}

migrate();

