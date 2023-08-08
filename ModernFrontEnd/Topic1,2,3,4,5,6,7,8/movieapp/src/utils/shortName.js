export const shortName = (text, count = 20) => {
  return `${text.length > count ? text.slice(0, count) + "..." : text}`;
};
