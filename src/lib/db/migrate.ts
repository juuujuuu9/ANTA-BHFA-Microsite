import { neon } from '@neondatabase/serverless';

async function migrate() {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    
    console.log('Starting database migration...');
    
    const sql = neon(process.env.DATABASE_URL);
    
    // Check if old columns exist
    const checkColumns = await sql(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'form_submissions' 
      AND column_name IN ('name', 'message')
    `);
    
    const hasOldColumns = checkColumns.length > 0;
    
    if (hasOldColumns) {
      console.log('Old schema detected. Migrating to new schema...');
      
      // Add new columns if they don't exist
      await sql(`
        ALTER TABLE form_submissions
        ADD COLUMN IF NOT EXISTS first_name VARCHAR(255),
        ADD COLUMN IF NOT EXISTS last_name VARCHAR(255),
        ADD COLUMN IF NOT EXISTS phone VARCHAR(255),
        ADD COLUMN IF NOT EXISTS shirt_size VARCHAR(50),
        ADD COLUMN IF NOT EXISTS sneaker_size VARCHAR(50);
      `);
      
      // Migrate existing data: split name into first_name and last_name
      await sql(`
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
        WHERE name IS NOT NULL;
      `);
      
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
      console.log('Schema is already up to date. No migration needed.');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('Error migrating database:', error);
    process.exit(1);
  }
}

migrate();

