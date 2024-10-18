export const formatUnknown = (data?: string, replacement: string = '🤷‍♂️') => {
  if (!data || data === 'unknown') {
    return replacement;
  }
  return data;
};
