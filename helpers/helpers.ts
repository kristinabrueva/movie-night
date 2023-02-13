export const formatDate = (originalDate: string): string => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = originalDate.split("-").reverse();
  return date[0] + " " + months[parseInt(date[1]) - 1] + ", " + date[2];
};
