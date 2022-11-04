import { lazy } from 'react';

import {
  AccountBalanceRounded,
  BookmarkRounded,
  CreateRounded,
  DescriptionRounded,
  EmailRounded,
  HomeRounded,
  LogoutRounded,
  MenuBookRounded,
  PasswordRounded,
  PersonRounded,
  SearchRounded,
} from '@mui/icons-material';

import { paths } from './paths';

import logout from '../../actions/logout';

import loginViews from '../views/loginViews';
import viewList from '../views/viewList';
import { actionButtons } from '../actionButtons';

const Home = lazy(() =>
  import("../../views/Home/Home")
);
const MainAuth = lazy(() =>
  import('../../views/Auth/MainAuth')
);
const Module = lazy(() =>
  import('../../views/Module/Module')
);
const Profile = lazy(() =>
  import('../../views/Profile/Profile')
);

const IngresoEscritos = lazy(() =>
  import('../../components/Modules/IngresoEscritos/IngresoEscritos')
);
const PagosJudiciales = lazy(() =>
  import('../../components/Modules/PagosJudiciales/PagosJudiciales')
);
const ConsultaExpedientes = lazy(() =>
  import('../../components/Modules/ConsultaExpedientes/ConsultaExpedientes')
);
const ConsultaUnidades = lazy(() =>
  import('../../components/Modules/ConsultaUnidades/ConsultaUnidades')
);
const Jurisprudencia = lazy(() =>
  import('../../components/Modules/Jurisprudencia/Jurisprudencia')
);
const InicioExpedientes = lazy(() =>
  import('../../components/Modules/InicioExpedientes/InicioExpedientes')
);
const OGA = lazy(() =>
  import('../../components/Modules/OGA/OGA')
);

export const authRoutes = {
  // min: 2000, max: 2999
  COMMON: {
    component: MainAuth,
    routeInfo: {
      color: 'primary',
      icon: HomeRounded,
    },
  },
  LOGIN: {
    id: 2000,
    path: paths.AUTH.LOGIN,
    args: {
      view: loginViews.LOGIN,
    },
  },
  RESET_PASSWORD: {
    id: 2001,
    path: paths.AUTH.RESET_PASSWORD,
    args: {
      view: loginViews.RESET_PASSWORD,
    },
  },
  RESTORE_PASSWORD: {
    id: 2002,
    path: paths.AUTH.RESTORE_PASSWORD,
    args: {
      view: loginViews.RESTORE_PASSWORD,
    },
  },
};

export const mainRoutes = {
  // min: 0, max: 999
  COMMON: {
    component: Home,
    routeInfo: {
      color: 'primary',
      icon: HomeRounded,
    },
  },
  MAIN: {
    id: 0,
    path: paths.HOME,
    name: 'Inicio',
  },
};

