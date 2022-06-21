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

export const getOrganizationMedics = (token) => async () => {
  const response = await fetch(`${baseUrl}organizations/me/medics`, {
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

export const getMedic = (token, medicId) => async () => {
  const response = await fetch(`${baseRoute}${medicId}`, {
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

export const confirmMedic = async ({ token, medicId }) => {
  const response = await fetch(`${baseRoute}confirm/${medicId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'PATCH',
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
