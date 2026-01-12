# Database Migration Guide

## Issue
The production database is missing the `creator_email` column (and potentially other columns) that are required by the application schema.

## Error
```
column "creator_email" of relation "form_submissions" does not exist
```

## Solution

### Option 1: Run Migration Script Locally (Recommended)

1. **Set production DATABASE_URL** in your local `.env` file:
   ```bash
   DATABASE_URL=your_production_neon_database_url
   ```

2. **Run the migration script**:
   ```bash
   npm run db:migrate
   ```

3. **Verify the migration**:
   The script will output which columns were added. You should see:
   ```
   Adding missing columns: creator_email, media, instagram_profile
     ✓ Added column: creator_email
     ✓ Added column: media
     ✓ Added column: instagram_profile
   Missing columns added successfully.
   ```

### Option 2: Manual SQL Migration

If you prefer to run SQL directly in your Neon dashboard:

```sql
-- Add missing columns
ALTER TABLE form_submissions 
  ADD COLUMN IF NOT EXISTS creator_email VARCHAR(255),
  ADD COLUMN IF NOT EXISTS media VARCHAR(255),
  ADD COLUMN IF NOT EXISTS instagram_profile VARCHAR(255);
```

### Option 3: Run Migration via Neon SQL Editor

1. Go to your Neon dashboard
2. Open the SQL Editor
3. Run the SQL from Option 2 above

## Verification

After running the migration, verify the columns exist:

```sql
SELECT column_name 
FROM information_schema.columns 
WHERE table_name = 'form_submissions'
ORDER BY column_name;
```

You should see all required columns:
- `id`
- `first_name`
- `last_name`
- `email`
- `phone`
- `shirt_size`
- `sneaker_size`
- `creator_email` ✅
- `media` ✅
- `instagram_profile` ✅
- `created_at`

## Prevention

To prevent this issue in the future:
1. Always run migrations before deploying schema changes
2. Consider adding a migration check in your deployment pipeline
3. Keep schema.ts and database in sync

## Notes

- The migration script is idempotent - it's safe to run multiple times
- It uses `IF NOT EXISTS` to avoid errors if columns already exist
- No data will be lost - this only adds new columns
