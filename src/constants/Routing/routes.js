import {
  AccountBalanceRounded,
  BookmarkRounded,
  CreateRounded,
  DescriptionRounded,
  EmailRounded,
  HomeRounded,
  MenuBookRounded,
  PersonRounded,
  SearchRounded,
} from '@mui/icons-material';

import { paths } from './paths';

import logout from '../../actions/logout';

import Home from '../../views/Home/Home';
import MainAuth from '../../views/Auth/MainAuth';
import Module from '../../views/Module/Module';
import Profile from '../../views/Profile/Profile';

import loginViews from '../views/loginViews';
import viewList from '../views/viewList';

export const authRoutes = {
  // min: 2000, max: 2999
  COMMON: {
    component: MainAuth,
    routeInfo: {
      color: 'primary',
      icon: <></>,
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
  },
};

export const modulesRoutes = {
  // min: 10000, max: 199999
  ESCRITOS: {
    COMMON: {
      component: Module,
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
        description: 'Listado',
        positions: [
          {
            name: 'Listado de escritos',
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
        description: 'Nuevo escrito',
        positions: [
          {
            name: 'Listado de escritos',
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

export const profileRoutes = {
  // min: 1000, max: 1999
  COMMON: {
    component: Profile,
    routeInfo: {
      color: 'primary',
      icon: PersonRounded,
    },
  },
  MAIN: {
    action: null,
    args: {
      view: viewList.MAIN,
    },
    id: 1000,
    path: paths.PROFILE.MAIN,
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
  },
  LOGOUT: {
    action: logout,
    description: 'Salir de la sesión actual',
    id: 1003,
    name: 'Cerrar sesión',
    path: null, // si explota poner '' string vacio
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
  if ( index < 2 ) return null;
  return {
    ...profile,
    color: arrProfileRoutes[0].routeInfo.color,
    icon: arrProfileRoutes[0].routeInfo.icon,
  } 
})
// remove null values
const profile = arrValues.filter((item) => item !== null)
export const profileModulesArray = profile;
console.log("🚀 ~ file: routes.js ~ line 329 ~ profileModulesArray", profileModulesArray)
