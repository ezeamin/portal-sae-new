import { lazy } from 'react';
import { authRoutesRouter, mainRoutes, modules } from './constants';

import loginViews from '../../components/Auth/components/FormPanel/data/loginViews';

import viewList from '../../views/Profile/data/viewList';
import Module from '../../views/Module/Module';

const Home = lazy(() => import('../../views/Home/Home'));
const MainAuth = lazy(() => import('../../views/Auth/MainAuth'));
const Profile = lazy(() => import('../../views/Profile/Profile'));

export const authRoutes = {
  LOGIN: {
    id: mainRoutes.AUTH.id,
    path: mainRoutes.AUTH.path,
    component: MainAuth,
    args: {
      view: loginViews.LOGIN,
    },
  },
  RESET_PASSWORD: {
    id: authRoutesRouter.RESET_PASSWORD.id,
    path: authRoutesRouter.RESET_PASSWORD.path,
    component: MainAuth,
    args: {
      view: loginViews.RESET_PASSWORD,
    },
  },
  RESTORE_PASSWORD: {
    id: authRoutesRouter.RESTORE_PASSWORD.id,
    path: authRoutesRouter.RESTORE_PASSWORD.path,
    component: MainAuth,
    args: {
      view: loginViews.RESTORE_PASSWORD,
    },
  },
};

export const routes = {
  HOME: {
    id: mainRoutes.HOME.id,
    path: mainRoutes.HOME.path,
    component: Home,
  },
  PROFILE: {
    id: mainRoutes.PROFILE.id,
    path: mainRoutes.PROFILE.path,
    args: {
      view: viewList.MAIN,
    },
    component: Profile,
  },
  PROFILE_DATA_FORM: {
    id: modules.PROFILE.DATA_FORM.id,
    path: modules.PROFILE.DATA_FORM.path,
    args: {
      view: viewList.FORM,
    },
    component: Profile,
  },
  PROFILE_PASSWORD: {
    id: modules.PROFILE.PASSWORD.id,
    path: modules.PROFILE.PASSWORD.path,
    args: {
      view: viewList.PASS,
    },
    component: Profile,
  },

  //   Modules
  ESCRITOS: {
    id: modules.HOME.ESCRITOS.id,
    path: modules.HOME.ESCRITOS.path,
    component: Module,
    args: {
      routeDescription: modules.HOME.ESCRITOS.internalRoutes.MAIN.description,
      positions: [],
    },
  },
  ESCRITOS_NEW: {
    id: modules.HOME.ESCRITOS.internalRoutes.NEW.id,
    path: modules.HOME.ESCRITOS.path,
    component: Module,
    args: {
      routeDescription: modules.HOME.ESCRITOS.internalRoutes.MAIN.description,
      positions: [],
    },
  },
  // NOTIFICACIONES: {
  //   id: modules.HOME.NOTIFICACIONES.id,
  //   path: modules.HOME.NOTIFICACIONES.path,
  //   component: Module,
  // },
  PAGOS: {
    id: modules.HOME.PAGOS.id,
    path: modules.HOME.PAGOS.path,
    component: Module,
  },
  // TURNOS: {
  //   id: modules.HOME.TURNOS.id,
  //   path: modules.HOME.TURNOS.path,
  //   component: Module,
  // },
  CONSULTA_EXPEDIENTES: {
    id: modules.HOME.CONSULTA_EXPEDIENTES.id,
    path: modules.HOME.CONSULTA_EXPEDIENTES.path,
    component: Module,
  },
  UNIDADES: {
    id: modules.HOME.UNIDADES.id,
    path: modules.HOME.UNIDADES.path,
    component: Module,
  },
  JURISPRUDENCIA: {
    id: modules.HOME.JURISPRUDENCIA.id,
    path: modules.HOME.JURISPRUDENCIA.path,
    component: Module,
  },
  INICIO_EXPEDIENTES: {
    id: modules.HOME.INICIO_EXPEDIENTES.id,
    path: modules.HOME.INICIO_EXPEDIENTES.path,
    component: Module,
  },
  OGA: {
    id: modules.HOME.OGA.id,
    path: modules.HOME.OGA.path,
    component: Module,
  },
};
