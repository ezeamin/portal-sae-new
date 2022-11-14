import { useEffect, useLayoutEffect } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { useDispatch } from 'react-redux';
import { setIsPortrait, setTheme } from './features/globalData';

import { Router } from './views';

import { usePostRefreshMutation } from './features/api/authApiSlice';

// import { themes } from './constants/constants';
import useTheme from './hooks/useTheme';
import { authRoutes } from './constants/Routing/routes';

const App = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const [postRefresh, response] = usePostRefreshMutation();

  // Resize & theme detection
  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(setIsPortrait(window.innerWidth < 600));
    });

    // Theme detection
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      // dispatch(setTheme(themes.DARK));
    }

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [dispatch, postRefresh]);

  // No access token (refresh)
  useLayoutEffect(() => {
    if (!window.location.href.includes('auth')) {
      postRefresh();
    }
  }, [postRefresh]);

  useEffect(() => {
    if (response.isError) {
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
