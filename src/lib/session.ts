import type { AstroCookies } from 'astro';
import { nanoid } from 'nanoid';

const SESSION_COOKIE_NAME = 'admin_session';
const SESSION_SECRET = process.env.SESSION_SECRET || 'default-secret-change-in-production';

// Simple session storage (in production, use Redis or a database)
const sessions = new Map<string, { adminId: string; expiresAt: Date }>();

export function createSession(cookies: AstroCookies, adminId: string) {
  const sessionId = nanoid();
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7); // 7 days
  
  sessions.set(sessionId, { adminId, expiresAt });
  
  cookies.set(SESSION_COOKIE_NAME, sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
  
  return sessionId;
}

export function getSession(cookies: AstroCookies): string | null {
  const sessionId = cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!sessionId) return null;
  
  const session = sessions.get(sessionId);
  if (!session) return null;
  
  // Check if session expired
  if (session.expiresAt < new Date()) {
    sessions.delete(sessionId);
    return null;
  }
  
  return session.adminId;
}

export function destroySession(cookies: AstroCookies) {
  const sessionId = cookies.get(SESSION_COOKIE_NAME)?.value;
  if (sessionId) {
    sessions.delete(sessionId);
  }
  
  cookies.delete(SESSION_COOKIE_NAME, {
    path: '/',
  });
}

export function requireAuth(cookies: AstroCookies): string {
  const adminId = getSession(cookies);
  if (!adminId) {
    throw new Error('Unauthorized');
  }
  return adminId;
}

