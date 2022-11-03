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

import { HomeRounded, PersonRounded } from '@mui/icons-material';

import Home from '../../views/Home/Home';
import viewList from '../../views/Profile/data/viewList';
import Profile from '../../views/Profile/Profile';

import { paths } from './paths';

export const iconsConfig = {
  sx: {
    fontSize: '1.2rem',
    ml: '12px !important',
  },
};

export const mainRoutes = {
  // min: 0, max: 9999
  MAIN: {
    id: 0,
    path: paths.HOME,
    component: Home,
    routeInfo: {
      color: 'primary',
      icon: <HomeRounded {...iconsConfig} />,
    },
  },
};

export const profileRoutes = {
  // min: 1000, max: 1999
  MAIN: {
    id: 1000,
    path: paths.PROFILE.MAIN,
    component: Profile,
    routeInfo: {
      color: 'primary',
      icon: <PersonRounded {...iconsConfig} />,
    },
  },
  DATA_FORM: {
    id: 1001,
    path: paths.PROFILE.DATA_FORM,
    component: Profile,
    args: {
      view: viewList.DATA_FORM,
    },
    routeInfo: {
      color: 'primary',
      icon: <></>,
    },
  },
  PASSWORD: {
    id: 1002,
    path: '/auth/restore-password',
    routeInfo: {
      color: 'primary',
      icon: <></>,
    },
  },
};
