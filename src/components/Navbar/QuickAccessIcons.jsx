import { useDispatch } from 'react-redux';

import { IconButton, Stack } from '@mui/material';

import { themes } from '../../constants/constants';
import { setTheme } from '../../features/globalData';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

const QuickAccessIcons = (props) => {
  const { theme,isPortrait } = props;

  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    const newValue = theme === themes.LIGHT ? themes.DARK : themes.LIGHT;

    dispatch(setTheme(newValue));
  };

  const config = {
    direction: "row",
    justifyContent: isPortrait && "space-evenly",
  }

  return (
    <Stack {...config} sx={{ mr: !isPortrait && 2 }}>
      <IconButton onClick={handleChangeTheme}>
        {theme === themes.LIGHT ? (
          <DarkModeRoundedIcon />
        ) : (
          <LightModeRoundedIcon />
        )}
      </IconButton>
      <IconButton>
        <DashboardRoundedIcon />
      </IconButton>
      <IconButton>
        <NotificationsRoundedIcon />
      </IconButton>
    </Stack>
  );
};

export default QuickAccessIcons;