export const modulesRoutes = {
  // min: 10000, max: 199999
  ESCRITOS: {
    COMMON: {
      component: Module,
      help: 'Aquí se listarán todos los escritos que haya ingresado a través de esta plataforma. Los últimos se mostrarán primero. A su vez podrá filtrar la información ya sea escribiendo fecha, nro. de expediente, unidad judicial, categoría, descripción o estado. A continuación, presione el botón BUSCAR',
      routeInfo: {
        color: 'ESCRITOS',
        icon: CreateRounded,
      },
    },
    MAIN: {
      action: null,
      description: 'Presentaciones',
      id: 10000,
      name: 'Ingreso escritos',
      path: paths.ESCRITOS.MAIN,
      routeInfo: {
        component: IngresoEscritos,
        buttons: [actionButtons.SEARCH, actionButtons.NEW, actionButtons.CLOSE],
        description: 'Listado',
        positions: [
          {
            name: 'Listado',
            path: paths.ESCRITOS.MAIN,
          },
        ],
      },
    },
    NEW: {
      action: null,
      id: 10001,
      path: paths.ESCRITOS.NEW,
      routeInfo: {
        component: IngresoEscritos,
        description: 'Nuevo escrito',
        positions: [
          {
            name: 'Listado',
            path: paths.ESCRITOS.MAIN,
          },
          {
            name: 'Nuevo escrito',
            path: paths.ESCRITOS.NEW,
          },
        ],
      },
    },
  },
  PAGOS: {
    COMMON: {
      component: Module,
      help: 'Aquí se listarán todas las boletas de pago que haya generado a través de la plataforma. Se mostrarán los más nuevos primero, pero podrá filtrar la informacion por cualquier de los campos que se muestra a continuación. Simplemente complete algunos de ellos y luego presione el botón BUSCAR',
      routeInfo: {
        color: 'PAGOS',
        icon: DescriptionRounded,
      },
    },
    MAIN: {
      action: null,
      description: 'Online/Presencial',
      id: 20000,
      name: 'Pagos judiciales',
      path: paths.PAGOS.MAIN,
      routeInfo: {
        component: PagosJudiciales,
        description: '',
        positions: [
          {
            name: '',
            path: paths.PAGOS.MAIN,
          },
        ],
      },
    },
  },
  CONSULTA_EXPEDIENTES: {
    COMMON: {
      component: Module,
      help: '',
      routeInfo: {
        color: 'CONSULTA_EXPEDIENTES',
        icon: SearchRounded,
      },
    },
    MAIN: {
      action: null,
      description: 'Online/Presencial',
      id: 30000,
      name: 'Consulta expedientes',
      path: paths.CONSULTA_EXPEDIENTES.MAIN,
      routeInfo: {
        component: ConsultaExpedientes,
        description: '',
        positions: [
          {
            name: '',
            path: paths.CONSULTA_EXPEDIENTES.MAIN,
          },
        ],
      },
    },
  },
  UNIDADES: {
    COMMON: {
      component: Module,
      help: '',
      routeInfo: {
        color: 'UNIDADES',
        icon: EmailRounded,
      },
    },
    MAIN: {
      action: null,
      description: 'Online/Presencial',
      id: 40000,
      name: 'Consulta unidades',
      path: paths.UNIDADES.MAIN,
      routeInfo: {
        component: ConsultaUnidades,
        description: '',
        positions: [
          {
            name: '',
            path: paths.UNIDADES.MAIN,
          },
        ],
      },
    },
  },
  JURISPRUDENCIA: {
    COMMON: {
      component: Module,
      help: '',
      routeInfo: {
        color: 'JURISPRUDENCIA',
        icon: BookmarkRounded,
      },
    },
    MAIN: {
      action: null,
      description: 'Online/Presencial',
      id: 50000,
      name: 'Jurisprudencia',
      path: paths.JURISPRUDENCIA.MAIN,
      routeInfo: {
        component: Jurisprudencia,
        description: '',
        positions: [
          {
            name: '',
            path: paths.JURISPRUDENCIA.MAIN,
          },
        ],
      },
    },
  },
  INICIO_EXPEDIENTES: {
    COMMON: {
      component: Module,
      help: '',
      routeInfo: {
        color: 'INICIO_EXPEDIENTES',
        icon: MenuBookRounded,
      },
    },
    MAIN: {
      action: null,
      description: 'Online/Presencial',
      id: 60000,
      name: 'Inicio expedientes',
      path: paths.INICIO_EXPEDIENTES.MAIN,
      routeInfo: {
        component: InicioExpedientes,
        description: '',
        positions: [
          {
            name: '',
            path: paths.INICIO_EXPEDIENTES.MAIN,
          },
        ],
      },
    },
  },
  OGA: {
    COMMON: {
      component: Module,
      help: '',
      routeInfo: {
        color: 'OGA',
        icon: AccountBalanceRounded,
      },
    },
    MAIN: {
      action: null,
      description: 'Online/Presencial',
      id: 70000,
      name: 'OGA',
      path: paths.OGA.MAIN,
      routeInfo: {
        component: OGA,
        description: '',
        positions: [
          {
            name: '',
            path: paths.OGA.MAIN,
          },
        ],
      },
    },
  },
};

// Profile routes tambien llevan como atributo
// icon y color, porque cada uno se maneja con un
// color distinto, pero en el routeo (chip en el navbar)
// se usa el mismo (primary e icono de perfil)
export const profileRoutes = {
  // min: 1000, max: 1999
  COMMON: {
    component: Profile,
    routeInfo: {
      color: 'primary',
      icon: PersonRounded,
      name: 'Perfil',
    },
  },
  MAIN: {
    action: null,
    args: {
      view: viewList.MAIN,
    },
    id: 1000,
    path: paths.PROFILE.MAIN,
    name: 'Perfil',
  },
  DATA_FORM: {
    action: null,
    args: {
      view: viewList.FORM,
    },
    description: 'Editar datos personales como nombre e email',
    id: 1001,
    name: 'Editar datos',
    path: paths.PROFILE.DATA_FORM,
    icon: CreateRounded,
    color: 'PROFILE_DATA_FORM',
  },
  PASSWORD: {
    action: null,
    description: 'Cambiar contraseña de ingreso',
    args: {
      view: viewList.PASS,
    },
    id: 1002,
    name: 'Cambiar contraseña',
    path: paths.PROFILE.PASSWORD_FORM,
    icon: PasswordRounded,
    color: 'PROFILE_PASSWORD',
  },
  LOGOUT: {
    action: logout,
    description: 'Salir de la sesión actual',
    id: 1003,
    name: 'Cerrar sesión',
    path: null,
    icon: LogoutRounded,
    color: 'PROFILE_LOGOUT',
  },
};

const arrModulesRoutes = Object.values(modulesRoutes);
export const mainModulesArray = arrModulesRoutes.map((module) => {
  return {
    ...Object.values(module)[1],
    color: module.COMMON.routeInfo.color,
    icon: module.COMMON.routeInfo.icon,
  };
});

const arrProfileRoutes = Object.values(profileRoutes);
const arrValues = arrProfileRoutes.map((profile, index) => {
  if (index < 2) return null;
  return {
    ...profile,
    color: profile.color || arrProfileRoutes[0].routeInfo.color,
    icon: profile.icon || arrProfileRoutes[0].routeInfo.icon,
  };
});
// remove null values
const profile = arrValues.filter((item) => item !== null);
export const profileModulesArray = profile;
