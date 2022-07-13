import baseUrl from '.';
const baseRoute = `${baseUrl}organizations`;
const meRoute = `${baseRoute}/me`;

export const getOrganization = (token, organizationId) => async () => {
  const response = await fetch(`${baseRoute}/${organizationId}`, {
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

export const getOrganizations = (token, addOpts) => async () => {
  const route = addOpts ? `${baseRoute}?${addOpts}` : baseRoute;
  const response = await fetch(route, {
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
