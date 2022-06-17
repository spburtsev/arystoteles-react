import baseUrl from '.';

const baseRoute = `${baseUrl}backups`;
// const restoreRoute = `${baseRoute}/restore`;

export const createGetBackupsRequest = (token) => async () => {
  const response = await fetch(baseRoute, {
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
