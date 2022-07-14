import baseUrl from '.';
import localization from '../../resources/localization';

const apiErrors = localization.apiErrors;

const baseRoute = `${baseUrl}users/`;

export const register = `${baseRoute}register`;
export const login = `${baseRoute}login`;

const sendAuthRequest = async (user, route) => {
  const response = await fetch(route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || apiErrors.loginError);
  }
  return data;
};

export const createLoginRequest = (user) => () => sendAuthRequest(user, login);

export const sendLoginRequest = async (user) =>
  await sendAuthRequest(user, login);

export const sendRegisterRequest = async (user) =>
  await sendAuthRequest(user, register);

export const logout = `${baseRoute}logout`;

export const forgotPassword = `${baseRoute}forgotPassword`;
export const resetPassword = (token) => `${baseRoute}forgotPassword/${token}`;

export const updateMyPassword = `${baseRoute}updateMyPassword`;
export const me = `${baseRoute}me`;
export const updateMe = `${baseRoute}updateMe`;
export const deleteMe = `${baseRoute}deleteMe`;

export const createGetMeRequest = (token) => async () => {
  const response = await fetch(me, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || apiErrors.loginError);
  }
  return data;
};

export const updatePassword = (token) => async (password) => {
  const response = await fetch(updateMyPassword, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    body: JSON.stringify({ password }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || apiErrors.loginError);
  }
  return data;
};

export const updateMeRequest = (token) => async () => {
  const response = await fetch(updateMe, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'PATCH',
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || apiErrors.loginError);
  }
  return data;
};

export const getAllUsers = `${baseRoute}`;
export const getUser = (id) => `${baseRoute}${id}`;

export const fetchAllUsers = (token) => async () => {
  const response = await fetch(getAllUsers, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || apiErrors.loginError);
  }
  return data;
};
