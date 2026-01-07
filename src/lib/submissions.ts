import { db, formSubmissions } from './db';
import { eq, desc } from 'drizzle-orm';

export async function createFormSubmission(data: {
  name?: string;
  email?: string;
  message: string;
}) {
  const [submission] = await db.insert(formSubmissions).values({
    name: data.name || null,
    email: data.email || null,
    message: data.message,
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

