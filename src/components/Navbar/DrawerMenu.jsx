import {
  Container,
  Divider,
  Drawer,
  IconButton,
  Stack,
} from '@mui/material';

import { RoundedButton } from '../../styled';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

import { themes } from '../../constants/constants';
import ProfileInfo from './ProfileInfo';

const DrawerMenu = (props) => {
  const {
    navigateProfile,
    handleChangeTheme,
    data,
    drawerOpened,
    setDrawerOpened,
  } = props;

  return (
    <Drawer
      anchor='top'
      open={drawerOpened}
      onClose={() => setDrawerOpened(false)}
    >
      <Container sx={{ pt: 4, pb: 3 }}>
        {/* Perfil */}
        <ProfileInfo
          user={data.user}
          navigateProfile={navigateProfile}
          isPortrait
        />

        {/* Botones de accion de perfil */}
        <Stack sx={{ mt: 3 }} direction='row' justifyContent='space-evenly'>
          <RoundedButton variant='outlined' color='error'>
            Cerrar sesión
          </RoundedButton>
          <RoundedButton variant='outlined'>Mi perfil</RoundedButton>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* Botones de acceso rápido */}
        <Stack direction='row' justifyContent='space-evenly'>
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
      </Container>
    </Drawer>
  );
};

export default DrawerMenu;
