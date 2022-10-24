import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  AppBar,
  Avatar,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';

import { themes } from '../../constants/constants';
import { setTheme } from '../../features/globalData';

import routes from '../../constants/routes';
import DrawerMenu from './DrawerMenu';
import ModuleChip from './ModuleChip';
import ProfileInfo from './ProfileInfo';
import PortalLogo from './PortalLogo';

const Navbar = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const data = useSelector((state) => state.globalData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeTheme = () => {
    const newValue = data.theme === themes.LIGHT ? themes.DARK : themes.LIGHT;

    dispatch(setTheme(newValue));
  };

  const navigateProfile = () => {
    setDrawerOpened(false);
    navigate(routes.MY_PROFILE.path);
  };

  if (data.isPortrait) {
    return (
      <>
        <AppBar position='fixed' color='white' sx={{ px: 1 }}>
          <Stack direction='row' justifyContent='space-between'>
            {/* ------ LEFT ------ */}
            <Stack direction='row' alignItems='center'>
              {/* Logo portal */}
              <PortalLogo />

              {/* Nombre módulo */}
              <ModuleChip currentModule={data.currentModule} />
            </Stack>

            {/* ------ RIGHT ------ */}
            <IconButton onClick={() => setDrawerOpened((state) => !state)}>
              <SegmentRoundedIcon />
            </IconButton>
          </Stack>
        </AppBar>

        {/* Drawer tras toque en boton */}
        <DrawerMenu
          data={data}
          drawerOpened={drawerOpened}
          setDrawerOpened={setDrawerOpened}
          navigateProfile={navigateProfile}
          handleChangeTheme={handleChangeTheme}
        />
      </>
    );
  }

  return (
    <AppBar position='fixed' color='white' sx={{ px: 1 }}>
      <Stack direction='row' justifyContent='space-between'>
        {/* ------ LEFT ------ */}
        <Stack direction='row' alignItems='center'>
          {/* Logo portal */}
          <PortalLogo />

          {/* Nombre módulo */}
          <ModuleChip currentModule={data.currentModule} />

          {/* Acciones módulo */}
          <Stack direction='row'></Stack>
        </Stack>

        {/* ------ RIGHT ------ */}
        <Stack direction='row' alignItems='center'>
          {/* Accesos rápidos */}
          <Stack direction='row' sx={{ mr: 2 }}>
            <IconButton onClick={handleChangeTheme}>
              {data.theme === themes.LIGHT ? (
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

          {/* Perfil */}
          <ProfileInfo user={data.user} navigateProfile={navigateProfile} />
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
