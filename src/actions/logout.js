import { baseUrlList } from '../constants/api/urls';
import customSwal from '../helpers/customSwal';

import Cookies from 'js-cookie';

import { store } from '../app/store';
import { setUser } from '../features/globalData';
import { setAccessToken } from '../features/auth';

import { authRoutes } from '../constants/Routing/routes';

const logout = () => {
  customSwal({
    title: '¿Estás seguro?',
    text: '¿Deseas cerrar sesión?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Cerrar sesión',
  }).then(async (res) => {
    if (res.isConfirmed) {
      const accToken = store.getState().auth.accessToken;
      // const refToken = store.getState().auth.refreshToken;
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
    }
  });
};

export default logout;
