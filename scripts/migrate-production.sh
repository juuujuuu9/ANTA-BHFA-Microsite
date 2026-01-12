#!/bin/bash

# Production Database Migration Script
# Usage: ./scripts/migrate-production.sh <production-database-url>
# Or: DATABASE_URL=<url> ./scripts/migrate-production.sh

if [ -z "$1" ] && [ -z "$DATABASE_URL" ]; then
  echo "Error: Please provide the production DATABASE_URL"
  echo ""
  echo "Usage:"
  echo "  ./scripts/migrate-production.sh <production-database-url>"
  echo "  OR"
  echo "  DATABASE_URL=<production-database-url> ./scripts/migrate-production.sh"
  echo ""
  echo "To get your production DATABASE_URL:"
  echo "  1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables"
  echo "  2. Copy the DATABASE_URL value"
  echo "  3. Run this script with that URL"
  exit 1
fi

# Use provided URL or environment variable
PROD_DB_URL="${1:-$DATABASE_URL}"

echo "⚠️  WARNING: This will modify your PRODUCTION database!"
echo "Database: ${PROD_DB_URL%%@*}@..."
read -p "Are you sure you want to continue? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
  echo "Migration cancelled."
  exit 0
fi

echo ""
echo "Running migration against production database..."
echo ""

DATABASE_URL="$PROD_DB_URL" npm run db:migrate

echo ""
echo "✅ Migration complete!"
