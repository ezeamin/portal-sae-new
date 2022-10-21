import { useSelector } from 'react-redux';

import { createTheme } from '@mui/material/styles';

import { themes } from '../constants/constants';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

const useTheme = () => {
  const themeOption = useSelector((state) => state.globalData.theme);

  return createTheme({
    palette: {
      mode: themeOption,
      ...(themeOption === themes.LIGHT ? lightTheme : darkTheme),
    },
  });
};

export default useTheme;
