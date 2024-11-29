export const getDateAndTime = (dateData: string) => {
  const newDate = new Date(dateData);

  return {
    year: newDate.getFullYear(),
    month: newDate.getMonth() + 1,
    date: newDate.getDate(),
    hour: newDate.getHours(),
    min: newDate.getMinutes(),
  };
};

export const paddedTime = (time: number) => {
  return String(time).padStart(2, "0");
};

export const formatDate = (dateData: string) => {
  const { year, month, date } = getDateAndTime(dateData);

  return `${year}-${month}-${date}`;
};

export const formatTime = (dateData: string) => {
  const { hour, min } = getDateAndTime(dateData);

  return `${paddedTime(hour)}:${paddedTime(min)}`;
};
