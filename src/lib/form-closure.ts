/**
 * Check if the registration form should be closed based on time
 * Form closes permanently at 5pm today unless ALLOW_SUBMISSIONS is set
 */
export function isFormClosedByTime(): boolean {
  const allow =
    (typeof import.meta !== 'undefined' && import.meta.env?.ALLOW_SUBMISSIONS === 'true') ||
    process.env.ALLOW_SUBMISSIONS === 'true';
  if (allow) return false;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const closureTime = new Date(today);
  closureTime.setHours(17, 0, 0, 0); // 5pm today

  return now >= closureTime;
}
