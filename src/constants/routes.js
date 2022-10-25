import Home from '../views/Home/Home';
import viewList from '../views/Profile/data/viewList';
import Profile from '../views/Profile/Profile';

import { routesModules } from './constants';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const routes = {
  HOME: {
    id: routesModules.MAIN.id,
    name: 'Inicio',
    description: '',
    color: 'primary',
    icon: <HomeRoundedIcon />,
    path: routesModules.MAIN.path,
    component: Home,
  },
  PROFILE: {
    id: routesModules.PROFILE.MAIN.id,
    name: 'Perfil',
    description: '',
    color: 'primary',
    icon: <PersonRoundedIcon />,
    path: routesModules.PROFILE.MAIN.path,
    args: {
      view: viewList.MAIN,
    },
    component: Profile,
  },
  PROFILE_DATA_FORM: {
    id: routesModules.PROFILE.DATA_FORM.id,
    name: 'Perfil',
    description: 'dataForm',
    color: 'primary',
    icon: <PersonRoundedIcon />,
    path: routesModules.PROFILE.DATA_FORM.path,
    args: {
      view: viewList.FORM,
    },
    component: Profile,
  },

  //   Modules
  ESCRITOS: {
    id: routesModules.HOME.ESCRITOS.id,
    path: routesModules.HOME.ESCRITOS.path,
  },
  NOTIFICACIONES: {
    id: routesModules.HOME.NOTIFICACIONES.id,
    path: routesModules.HOME.NOTIFICACIONES.path,
  },
  PAGOS: {
    id: routesModules.HOME.PAGOS.id,
    path: routesModules.HOME.PAGOS.path,
  },
  TURNOS: {
    id: routesModules.HOME.TURNOS.id,
    path: routesModules.HOME.TURNOS.path,
  },
  CONSULTA_EXPEDIENTES: {
    id: routesModules.HOME.CONSULTA_EXPEDIENTES.id,
    path: routesModules.HOME.CONSULTA_EXPEDIENTES.path,
  },
  UNIDADES: {
    id: routesModules.HOME.UNIDADES.id,
    path: routesModules.HOME.UNIDADES.path,
  },
  JURISPRUDENCIA: {
    id: routesModules.HOME.JURISPRUDENCIA.id,
    path: routesModules.HOME.JURISPRUDENCIA.path,
  },
  INICIO_EXPEDIENTES: {
    id: routesModules.HOME.INICIO_EXPEDIENTES.id,
    path: routesModules.HOME.INICIO_EXPEDIENTES.path,
  },
  OGA: {
    id: routesModules.HOME.OGA.id,
    path: routesModules.HOME.OGA.path,
  },
};

export default routes;
