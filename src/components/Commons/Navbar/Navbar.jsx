import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar, IconButton, Stack } from '@mui/material';

import { SegmentRounded } from '@mui/icons-material';

import DrawerMenu from './DrawerMenu';
import PageChip from './PageChip';
import ProfileInfo from './ProfileInfo';
import PortalLogo from './PortalLogo';
import QuickAccessIcons from './QuickAccessIcons';

import getPageInfo from '../../../helpers/getPageInfo';

import { setMainDrawerOpened } from '../../../features/surfaces';
import { profileRoutes } from '../../../constants/Routing/routes';

const Navbar = () => {
  const data = useSelector((state) => state.globalData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const page = getPageInfo(data.currentPage);

  const closeDrawer = () => {
    dispatch(setMainDrawerOpened(false));
  };

  const openDrawer = () => {
    dispatch(setMainDrawerOpened(true));
  };

  const navigateProfile = () => {
    closeDrawer();
    navigate(profileRoutes.MAIN.path);
  };

  if (data.isPortrait) {
    return (
      <>
        <AppBar position='fixed' color='white' sx={{ px: 1 }}>
          <Stack direction='row' justifyContent='space-between'>
            {/* ------ LEFT ------ */}
            <Stack direction='row' alignItems='center'>
              <PortalLogo />
              <PageChip currentPage={page} />
            </Stack>

            {/* ------ RIGHT ------ */}
            <IconButton onClick={openDrawer}>
              <SegmentRounded />
            </IconButton>
          </Stack>
        </AppBar>

        {/* Drawer tras toque en boton */}
        {/* // TODO: Pasar acciones de modulo */}
        <DrawerMenu data={data} navigateProfile={navigateProfile} />
      </>
    );
  }

  return (
    <AppBar position='fixed' color='white' sx={{ px: 1 }}>
      <Stack direction='row' justifyContent='space-between'>
        {/* ------ LEFT ------ */}
        <Stack direction='row' alignItems='center'>
          <PortalLogo />
          <PageChip currentPage={page} />

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
