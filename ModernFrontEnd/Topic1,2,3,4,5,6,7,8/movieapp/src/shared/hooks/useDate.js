export const useDate = () => {
  const date = new Date();

  const hour = date.getHours();
  const min = date.getMinutes();

  const time = `${hour}:${min}`;
  const year = date.getFullYear();

  return { time, year };
};
