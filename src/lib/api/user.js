import baseUrl from '.';
import localization from '../../resources/localization';

const apiErrors = localization.apiErrors;

const baseRoute = `${baseUrl}users/`;

export const register = `${baseRoute}register`;
export const login = `${baseRoute}login`;

export const sendLoginRequest = async (email, password) => {
  const response = await fetch(login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || apiErrors.loginError);
  }
  return data;
};

export const logout = `${baseRoute}logout`;

export const forgotPassword = `${baseRoute}forgotPassword`;
export const resetPassword = (token) => `${baseRoute}forgotPassword/${token}`;

export const updateMyPassword = `${baseRoute}updateMyPassword`;
export const me = `${baseRoute}me`;
export const updateMe = `${baseRoute}updateMe`;
export const deleteMe = `${baseRoute}deleteMe`;

export const getAllUsers = `${baseRoute}`;
export const getUser = (id) => `${baseRoute}${id}`;
