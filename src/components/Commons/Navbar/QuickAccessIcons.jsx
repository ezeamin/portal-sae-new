import { useDispatch, useSelector } from 'react-redux';

import { IconButton, Stack, Tooltip } from '@mui/material';

import themes from '../../../constants/themes';

import { setTheme } from '../../../features/globalData';
import {
  setMainDrawerOpened,
  setModulesModalOpened,
} from '../../../features/surfaces';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import es from '../../../lang/es';

const QuickAccessIcons = (props) => {
  const { theme, isPortrait } = props;

  const dispatch = useDispatch();
  const currentModule = useSelector((state) => state.globalData.currentModule);

  const closeMainDrawer = () => {
    dispatch(setMainDrawerOpened(false));
  };

  const handleChangeTheme = () => {
    const newValue = theme === themes.LIGHT ? themes.DARK : themes.LIGHT;

    dispatch(setTheme(newValue));
    closeMainDrawer();
  };

  const handleOpenNotifications = () => {
    closeMainDrawer();
  };

  const handleOpenModules = () => {
    if (currentModule !== 1000) dispatch(setModulesModalOpened(true));
    closeMainDrawer();
  };

  const config = {
    direction: 'row',
    justifyContent: isPortrait && 'space-evenly',
  };

  return (
    <Stack {...config} sx={{ mr: !isPortrait && 2 }}>
      <Tooltip title={es.CHANGE_THEME}>
        <IconButton onClick={handleChangeTheme}>
          {theme === themes.LIGHT ? (
            <DarkModeRoundedIcon />
          ) : (
            <LightModeRoundedIcon />
          )}
        </IconButton>
      </Tooltip>

      <Tooltip title={es.MODULES_NAME}>
        <IconButton onClick={handleOpenModules}>
          <DashboardRoundedIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title={es.NOTIFICATIONS}>
        <IconButton onClick={handleOpenNotifications}>
          <NotificationsRoundedIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default QuickAccessIcons;
