import {
  HomeRounded,
  PersonRounded,
} from '@mui/icons-material';


const currentYear = new Date().getFullYear();
export const footerLabelSistemas = `© ${currentYear} - Dirección de Sistemas`;

export const routeIconsConfig = {
  sx: {
    fontSize: '1.2rem',
    ml: '12px !important',
  },
};

export const ids = {
  MIN: {
    MODULES_HOME: 100,
    MODULES_PROFILES: 10000,
    AUTH: 20000,
    ROUTES: 100000,
  },
  MAX: {
    MODULES_HOME: 9999,
    MODULES_PROFILES: 19999,
    AUTH: 29999,
    ROUTES: 199999,
  },
};

export const authRoutesRouter = {
  RESET_PASSWORD: {
    id: 20001,
    name: 'Blanqueo contraseña',
    path: '/auth/reset-password',
    color: 'primary',
    routeInfo: {
      color: 'primary',
      icon: <></>,
    },
  },
  RESTORE_PASSWORD: {
    id: 20002,
    name: 'Solicitud blanqueo de contraseña',
    path: '/auth/restore-password',
    color: 'primary',
    routeInfo: {
      color: 'primary',
      icon: <></>,
    },
  },
};

export const mainRoutes = {
  HOME: {
    id: 100000,
    name: 'Inicio',
    path: '/',
    color: 'primary',
    routeInfo: {
      color: 'primary',
      icon: <HomeRounded {...routeIconsConfig} />,
    },
  },
  AUTH: {
    id: 100001,
    name: 'Login',
    path: '/auth',
    color: 'primary',
    routeInfo: {
      color: 'primary',
      icon: <></>,
    },
  },
  PROFILE: {
    id: 100002,
    name: 'Perfil',
    path: '/perfil',
    color: 'primary',
    routeInfo: {
      color: 'primary',
      icon: <PersonRounded {...routeIconsConfig} />,
    },
  },
};
