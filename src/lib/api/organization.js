import baseUrl from '.';
const baseRoute = `${baseUrl}organizations`;
const meRoute = `${baseRoute}/me`;

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

export const getOrganizationSelf = (token) => async () => {
  const response = await fetch(meRoute, {
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
