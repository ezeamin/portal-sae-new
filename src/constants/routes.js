import Home from '../views/Home/Home';
import viewList from '../views/Profile/data/viewList';
import Profile from '../views/Profile/Profile';

import { mainRoutes, modules } from './constants';

const routes = {
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

  //   Modules
  ESCRITOS: {
    id: modules.HOME.ESCRITOS.id,
    path: modules.HOME.ESCRITOS.path,
    component: Profile
  },
  NOTIFICACIONES: {
    id: modules.HOME.NOTIFICACIONES.id,
    path: modules.HOME.NOTIFICACIONES.path,
    component: Profile
  },
  PAGOS: {
    id: modules.HOME.PAGOS.id,
    path: modules.HOME.PAGOS.path,
    component: Profile
  },
  TURNOS: {
    id: modules.HOME.TURNOS.id,
    path: modules.HOME.TURNOS.path,
    component: Profile
  },
  CONSULTA_EXPEDIENTES: {
    id: modules.HOME.CONSULTA_EXPEDIENTES.id,
    path: modules.HOME.CONSULTA_EXPEDIENTES.path,
    component: Profile
  },
  UNIDADES: {
    id: modules.HOME.UNIDADES.id,
    path: modules.HOME.UNIDADES.path,
    component: Profile
  },
  JURISPRUDENCIA: {
    id: modules.HOME.JURISPRUDENCIA.id,
    path: modules.HOME.JURISPRUDENCIA.path,
    component: Profile
  },
  INICIO_EXPEDIENTES: {
    id: modules.HOME.INICIO_EXPEDIENTES.id,
    path: modules.HOME.INICIO_EXPEDIENTES.path,
    component: Profile
  },
  OGA: {
    id: modules.HOME.OGA.id,
    path: modules.HOME.OGA.path,
    component: Profile
  },
};

export default routes;
