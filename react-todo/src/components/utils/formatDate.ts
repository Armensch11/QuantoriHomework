const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const formatDate = (date: string) => {
  const now = new Date();
  const nowDate = now.getDate();
  const nowMonth = now.getMonth();
  const taskDate = new Date(date);
  const taskDateDay = taskDate.getDate();
  const weekDay = taskDate.toLocaleDateString("en-us", { weekday: "long" });
  const taskDateMonth = taskDate.getMonth();
  const formattedDate = `${weekDay}, ${taskDateDay} ${MONTHS[taskDateMonth]}`;
  if (nowDate === taskDateDay && nowMonth === taskDateMonth) {
    return "Today";
  }
  if (nowDate + 1 === taskDateDay && nowMonth === taskDateMonth) {
    return "Tomorrow";
  }

  return formattedDate;
};
