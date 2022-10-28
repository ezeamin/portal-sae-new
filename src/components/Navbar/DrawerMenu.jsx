import { Container, Divider, Drawer, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setMainDrawerOpened } from '../../features/surfaces';

import { RoundedButton } from '../../styled';

import ProfileInfo from './ProfileInfo';
import QuickAccessIcons from './QuickAccessIcons';

const DrawerMenu = (props) => {
  const { navigateProfile, data } = props;

  const drawerOpened = useSelector((state) => state.surfaces.mainDrawerOpened);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setMainDrawerOpened(false));
  };

  return (
    <Drawer
      anchor='top'
      open={drawerOpened}
      onClose={handleClose}
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
