import { useEffect } from 'react';

import { ThemeProvider } from '@mui/material';

import { useDispatch } from 'react-redux';
import { setIsPortrait } from './features/globalData';

import { Router } from './views';

import { theme } from './theme';

const App = () => {
  const dispatch = useDispatch();

  // Resize detection
  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(setIsPortrait(window.innerWidth < 600));
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
