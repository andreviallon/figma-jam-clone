export const generateId = (): string => {
  return Math.floor(Math.random() * Date.now()).toString();
};
