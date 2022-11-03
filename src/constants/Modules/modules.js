import { modulesRoutes, profileRoutes } from '../Routing/routes';

const mainModules = {
  ESCRITOS: {
    action: null,
    color: modulesRoutes.ESCRITOS.COMMON.routeInfo.color,
    description: 'Presentaciones',
    icon: modulesRoutes.ESCRITOS.COMMON.routeInfo.icon,
    id: modulesRoutes.ESCRITOS.MAIN.id,
    name: 'Ingreso escritos',
    path: modulesRoutes.ESCRITOS.MAIN.path,
  },
  PAGOS: {
    action: null,
    color: modulesRoutes.PAGOS.COMMON.routeInfo.color,
    description: 'Online/Presencial',
    icon: modulesRoutes.PAGOS.COMMON.routeInfo.icon,
    id: modulesRoutes.PAGOS.MAIN.id,
    name: 'Pagos judiciales',
    path: modulesRoutes.PAGOS.MAIN.path,
  },
  CONSULTA_EXPEDIENTES: {
    action: null,
    color: modulesRoutes.CONSULTA_EXPEDIENTES.COMMON.routeInfo.color,
    description: 'Online/Presencial',
    icon: modulesRoutes.CONSULTA_EXPEDIENTES.COMMON.routeInfo.icon,
    id: modulesRoutes.CONSULTA_EXPEDIENTES.MAIN.id,
    name: 'Consulta expedientes',
    path: modulesRoutes.CONSULTA_EXPEDIENTES.MAIN.path,
  },
  UNIDADES: {
    action: null,
    color: modulesRoutes.UNIDADES.COMMON.routeInfo.color,
    description: 'Online/Presencial',
    icon: modulesRoutes.UNIDADES.COMMON.routeInfo.icon,
    id: modulesRoutes.UNIDADES.MAIN.id,
    name: 'Consulta unidades',
    path: modulesRoutes.UNIDADES.MAIN.path,
  },
  JURISPRUDENCIA: {
    action: null,
    color: modulesRoutes.JURISPRUDENCIA.COMMON.routeInfo.color,
    description: 'Online/Presencial',
    icon: modulesRoutes.JURISPRUDENCIA.COMMON.routeInfo.icon,
    id: modulesRoutes.JURISPRUDENCIA.MAIN.id,
    name: 'Jurisprudencia',
    path: modulesRoutes.JURISPRUDENCIA.MAIN.path,
  },
  INICIO_EXPEDIENTES: {
    action: null,
    color: modulesRoutes.INICIO_EXPEDIENTES.COMMON.routeInfo.color,
    description: 'Online/Presencial',
    icon: modulesRoutes.INICIO_EXPEDIENTES.COMMON.routeInfo.icon,
    id: modulesRoutes.INICIO_EXPEDIENTES.MAIN.id,
    name: 'Inicio expedientes',
    path: modulesRoutes.INICIO_EXPEDIENTES.MAIN.path,
  },
  OGA: {
    action: null,
    color: modulesRoutes.OGA.COMMON.routeInfo.color,
    description: 'Online/Presencial',
    icon: modulesRoutes.OGA.COMMON.routeInfo.icon,
    id: modulesRoutes.OGA.MAIN.id,
    name: 'OGA',
    path: modulesRoutes.OGA.MAIN.path,
  },
};

const profileModules = {
  DATA_FORM: {
    action: null,
    color: profileRoutes.COMMON.routeInfo.color,
    description: 'Editar datos personales como nombre e email',
    icon: profileRoutes.COMMON.routeInfo.icon,
    id: profileRoutes.DATA_FORM.id,
    name: 'Editar datos',
    path: profileRoutes.DATA_FORM.path,
  },
  PASSWORD: {
    action: null,
    color: profileRoutes.COMMON.routeInfo.color,
    description: 'Editar datos personales como contraseña',
    icon: profileRoutes.COMMON.routeInfo.icon,
    id: profileRoutes.PASSWORD.id,
    name: 'Editar datos',
    path: profileRoutes.PASSWORD.path,
  },
  LOGOUT: {
    action: profileRoutes.LOGOUT.action,
    color: profileRoutes.COMMON.routeInfo.color,
    description: 'Cerrar sesión',
    icon: profileRoutes.COMMON.routeInfo.icon,
    id: profileRoutes.LOGOUT.id,
    name: 'Cerrar sesión',
    path: profileRoutes.LOGOUT.path,
  },
};

export const mainModulesArray = Object.values(mainModules);

export const profileModulesArray = Object.values(profileModules);
