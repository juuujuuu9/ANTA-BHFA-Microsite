import bcrypt from 'bcryptjs';
import { nanoid } from 'nanoid';
import { db, admins } from './db';
import { eq } from 'drizzle-orm';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createAdmin(username: string, email: string, password: string) {
  const passwordHash = await hashPassword(password);
  const id = nanoid();
  
  const [admin] = await db.insert(admins).values({
    id,
    username,
    email,
    passwordHash,
  }).returning();
  
  return admin;
}

export async function getAdminByUsername(username: string) {
  const [admin] = await db.select().from(admins).where(eq(admins.username, username)).limit(1);
  return admin;
}

export async function getAdminByEmail(email: string) {
  const [admin] = await db.select().from(admins).where(eq(admins.email, email)).limit(1);
  return admin;
}

export async function getAdminById(id: string) {
  const [admin] = await db.select().from(admins).where(eq(admins.id, id)).limit(1);
  return admin;
}

export async function setResetToken(adminId: string, token: string, expiry: Date) {
  await db.update(admins)
    .set({
      resetToken: token,
      resetTokenExpiry: expiry,
    })
    .where(eq(admins.id, adminId));
}

export async function getAdminByResetToken(token: string) {
  const [admin] = await db.select()
    .from(admins)
    .where(eq(admins.resetToken, token))
    .limit(1);
  
  if (!admin) return null;
  
  // Check if token is expired
  if (admin.resetTokenExpiry && admin.resetTokenExpiry < new Date()) {
    return null;
  }
  
  return admin;
}

export async function updatePassword(adminId: string, newPassword: string) {
  const passwordHash = await hashPassword(newPassword);
  await db.update(admins)
    .set({
      passwordHash,
      resetToken: null,
      resetTokenExpiry: null,
      updatedAt: new Date(),
    })
    .where(eq(admins.id, adminId));
}

export async function getAllAdmins() {
  return db.select().from(admins);
}

