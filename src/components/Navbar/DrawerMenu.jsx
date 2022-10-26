import { Container, Divider, Drawer, Stack } from '@mui/material';

import { RoundedButton } from '../../styled';

import ProfileInfo from './ProfileInfo';
import QuickAccessIcons from './QuickAccessIcons';

const DrawerMenu = (props) => {
  const { navigateProfile, data, drawerOpened, setDrawerOpened } = props;

  return (
    <Drawer
      anchor='top'
      open={drawerOpened}
      onClose={() => setDrawerOpened(false)}
      PaperProps={{
        variant: 'roundedBottom',
      }}
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
          <RoundedButton variant='outlined' onClick={navigateProfile}>
            Mi perfil
          </RoundedButton>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* Botones de acceso rápido */}
        <QuickAccessIcons theme={data.theme} isPortrait />
      </Container>
    </Drawer>
  );
};

export default DrawerMenu;
