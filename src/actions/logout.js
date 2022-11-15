import Cookies from 'js-cookie';

import { store } from '../app/store';

import { baseUrlList } from '../constants/api/urls';
import { authRoutes } from '../constants/Routing/routes';

import { setAccessToken } from '../features/auth';
import { setUser } from '../features/globalData';

import customSwal from '../helpers/customSwal';

const logoutAction = async () => {
  const accToken = store.getState().auth.accessToken;
  const refToken = Cookies.get('refreshToken') || '';

  await fetch(`${baseUrlList.AUTH}/logout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      refresh_token: refToken,
    }),
  });

  store.dispatch(setUser(null));
  store.dispatch(setAccessToken(null));
  Cookies.remove('refreshToken');

  window.location.href = authRoutes.LOGIN.path;
};

const logoutSwal = () => {
  customSwal({
    title: '¿Estás seguro?',
    text: '¿Deseas cerrar sesión?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Cerrar sesión',
  }).then((res) => {
    if (res.isConfirmed) {
      logoutAction();
    }
  });
};

export { logoutSwal, logoutAction };
