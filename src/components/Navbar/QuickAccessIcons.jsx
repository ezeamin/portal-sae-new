import { useDispatch } from 'react-redux';

import { IconButton, Stack, Tooltip } from '@mui/material';

import themes from '../../constants/themes';
import { setTheme } from '../../features/globalData';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

const QuickAccessIcons = (props) => {
  const { theme, isPortrait } = props;

  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    const newValue = theme === themes.LIGHT ? themes.DARK : themes.LIGHT;

    dispatch(setTheme(newValue));
  };

  const config = {
    direction: 'row',
    justifyContent: isPortrait && 'space-evenly',
  };

  return (
    <Stack {...config} sx={{ mr: !isPortrait && 2 }}>
      <Tooltip title='Cambiar tema'>
        <IconButton onClick={handleChangeTheme}>
          {theme === themes.LIGHT ? (
            <DarkModeRoundedIcon />
          ) : (
            <LightModeRoundedIcon />
          )}
        </IconButton>
      </Tooltip>
      <Tooltip title='Módulos'>
        <IconButton>
          <DashboardRoundedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title='Notificaciones'>
        <IconButton>
          <NotificationsRoundedIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default QuickAccessIcons;
