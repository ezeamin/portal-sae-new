import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#80a5d7',
      dark: '#7593be',
      contrastText: '#fff',
    },
    light: {
      contrastText: '#3f3f3f',
      main: '#f0f0f0',
    },
    white: {
      contrastText: '#000',
      main: '#fff',
    },
  },
});
