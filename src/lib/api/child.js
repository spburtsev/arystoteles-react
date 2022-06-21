import baseUrl from '.';
const baseRoute = `${baseUrl}children`;

export const getChildren = (token) => async () => {
  const response = await fetch(`${baseRoute}/assigned`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
