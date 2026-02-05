import { pgTable, text, timestamp, varchar, serial } from 'drizzle-orm/pg-core';

export const admins = pgTable('admins', {
  id: varchar('id', { length: 255 }).primaryKey(),
  username: varchar('username', { length: 255 }).notNull().unique(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  resetToken: text('reset_token'),
  resetTokenExpiry: timestamp('reset_token_expiry'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const formSubmissions = pgTable('form_submissions', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 255 }),
  lastName: varchar('last_name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  phone: varchar('phone', { length: 255 }),
  shirtSize: varchar('shirt_size', { length: 50 }),
  sneakerSize: varchar('sneaker_size', { length: 50 }),
  creatorEmail: varchar('creator_email', { length: 255 }),
  media: varchar('media', { length: 255 }),
  instagramProfile: varchar('instagram_profile', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const grandOpeningEntries = pgTable('grand_opening_entries', {
  id: serial('id').primaryKey(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  additionalGuests: varchar('additional_guests', { length: 50 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type Admin = typeof admins.$inferSelect;
export type NewAdmin = typeof admins.$inferInsert;
export type FormSubmission = typeof formSubmissions.$inferSelect;
export type NewFormSubmission = typeof formSubmissions.$inferInsert;
export type GrandOpeningEntry = typeof grandOpeningEntries.$inferSelect;
export type NewGrandOpeningEntry = typeof grandOpeningEntries.$inferInsert;

