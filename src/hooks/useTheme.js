import { useSelector } from 'react-redux';

import { createTheme } from '@mui/material/styles';

import themes from '../constants/themes';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

const defaultBorderRadius = '1rem';

const useTheme = () => {
  const themeOption = useSelector((state) => state.globalData.theme);

  return createTheme({
    palette: {
      mode: themeOption,
      ...(themeOption === themes.LIGHT ? lightTheme : darkTheme),
    },
    typography: {
      h5: {
        // fontSize
      },
      body1: {
        fontSize: '1.1rem',
      },
      body2: {
        fontSize: '1rem',
      },
    },
    components: {
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            fontSize: '1rem',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          fullyRounded: {
            borderRadius: defaultBorderRadius,
            boxShadow:
              '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          },
          roundedBottom: {
            borderRadius: '0 0 1rem 1rem',
            boxShadow:
              '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            [`& div`]: {
              borderRadius: defaultBorderRadius,
            },
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            borderRadius: defaultBorderRadius,
          },
        },
      },
    },
  });
};

export default useTheme;
