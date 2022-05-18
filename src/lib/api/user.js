import baseUrl from '.';

const baseRoute = `${baseUrl}users/`;

export const register = `${baseRoute}register`;
export const login = `${baseRoute}login`;
export const logout = `${baseRoute}logout`;

export const forgotPassword = `${baseRoute}forgotPassword`;
export const resetPassword = (token) => `${baseRoute}forgotPassword/${token}`;

export const updateMyPassword = `${baseRoute}updateMyPassword`;
export const me = `${baseRoute}me`;
export const updateMe = `${baseRoute}updateMe`;
export const deleteMe = `${baseRoute}deleteMe`;

export const getAllUsers = `${baseRoute}`;
export const getUser = (id) => `${baseRoute}${id}`;
