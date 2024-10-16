export const objectToQueryString = (data: Record<string, any> = {}): string => {
  const query = new URLSearchParams(data).toString();
  return query ? `?${query}` : '';
};
