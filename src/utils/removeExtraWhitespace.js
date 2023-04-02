export const removeExtraWhitespace = string => {
  return string.replace(/\s+/g, ' ').trim();
};
