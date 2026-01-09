import { db, formSubmissions } from './db';
import { eq, desc } from 'drizzle-orm';

export async function createFormSubmission(data: {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  shirtSize?: string;
  sneakerSize?: string;
}) {
  const [submission] = await db.insert(formSubmissions).values({
    firstName: data.firstName || null,
    lastName: data.lastName || null,
    email: data.email || null,
    phone: data.phone || null,
    shirtSize: data.shirtSize || null,
    sneakerSize: data.sneakerSize || null,
  }).returning();
  
  return submission;
}

export async function getAllSubmissions() {
  return db.select().from(formSubmissions).orderBy(desc(formSubmissions.createdAt));
}

export async function getSubmissionById(id: number) {
  const [submission] = await db.select()
    .from(formSubmissions)
    .where(eq(formSubmissions.id, id))
    .limit(1);
  return submission;
}

export async function deleteSubmission(id: number) {
  await db.delete(formSubmissions).where(eq(formSubmissions.id, id));
}

export async function getTotalSubmissionCount(): Promise<number> {
  const result = await db.select().from(formSubmissions);
  return result.length;
}
