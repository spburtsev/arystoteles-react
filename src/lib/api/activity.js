import baseUrl from '.';
import AppLocale from '../enums/AppLocale';
import { matchMonthRange } from '../helpers/map-age-group';

const baseRoute = `${baseUrl}activities`;

export const getActvitiesRequest = (token) => async () => {
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

export const getActivityRequest = (token, activityId) => async () => {
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

export const updateActivityRequest = async ({ token, activity }) => {
  const title = {
    [AppLocale.English]: activity.titleEn,
    [AppLocale.Ukrainian]: activity.titleUa,
  };
  const description = {
    [AppLocale.English]: activity.descEn,
    [AppLocale.Ukrainian]: activity.descUa,
  };
  const ageGroups = matchMonthRange(
    activity.ageGroupLowerBound,
    activity.ageGroupUpperBound,
  );
  const reqBody = {
    title,
    description,
    ageGroups,
    duration: activity.duration,
    frequency: activity.frequency,
    category: activity.category,
  };
  console.log(reqBody);

  return await fetch(`${baseRoute}/${activity._id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify(reqBody),
  }).then((data) => data.json());
};

export const deleteActivityRequest = async ({ token, activityId }) => {
  return await fetch(`${baseRoute}/${activityId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  });
};

export const createActvityRequest = async ({ token, activity }) => {
  const title = {
    [AppLocale.English]: activity.titleEn,
    [AppLocale.Ukrainian]: activity.titleUa,
  };
  const description = {
    [AppLocale.English]: activity.descEn,
    [AppLocale.Ukrainian]: activity.descUa,
  };
  const ageGroups = matchMonthRange(
    activity.ageGroupLowerBound,
    activity.ageGroupUpperBound,
  );
  const reqBody = {
    title,
    description,
    ageGroups,
    duration: activity.duration,
    frequency: activity.frequency,
    category: activity.category,
  };

  return await fetch(`${baseRoute}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(reqBody),
  }).then((data) => data.json());
};
