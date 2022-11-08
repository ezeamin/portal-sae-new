import { baseUrlList } from '../constants/api/urls';
import customSwal from '../helpers/customSwal';

import { store } from '../app/store';
import { setUser } from '../features/globalData';
import { setAccessToken, setRefreshToken } from '../features/auth';

const logout = () => {
  // const token = JSON.parse(
  //   JSON.parse(localStorage.getItem('persist:root')).auth
  // ).accessToken;

  // console.log(token);
  customSwal({
    title: '¿Estás seguro?',
    text: '¿Deseas cerrar sesión?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Cerrar sesión',
  }).then(async (res) => {
    if (res.isConfirmed) {
      console.log('Sesion cerrada');

      const accToken = store.getState().auth.accessToken;
      const refToken = store.getState().auth.refreshToken;

      await fetch(`${baseUrlList.AUTH}/auth/logout`, {
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
      store.dispatch(setRefreshToken(null));

      localStorage.removeItem('persist:root');
      window.location.href = 'auth/login';
    }
  });
};

export default logout;
