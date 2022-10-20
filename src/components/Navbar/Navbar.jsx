import {
  AppBar,
  Avatar,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import { useSelector } from 'react-redux';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

// Traer de redux actualPage, accionesRap, etc

const Navbar = () => {
  const data = useSelector((state) => state.globalData);

  if (data.isPortrait) {
    return <>Hola</>;
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
          <Chip label={data.actualPage} color='primary' />

          {/* Acciones módulo */}
          <Stack direction='row'></Stack>
        </Stack>
        {/* ----------------------- */}

        {/* ------ RIGHT ------ */}
        <Stack direction='row' alignItems='center'>
          {/* Accesos rápidos */}
          <Stack direction='row' sx={{ mr: 2 }}>
            <IconButton>
              <DarkModeRoundedIcon />
            </IconButton>
            <IconButton>
              <DashboardRoundedIcon />
            </IconButton>
          </Stack>

          {/* Perfil */}
          <Stack sx={{ mr: 2, textAlign: 'right' }}>
            <Typography
              variant='body1'
              component='p'
              sx={{
                fontWeight: 500,
                color: '#474747',
                lineHeight: 1.5,
              }}
            >
              {data.user.name}
            </Typography>
            <Typography
              variant='body2'
              component='p'
              sx={{
                lineHeight: 1,
                color: '#8a8a8a',
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
