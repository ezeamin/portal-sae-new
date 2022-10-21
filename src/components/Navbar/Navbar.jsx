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
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

import { themes } from '../../constants/constants';
import { setTheme } from '../../features/globalData';

// Traer de redux actualPage, accionesRap, etc

const Navbar = () => {
  const data = useSelector((state) => state.globalData);

  const dispatch = useDispatch();

  if (data.isPortrait) {
    return <>Hola</>;
  }

  const userColors = {
    name: data.theme === themes.LIGHT ? '#474747' : '#fff',
    number: data.theme === themes.LIGHT ? '#8a8a8a' : '#c4c4c4',
  };

  const handleChangeTheme = () => {
    const newValue = data.theme === themes.LIGHT ? themes.DARK : themes.LIGHT;

    dispatch(setTheme(newValue));
  };

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
        {/* ----------------------- */}

        {/* ------ RIGHT ------ */}
        <Stack direction='row' alignItems='center'>
          {/* Accesos rápidos */}
          <Stack direction='row' sx={{ mr: 2 }}>
            <IconButton onClick={handleChangeTheme}>
              <DarkModeRoundedIcon />
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
              sx={{
                fontWeight: 500,
                lineHeight: 1.5,
                color: userColors.name,
              }}
            >
              {data.user.name}
            </Typography>
            <Typography
              variant='body2'
              component='p'
              sx={{
                lineHeight: 1,
                color: userColors.number,
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
