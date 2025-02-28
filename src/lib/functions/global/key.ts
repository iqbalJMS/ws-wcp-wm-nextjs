export const generateUniqueKey = (prefix = '') => {
  return `${prefix}${Date.now()}-${Math.random().toString(36)}`;
};
