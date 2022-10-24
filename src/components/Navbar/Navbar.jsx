import { useState } from 'react';

import {
  AppBar,
  Avatar,
  Chip,
  Drawer,
  IconButton,
  Stack,
  Typography,
  Container,
  Divider,
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';

import { themes } from '../../constants/constants';
import { setTheme } from '../../features/globalData';
import { RoundedButton } from '../../styled';

const Navbar = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);
  const data = useSelector((state) => state.globalData);

  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    const newValue = data.theme === themes.LIGHT ? themes.DARK : themes.LIGHT;

    dispatch(setTheme(newValue));
  };

  if (data.isPortrait) {
    return (
      <>
        <AppBar position='fixed' color='white' sx={{ px: 1 }}>
          <Stack direction='row' justifyContent='space-between'>
            
            {/* ------ LEFT ------ */}
            <Stack direction='row' alignItems='center'>
              {/* Logo portal */}
              <button style={{ marginRight: '0.5rem', height: '65px' }}>
                <img
                  src='/assets/img/logos/logo-57.png'
                  alt='Portal del SAE'
                  height={45}
                  width={42}
                />
              </button>

              {/* Nombre módulo */}
              <Chip
                label={data.currentPage}
                color='primary'
                sx={{
                  fontWeight: 'bold',
                }}
              />
            </Stack>

            {/* ------ RIGHT ------ */}
            <IconButton onClick={() => setDrawerOpened((state) => !state)}>
              <SegmentRoundedIcon />
            </IconButton>
          </Stack>
        </AppBar>

        {/* Drawer tras toque en boton */}
        <Drawer
          anchor='top'
          open={drawerOpened}
          onClose={() => setDrawerOpened(false)}
        >
          <Container sx={{ pt: 4, pb: 3 }}>
            {/* Perfil */}
            <Stack direction='row' justifyContent='space-between'>
              <Avatar alt={data.user.name} src={data.user?.avatar || '/'} />
              <Stack sx={{ textAlign: 'right' }}>
                <Typography
                  variant='body1'
                  component='p'
                  color='light.contrastText'
                  fontWeight='bold'
                  sx={{
                    lineHeight: 1.5,
                  }}
                >
                  {data.user.name}
                </Typography>
                <Typography
                  variant='body2'
                  component='p'
                  color='light.secondaryContrastText'
                  sx={{
                    lineHeight: 1,
                  }}
                >
                  {data.user.number}
                </Typography>
              </Stack>
            </Stack>

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
      </>
    );
  }

  return (
    <AppBar position='fixed' color='white' sx={{ px: 1 }}>
      <Stack direction='row' justifyContent='space-between'>

        {/* ------ LEFT ------ */}
        <Stack direction='row' alignItems='center'>
          {/* Logo portal */}
          <button style={{ marginRight: '0.5rem', height: '65px' }}>
            <img
              src='/assets/img/logos/logo-57.png'
              alt='Portal del SAE'
              height={45}
              width={42}
            />
          </button>

          {/* Nombre módulo */}
          <Chip
            label={data.currentPage}
            color='primary'
            sx={{
              fontWeight: 'bold',
            }}
          />

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
          <Stack sx={{ mr: 2, textAlign: 'right' }}>
            <Typography
              variant='body1'
              component='p'
              color='light.contrastText'
              fontWeight='bold'
              sx={{
                lineHeight: 1.5,
              }}
            >
              {data.user.name}
            </Typography>
            <Typography
              variant='body2'
              component='p'
              color='light.secondaryContrastText'
              sx={{
                lineHeight: 1,
              }}
            >
              {data.user.number}
            </Typography>
          </Stack>
          <button>
            <Avatar alt={data.user.name} src={data.user?.avatar || '/'} />
          </button>
        </Stack>
        {/* ----------------------- */}
      </Stack>
    </AppBar>
  );
};

export default Navbar;
