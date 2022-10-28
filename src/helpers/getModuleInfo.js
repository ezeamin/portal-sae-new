import { modules, mainRoutes, ids, authRoutesRouter } from '../constants/constants';

const getModuleInfo = (id) => {
  let module;

  if (id < ids.MAX.MODULES_HOME) {
    //modulos
    module = Object.values(modules.HOME).find((mod) => mod.id === id);
  } else if (id < ids.MAX.MODULES_PROFILES) {
    // modulos del perfil
    module = Object.values(modules.PROFILE).find((mod) => mod.id === id);
  } else if ( id < ids.MAX.AUTH ) {
    // rutas login
    module = Object.values(authRoutesRouter).find((route) => route.id === id);
  } else {
    // rutas principales
    module = Object.values(mainRoutes).find((route) => route.id === id);
  }

  // valores especificos para el enrutado
  return {
    ...module,
    color: module.routeInfo.color,
    name: module.routeInfo.name ?? module.name,
    icon: module.routeInfo.icon,
  };
};

export default getModuleInfo;
