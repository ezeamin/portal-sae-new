/*

const route = {
    id: 0, //mismo que ruta
    path: '',
    component: '',
    routeInfo: {
        color: '',
        icon: '',
        description?: '',
        buttons?: [], //linkeado a buttons
    }, 
    args?: {}, //args para el componente
}

*/

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

import Home from '../../views/Home/Home';
import MainAuth from '../../views/Auth/MainAuth';
import Module from '../../views/Module/Module';
import Profile from '../../views/Profile/Profile';
import viewList from '../views/viewList';

import { paths } from './paths';

import logout from '../../actions/logout';
import loginViews from '../views/loginViews';

export const mainRoutes = {
  // min: 0, max: 9999
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
    id: 1000,
    path: paths.PROFILE.MAIN,
    args: {
      view: viewList.MAIN,
    },
  },
  DATA_FORM: {
    id: 1001,
    path: paths.PROFILE.DATA_FORM,
    args: {
      view: viewList.DATA_FORM,
    },
  },
  PASSWORD: {
    id: 1002,
    path: paths.PROFILE.PASSWORD_FORM,
    args: {
      view: viewList.PASS,
    },
  },
  LOGOUT: {
    id: 1003,
    path: null, // si explota poner '' string vacio
    action: logout,
  },
};

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

export const modulesRoutes = {
  ESCRITOS: {
    COMMON: {
      component: Module,
      routeInfo: {
        color: 'ESCRITOS',
        icon: CreateRounded,
      },
    },
    MAIN: {
      id: 10000,
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
      id: 10001,
      path: paths.ESCRITOS.NEW,
      component: Module,
      routeInfo: {
        color: 'ESCRITOS',
        icon: CreateRounded,
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
      id: 20000,
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
      id: 30000,
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
      id: 40000,
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
      id: 50000,
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
      id: 60000,
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
      id: 70000,
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
