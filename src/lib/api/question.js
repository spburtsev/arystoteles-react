import baseUrl from '.';

const baseRoute = `${baseUrl}questions`;

export const getQuestions = (token) => async () => {
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

export const getQuestion = (token, questionId) => async () => {
  const response = await fetch(`${baseRoute}/${questionId}`, {
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

export const updateQuestion = async ({ token, question }) => {
  return await fetch(`${baseRoute}/${question._id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify(question),
  }).then((data) => data.json());
};

export const deleteQuestion = async ({ token, activityId }) => {
  return await fetch(`${baseRoute}/${activityId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  });
};

export const createQuestion = async ({ token, question }) => {
  return await fetch(`${baseRoute}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(question),
  }).then((data) => data.json());
};
