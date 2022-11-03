import {
  AccountBalanceRounded,
  BookmarkRounded,
  CreateRounded,
  DescriptionRounded,
  EmailRounded,
  LogoutRounded,
  MenuBookRounded,
  MoveToInboxRounded,
  PasswordRounded,
  PersonRounded,
  SearchRounded,
  WorkHistoryRounded,
} from '@mui/icons-material';

import modulesColors from './modulesColors';

import logout from '../../../actions/logout';

import { actionButtons } from '../../actionButtons';
import { routeIconsConfig } from '../constants';

const iconsConfig = {
  sx: {
    fontSize: '3rem',
  },
};

export const modules = {
  HOME: {
    ESCRITOS: {
      id: 100,
      name: 'Ingreso escritos',
      description: 'Presentaciones',
      dataTestId: 'button-ingreso-escritos',
      path: '/escritos',
      color: modulesColors.ESCRITOS.main,
      icon: <CreateRounded {...iconsConfig} />,
      buttons: [
        { ...actionButtons.SEARCH, path: '/escritos/buscar' },
        {
          ...actionButtons.NEW,
          path: '/escritos/nuevo',
        },
        actionButtons.CLOSE,
      ],
      routeInfo: {
        color: 'ESCRITOS',
        icon: <CreateRounded {...routeIconsConfig} />,
      },
      internalRoutes: {
        MAIN: {
          id: 100,
          description: 'Listado',
        },
        NEW: {
          id: 101,
          description: 'Nuevo escrito',
        },
      },
    },
    // NOTIFICACIONES: {
    //   id: 200,
    //   name: 'Notificaciones',
    //   description: 'Casillero virtual',
    //   dataTestId: 'button-notificaciones',
    //   path: '/notificaciones',
    //   color: modulesColors.NOTIFICACIONES.main,
    //   icon: <MoveToInboxRounded {...iconsConfig} />,
    //   routeInfo: {
    //     color: 'NOTIFICACIONES',
    //     icon: <MoveToInboxRounded {...routeIconsConfig} />,
    //   },
    // },
    PAGOS: {
      id: 300,
      name: 'Pagos judiciales',
      description: 'Online/Presencial',
      dataTestId: 'button-pagos-judiciales',
      path: '/pagos',
      color: modulesColors.PAGOS.main,
      icon: <DescriptionRounded {...iconsConfig} />,
      routeInfo: {
        color: 'PAGOS',
        icon: <DescriptionRounded {...routeIconsConfig} />,
      },
    },
    // TURNOS: {
    //   id: 400,
    //   name: 'Solicitud turnos',
    //   description: 'Online/Presencial',
    //   dataTestId: 'button-solicitud-turnos',
    //   path: '/turnos',
    //   color: modulesColors.TURNOS.main,
    //   icon: <WorkHistoryRounded {...iconsConfig} />,
    //   routeInfo: {
    //     color: 'TURNOS',
    //     icon: <WorkHistoryRounded {...routeIconsConfig} />,
    //   },
    // },
    CONSULTA_EXPEDIENTES: {
      id: 500,
      name: 'Consulta expedientes',
      description: 'Online/Presencial',
      dataTestId: 'button-consulta-expedientes',
      path: '/expedientes',
      color: modulesColors.CONSULTA_EXPEDIENTES.main,
      icon: <SearchRounded {...iconsConfig} />,
      routeInfo: {
        color: 'CONSULTA_EXPEDIENTES',
        icon: <SearchRounded {...routeIconsConfig} />,
      },
    },
    UNIDADES: {
      id: 600,
      name: 'Consulta unidades',
      description: 'Online/Presencial',
      dataTestId: 'button-consulta-unidades',
      path: '/unidades',
      color: modulesColors.UNIDADES.main,
      icon: <EmailRounded {...iconsConfig} />,
      routeInfo: {
        color: 'UNIDADES',
        icon: <EmailRounded {...routeIconsConfig} />,
      },
    },
    JURISPRUDENCIA: {
      id: 700,
      name: 'Jurisprudencia',
      description: 'Online/Presencial',
      dataTestId: 'button-jurisprudencia',
      path: '/jurisprudencia',
      color: modulesColors.JURISPRUDENCIA.main,
      icon: <BookmarkRounded {...iconsConfig} />,
      routeInfo: {
        color: 'JURISPRUDENCIA',
        icon: <BookmarkRounded {...routeIconsConfig} />,
      },
    },
    INICIO_EXPEDIENTES: {
      id: 800,
      name: 'Inicio expedientes',
      description: 'Online/Presencial',
      dataTestId: 'button-inicio-expedientes',
      path: '/inicio-expedientes',
      color: modulesColors.INICIO_EXPEDIENTES.main,
      icon: <MenuBookRounded {...iconsConfig} />,
      routeInfo: {
        color: 'INICIO_EXPEDIENTES',
        icon: <MenuBookRounded {...routeIconsConfig} />,
      },
    },
    OGA: {
      id: 900,
      name: 'OGA',
      description: 'Online/Presencial',
      dataTestId: 'button-oga',
      path: '/oga',
      color: modulesColors.OGA.main,
      icon: <AccountBalanceRounded {...iconsConfig} />,
      routeInfo: {
        color: 'OGA',
        icon: <AccountBalanceRounded {...routeIconsConfig} />,
      },
    },
  },
  PROFILE: {
    DATA_FORM: {
      id: 10001,
      name: 'Editar datos',
      description: 'Editar datos personales como nombre e email',
      dataTestId: 'button-editar-datos',
      path: '/perfil/datos',
      color: modulesColors.PROFILE.DATA_FORM.main,
      routeInfo: {
        color: 'primary',
        name: 'Perfil',
        icon: <PersonRounded {...routeIconsConfig} />,
      },
      icon: <CreateRounded {...iconsConfig} />,
    },
    PASSWORD: {
      id: 10002,
      name: 'Cambiar contraseña',
      description: 'Cambiar contraseña de ingreso',
      dataTestId: 'button-cambiar-contraseña',
      path: '/perfil/password',
      color: modulesColors.PROFILE.PASSWORD.main,
      routeInfo: {
        color: 'primary',
        name: 'Perfil',
        icon: <PersonRounded {...routeIconsConfig} />,
      },
      icon: <PasswordRounded {...iconsConfig} />,
    },
    LOGOUT: {
      id: 10003,
      name: 'Cerrar sesión',
      description: 'Salir de la sesión actual',
      dataTestId: 'button-cerrar-sesion',
      path: '',
      color: modulesColors.PROFILE.LOGOUT.main,
      routeInfo: {
        color: 'primary',
        name: 'Perfil',
        icon: <PersonRounded {...routeIconsConfig} />,
      },
      icon: <LogoutRounded {...iconsConfig} />,
      action: logout,
    },
  },
};
