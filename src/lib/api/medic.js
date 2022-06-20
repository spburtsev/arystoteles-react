import baseUrl from '.';
const baseRoute = `${baseUrl}medics/`;
const meRoute = `${baseRoute}/me`;

export const medicGetSelf = (token) => async () => {
  const response = await fetch(meRoute, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
