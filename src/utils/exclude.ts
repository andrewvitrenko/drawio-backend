export const exclude = <T, Key extends keyof T>(
  source: T,
  keys: Key[],
): Omit<T, Key> => {
  return Object.fromEntries(
    Object.entries(source).filter(([key]) => !keys.includes(key as Key)),
  ) as Omit<T, Key>;
};
