export default function Time({ dateTime }: { dateTime: string }) {
  const date = new Date(dateTime);
  const dateString = date.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Tokyo",
  });
  return (
    <time dateTime={dateTime} title={dateTime}>
      {dateString}
    </time>
  );
}
