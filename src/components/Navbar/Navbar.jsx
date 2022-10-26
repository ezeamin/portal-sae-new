import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppBar, IconButton, Stack } from '@mui/material';

import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';

import DrawerMenu from './DrawerMenu';
import ModuleChip from './ModuleChip';
import ProfileInfo from './ProfileInfo';
import PortalLogo from './PortalLogo';
import QuickAccessIcons from './QuickAccessIcons';

import routes from '../../constants/routes';

import getModuleInfo from '../../helpers/getModuleInfo';

const Navbar = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const data = useSelector((state) => state.globalData);

  const navigate = useNavigate();

  const module = getModuleInfo(data.currentModule);

  const navigateProfile = () => {
    setDrawerOpened(false);
    navigate(routes.PROFILE.path);
  };

  if (data.isPortrait) {
    return (
      <>
        <AppBar  position='fixed' color='white' sx={{ px: 1 }}>
          <Stack direction='row' justifyContent='space-between'>
            {/* ------ LEFT ------ */}
            <Stack direction='row' alignItems='center'>
              <PortalLogo />
              <ModuleChip currentModule={module} />
            </Stack>

            {/* ------ RIGHT ------ */}
            <IconButton onClick={() => setDrawerOpened((state) => !state)}>
              <SegmentRoundedIcon />
            </IconButton>
          </Stack>
        </AppBar>

        {/* Drawer tras toque en boton */}
        {/* TODO: Pasar acciones de modulo */}
        <DrawerMenu
          data={data}
          drawerOpened={drawerOpened}
          setDrawerOpened={setDrawerOpened}
          navigateProfile={navigateProfile}
        />
      </>
    );
  }

  return (
    <AppBar position='fixed' color='white' sx={{ px: 1 }}>
      <Stack direction='row' justifyContent='space-between'>
        {/* ------ LEFT ------ */}
        <Stack direction='row' alignItems='center'>
          <PortalLogo />
          <ModuleChip currentModule={module} />

          {/* Acciones módulo */}
          <Stack direction='row'></Stack>
        </Stack>

        {/* ------ RIGHT ------ */}
        <Stack direction='row' alignItems='center'>
          <QuickAccessIcons theme={data.theme} />
          <ProfileInfo user={data.user} navigateProfile={navigateProfile} />
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
