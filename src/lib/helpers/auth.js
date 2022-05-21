import decode from 'jwt-decode';
import UserRole from '../enums/UserRole';

const StorageKeys = {
  token: 'arystoteles-token',
  expirationTime: 'arystoteles-expirationTime',
};

export const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;
  return remainingDuration;
};

export const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem(StorageKeys.token);
  const storedExpirationDate = localStorage.getItem(StorageKeys.expirationTime);
  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removeItem(StorageKeys.token);
    localStorage.removeItem(StorageKeys.expirationTime);
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const getRole = (token) => {
  try {
    return decode(token)?.role || '';
  } catch (err) {
    return '';
  }
};

export const isAdmin = (role) => [UserRole.Admin, UserRole.Seed].includes(role);
