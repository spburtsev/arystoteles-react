import baseUrl from '.';
const baseRoute = `${baseUrl}children`;
const screeningsRoute = `${baseUrl}screenings`;

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

export const fetchChild = (token, childId) => async () => {
  const response = await fetch(`${baseRoute}/${childId}`, {
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

export const updateChild = async ({ token, childId, childData }) => {
  console.log(childData);
  const response = await fetch(`${baseRoute}/${childId}`, {
    method: 'PATCH',
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

export const checkForNewScreening = async ({ token, childId }) => {
  const response = await fetch(`${screeningsRoute}/monthly/${childId}`, {
    method: 'POST',
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
