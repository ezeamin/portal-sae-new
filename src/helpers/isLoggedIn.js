import Cookies from 'js-cookie';

export const isLoggedIn = () => {
  if (Cookies.get('refreshToken')) return true;

  return false;
};

export const shouldRedirect = () => {
  if (window.location.href.includes('auth')) return false;

  return true;
};
