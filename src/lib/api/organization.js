import baseUrl from '.';
const baseRoute = `${baseUrl}organizations`;

export const getOrganization = (id, token) => async () => {
  const response = await fetch(`${baseRoute}/${id}`, {
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
