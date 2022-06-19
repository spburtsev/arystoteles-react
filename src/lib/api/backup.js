import baseUrl from '.';

const baseRoute = `${baseUrl}backups`;
const restoreRoute = `${baseRoute}/restore`;

export const getBackupsRequest = (token) => async () => {
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

export const createBackupRequest = async ({ token, fileName }) =>
  await fetch(baseRoute, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ fileName }),
  }).then((data) => data.json());

export const restoreRequest = async ({ token, fileName }) =>
  await fetch(`${restoreRoute}/${fileName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
  }).then((data) => data.json());
