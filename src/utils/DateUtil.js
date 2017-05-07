
export function timeAgo(date) {
  const seconds = Math.floor((new Date()) - new Date(date)) / 1000;

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return `${interval}年以前`;
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval}月以前`;
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval}天以前`;
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval}小时以前`;
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval}分钟以前`;
  }

  return `${Math.floor(seconds)}秒以前`;
}