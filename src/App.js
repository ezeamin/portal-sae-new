import { useEffect, useLayoutEffect } from 'react';
import Cookies from 'js-cookie';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { useDispatch, useSelector } from 'react-redux';
import { setIsPortrait, setTheme } from './features/globalData';

import { Router } from './views';

import { usePostRefreshMutation } from './features/api/authApiSlice';

import themes from './constants/themes';
import useTheme from './hooks/useTheme';
import { authRoutes } from './constants/Routing/routes';

const App = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const [postRefresh, response] = usePostRefreshMutation();
  const user = useSelector((state) => state.globalData.user);

  // Resize detection
  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(setIsPortrait(window.innerWidth < 600));
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [dispatch, postRefresh]);

  // No access token (refresh screen)
  useLayoutEffect(() => {
    // Conseguir nuevo Access Token
    if (Cookies.get('refreshToken')) postRefresh();

    // Redireccionar a auth si no hay user
    if (!user.number && !window.location.href.includes('auth'))
      window.location.replace(authRoutes.LOGIN.path);

    // Theme detection
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      dispatch(setTheme(themes.DARK));
    }
  }, [postRefresh, dispatch, user.number]);

  useEffect(() => {
    if (response.isError && !window.location.href.includes('auth')) {
      window.location.replace(authRoutes.LOGIN.path);
    }
  }, [response]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;
