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

export const fetchMyChildren = (token) => async () => {
  const response = await fetch(`${baseRoute}/related`, {
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

export const createChild = async ({ token, childData }) => {
  const response = await fetch(`${baseRoute}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(childData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
