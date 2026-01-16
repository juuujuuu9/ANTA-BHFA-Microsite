/**
 * Check if the registration form should be closed based on time
 * Form closes permanently at 5pm today
 */
export function isFormClosedByTime(): boolean {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const closureTime = new Date(today);
  closureTime.setHours(17, 0, 0, 0); // 5pm today
  
  return now >= closureTime;
}
