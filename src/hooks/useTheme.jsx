import { useSelector } from 'react-redux';

import { createTheme } from '@mui/material/styles';

import { themes } from '../constants/constants';

const useTheme = () => {
  const themeOption = useSelector((state) => state.globalData.theme);

  return createTheme({
    palette: {
      mode: themeOption,
      ...(themeOption === themes.LIGHT
        ? {
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
          }
        : {
            primary: {
              main: '#80a5d7',
              dark: '#7593be',
              contrastText: '#fff',
            },
            light: {
              contrastText: '#dddddd',
              main: '#414141',
            },
            white: {
              contrastText: '#dfdfdf',
              main: '#000000',
            },
          }),
    },
  });
};

export default useTheme;
