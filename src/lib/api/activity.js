import baseUrl from '.';

const baseRoute = `${baseUrl}activities`;

export const createActvitiesRequest = (token) => async () => {
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

export const createActivityRequest = (token, activityId) => async () => {
  const response = await fetch(`${baseRoute}/${activityId}`, {
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
