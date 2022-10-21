import { useEffect } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { useDispatch } from 'react-redux';
import { setIsPortrait, setTheme } from './features/globalData';

import { Router } from './views';

import { themes } from './constants/constants';
import useTheme from './hooks/useTheme';

const App = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

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
      dispatch(setTheme(themes.DARK));
    }

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};

export default App;