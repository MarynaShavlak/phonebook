export function getCurrentTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.toLocaleString('default', { month: 'long' });
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedTime = `${month} ${day}, ${year} ${hours
    .toString()
    .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  return formattedTime;
}
