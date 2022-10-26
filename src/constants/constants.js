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

const iconsConfig = {
  sx: {
    fontSize: '3rem',
  },
};

export const ids = {
  MIN: {
    ROUTES: 1000,
    MODULES_HOME: 0,
    MODULES_PROFILES: 100,
  },
  MAX: {
    ROUTES: 2000,
    MODULES_HOME: 100,
    MODULES_PROFILES: 200,
  },
};

export const mainRoutes = {
  HOME: {
    id: 1000,
    name: 'Inicio',
    path: '/',
    color: 'primary',
    routeInfo: {
      color: 'primary',
      icon: <HomeRoundedIcon />,
    }
  },
  PROFILE: {
    id: 1001,
    name: 'Perfil',
    path: '/perfil',
    color: 'primary',
    routeInfo: {
      color: 'primary',
      icon: <PersonRoundedIcon />,
    }
  },
};

export const modules = {
  HOME: {
    ESCRITOS: {
      id: 0,
      name: 'Ingreso escritos',
      description: 'Presentaciones',
      path: '/escritos',
      color: modulesColors.ESCRITOS.main,
      icon: <CreateRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'ESCRITOS',
        icon: <CreateRoundedIcon />,
      },
    },
    NOTIFICACIONES: {
      id: 1,
      name: 'Notificaciones',
      description: 'Casillero virtual',
      path: '/notificaciones',
      color: modulesColors.NOTIFICACIONES.main,
      icon: <MoveToInboxRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'NOTIFICACIONES',
        icon: <MoveToInboxRoundedIcon />,
      },
    },
    PAGOS: {
      id: 2,
      name: 'Pagos judiciales',
      description: 'Online/Presencial',
      path: '/pagos',
      color: modulesColors.PAGOS.main,
      icon: <DescriptionRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'PAGOS',
        icon: <DescriptionRoundedIcon />,
      },
    },
    TURNOS: {
      id: 3,
      name: 'Solicitud turnos',
      description: 'Online/Presencial',
      path: '/turnos',
      color: modulesColors.TURNOS.main,
      icon: <WorkHistoryRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'TURNOS',
        icon: <WorkHistoryRoundedIcon />,
      }
    },
    CONSULTA_EXPEDIENTES: {
      id: 4,
      name: 'Consulta expedientes',
      description: 'Online/Presencial',
      path: '/expedientes',
      color: modulesColors.CONSULTA_EXPEDIENTES.main,
      icon: <SearchRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'CONSULTA_EXPEDIENTES',
        icon: <SearchRoundedIcon />,
      }
    },
    UNIDADES: {
      id: 5,
      name: 'Consulta unidades',
      description: 'Online/Presencial',
      path: '/unidades',
      color: modulesColors.UNIDADES.main,
      icon: <EmailRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'UNIDADES',
        icon: <EmailRoundedIcon />,
      }
    },
    JURISPRUDENCIA: {
      id: 6,
      name: 'Jurisprudencia',
      description: 'Online/Presencial',
      path: '/jurisprudencia',
      color: modulesColors.JURISPRUDENCIA.main,
      icon: <BookmarkRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'JURISPRUDENCIA',
        icon: <BookmarkRoundedIcon />,
      }
    },
    INICIO_EXPEDIENTES: {
      id: 7,
      name: 'Inicio expedientes',
      description: 'Online/Presencial',
      path: '/inicio-expedientes',
      color: modulesColors.INICIO_EXPEDIENTES.main,
      icon: <MenuBookRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'INICIO_EXPEDIENTES',
        icon: <MenuBookRoundedIcon />,
      }
    },
    OGA: {
      id: 8,
      name: 'OGA',
      description: 'Online/Presencial',
      path: '/oga',
      color: modulesColors.OGA.main,
      icon: <AccountBalanceRoundedIcon {...iconsConfig} />,
      routeInfo: {
        color: 'OGA',
        icon: <AccountBalanceRoundedIcon />,
      }
    },
  },
  PROFILE: {
    DATA_FORM: {
      id: 101,
      name: 'Editar datos',
      description: 'Editar datos personales como nombre e email',
      path: '/perfil/datos',
      color: modulesColors.PROFILE.DATA_FORM.main,
      routeInfo: {
        color: 'primary',
        name: 'Perfil',
        icon: <PersonRoundedIcon />,
      },
      icon: <CreateRoundedIcon {...iconsConfig} />,
    },
    PASSWORD: {
      id: 102,
      name: 'Cambiar contraseña',
      description: 'Cambiar contraseña de ingreso',
      path: '/perfil/contraseña',
      color: modulesColors.PROFILE.CONTRASEÑA.main,
      routeInfo: {
        color: 'primary',
        name: 'Perfil',
        icon: <PersonRoundedIcon />,
      },
      icon: <PasswordRoundedIcon {...iconsConfig} />,
    },
    LOGOUT: {
      id: 103,
      name: 'Cerrar sesión',
      description: 'Salir de la sesión actual',
      path: '1565165165',
      color: modulesColors.PROFILE.LOGOUT.main,
      routeInfo: {
        color: 'primary',
        name: 'Perfil',
        icon: <PersonRoundedIcon />,
      },
      icon: <LogoutRoundedIcon {...iconsConfig} />,
      action: () => {
        console.log('LOG OUT');
      },
    },
  },
};
