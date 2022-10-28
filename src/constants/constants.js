import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import MoveToInboxRoundedIcon from '@mui/icons-material/MoveToInboxRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import modulesColors from './modulesColors';

import logout from '../actions/logout';

const iconsConfig = {
  sx: {
    fontSize: '3rem',
  },
};

const routeIconsConfig = {
  sx: {
    fontSize: '1.2rem',
    ml: '12px !important',
  },
};

export const ids = {
  MIN: {
    ROUTES: 1000,
    MODULES_HOME: 0,
    MODULES_PROFILES: 100,
    AUTH: 200,
  },
  MAX: {
    ROUTES: 2000,
    MODULES_HOME: 99,
    MODULES_PROFILES: 199,
    AUTH: 299,
  },
};

export const authRoutesRouter = {
  RESET_PASSWORD: {
    id: 200,
    name: 'Blanqueo contraseña',
    path: '/auth/reset-password',
    color: 'primary',
    routeInfo: {
      color: 'primary',
      icon: <></>,
    },
  },
  RESTORE_PASSWORD: {
    id: 201,
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
  AUTH: {
    id: 1000,
    name: 'Login',
    path: '/auth',
    color: 'primary',
    routeInfo: {
      color: 'primary',
      icon: <></>,
    },
  },
  HOME: {
    id: 1001,
    name: 'Inicio',
    path: '/',
    color: 'primary',
    routeInfo: {
      color: 'primary',
      icon: <HomeRoundedIcon {...routeIconsConfig} />,
    },
  },
  PROFILE: {
    id: 1002,
    name: 'Perfil',
    path: '/perfil',
    color: 'primary',
    routeInfo: {
      color: 'primary',
      icon: <PersonRoundedIcon {...routeIconsConfig} />,
    },
  },
};

export const modules = {
  HOME: {
    ESCRITOS: {
      id: 0,
      name: 'Ingreso escritos',
      description: 'Presentaciones',
      dataTestId: 'button-ingreso-escritos',
      path: '/escritos',
      color: modulesColors.ESCRITOS.main,
      icon: <CreateRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'ESCRITOS',
        icon: <CreateRoundedIcon {...routeIconsConfig} />,
      },
    },
    NOTIFICACIONES: {
      id: 1,
      name: 'Notificaciones',
      description: 'Casillero virtual',
      dataTestId: 'button-notificaciones',
      path: '/notificaciones',
      color: modulesColors.NOTIFICACIONES.main,
      icon: <MoveToInboxRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'NOTIFICACIONES',
        icon: <MoveToInboxRoundedIcon {...routeIconsConfig} />,
      },
    },
    PAGOS: {
      id: 2,
      name: 'Pagos judiciales',
      description: 'Online/Presencial',
      dataTestId: 'button-pagos-judiciales',
      path: '/pagos',
      color: modulesColors.PAGOS.main,
      icon: <DescriptionRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'PAGOS',
        icon: <DescriptionRoundedIcon {...routeIconsConfig} />,
      },
    },
    TURNOS: {
      id: 3,
      name: 'Solicitud turnos',
      description: 'Online/Presencial',
      dataTestId: 'button-solicitud-turnos',
      path: '/turnos',
      color: modulesColors.TURNOS.main,
      icon: <WorkHistoryRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'TURNOS',
        icon: <WorkHistoryRoundedIcon {...routeIconsConfig} />,
      },
    },
    CONSULTA_EXPEDIENTES: {
      id: 4,
      name: 'Consulta expedientes',
      description: 'Online/Presencial',
      dataTestId: 'button-consulta-expedientes',
      path: '/expedientes',
      color: modulesColors.CONSULTA_EXPEDIENTES.main,
      icon: <SearchRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'CONSULTA_EXPEDIENTES',
        icon: <SearchRoundedIcon {...routeIconsConfig} />,
      },
    },
    UNIDADES: {
      id: 5,
      name: 'Consulta unidades',
      description: 'Online/Presencial',
      dataTestId: 'button-consulta-unidades',
      path: '/unidades',
      color: modulesColors.UNIDADES.main,
      icon: <EmailRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'UNIDADES',
        icon: <EmailRoundedIcon {...routeIconsConfig} />,
      },
    },
    JURISPRUDENCIA: {
      id: 6,
      name: 'Jurisprudencia',
      description: 'Online/Presencial',
      dataTestId: 'button-jurisprudencia',
      path: '/jurisprudencia',
      color: modulesColors.JURISPRUDENCIA.main,
      icon: <BookmarkRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'JURISPRUDENCIA',
        icon: <BookmarkRoundedIcon {...routeIconsConfig} />,
      },
    },
    INICIO_EXPEDIENTES: {
      id: 7,
      name: 'Inicio expedientes',
      description: 'Online/Presencial',
      dataTestId: 'button-inicio-expedientes',
      path: '/inicio-expedientes',
      color: modulesColors.INICIO_EXPEDIENTES.main,
      icon: <MenuBookRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'INICIO_EXPEDIENTES',
        icon: <MenuBookRoundedIcon {...routeIconsConfig} />,
      },
    },
    OGA: {
      id: 8,
      name: 'OGA',
      description: 'Online/Presencial',
      dataTestId: 'button-oga',
      path: '/oga',
      color: modulesColors.OGA.main,
      icon: <AccountBalanceRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'OGA',
        icon: <AccountBalanceRoundedIcon {...routeIconsConfig} />,
      },
    },
  },
  PROFILE: {
    DATA_FORM: {
      id: 101,
      name: 'Editar datos',
      description: 'Editar datos personales como nombre e email',
      dataTestId: 'button-editar-datos',
      path: '/perfil/datos',
      color: modulesColors.PROFILE.DATA_FORM.main,
      routeInfo: {
        color: 'primary',
        name: 'Perfil',
        icon: <PersonRoundedIcon {...routeIconsConfig} />,
      },
      icon: <CreateRoundedIcon {...iconsConfig} />,
    },
    PASSWORD: {
      id: 102,
      name: 'Cambiar contraseña',
      description: 'Cambiar contraseña de ingreso',
      dataTestId: 'button-cambiar-contraseña',
      path: '/perfil/contraseña',
      color: modulesColors.PROFILE.CONTRASEÑA.main,
      routeInfo: {
        color: 'primary',
        name: 'Perfil',
        icon: <PersonRoundedIcon {...routeIconsConfig} />,
      },
      icon: <PasswordRoundedIcon {...iconsConfig} />,
    },
    LOGOUT: {
      id: 103,
      name: 'Cerrar sesión',
      description: 'Salir de la sesión actual',
      dataTestId: 'button-cerrar-sesion',
      path: '',
      color: modulesColors.PROFILE.LOGOUT.main,
      routeInfo: {
        color: 'primary',
        name: 'Perfil',
        icon: <PersonRoundedIcon {...routeIconsConfig} />,
      },
      icon: <LogoutRoundedIcon {...iconsConfig} />,
      action: logout,
    },
  },
};
