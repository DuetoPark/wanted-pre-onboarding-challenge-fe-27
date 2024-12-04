export const getDateAndTime = (dateData: string) => {
  const newDate = new Date(dateData);

  return {
    year: String(newDate.getFullYear()),
    month: String(newDate.getMonth() + 1),
    date: String(newDate.getDate()),
    hour: String(newDate.getHours()),
    min: String(newDate.getMinutes()),
  };
};

export const paddedTime = (time: string) => {
  return time.padStart(2, "0");
};

export const formatDate = (dateData: string) => {
  const { year, month, date } = getDateAndTime(dateData);

  return `${year}-${paddedTime(month)}-${paddedTime(date)}`;
};

export const formatTime = (dateData: string) => {
  const { hour, min } = getDateAndTime(dateData);

  return `${paddedTime(hour)}:${paddedTime(min)}`;
};
