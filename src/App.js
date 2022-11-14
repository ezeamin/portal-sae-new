import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { useDispatch } from 'react-redux';
import { setIsPortrait, setTheme } from './features/globalData';

import { Router } from './views';

import { usePostRefreshMutation } from './features/api/authApiSlice';

// import { themes } from './constants/constants';
import useTheme from './hooks/useTheme';

const App = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const [postRefresh] = usePostRefreshMutation();

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

    // No access token (refresh)
    if (!window.location.href.includes('auth')) {
      dispatch(postRefresh());
    }

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [dispatch, postRefresh]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;
