import baseUrl from '.';

const baseRoute = `${baseUrl}notifications`;

export const getNotifications = (token) => async () => {
  const response = await fetch(baseRoute, {
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
