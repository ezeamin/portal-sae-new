import { useEffect, useLayoutEffect } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { useDispatch } from 'react-redux';
import { setIsPortrait, setTheme } from './features/globalData';

import { Router } from './views';

import { usePostRefreshMutation } from './features/api/authApiSlice';

import themes from './constants/themes';
import useTheme from './hooks/useTheme';

import { authRoutes } from './constants/Routing/routes';
import { isLoggedIn, shouldRedirect } from './helpers/isLoggedIn';

const App = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const [postRefresh, response] = usePostRefreshMutation();
  // Resize detection
  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(setIsPortrait(window.innerWidth < 600));
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [dispatch, postRefresh]);

  useLayoutEffect(() => {
    // Conseguir nuevo Access Token al refrescar pantalla
    if (isLoggedIn()) postRefresh();
    else if (shouldRedirect()) window.location.replace(authRoutes.LOGIN.path);

    // Theme detection
    if (
      !window.location.href.includes('auth') &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      dispatch(setTheme(themes.DARK));
    }
  }, [postRefresh, dispatch]);

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
