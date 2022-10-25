import modules from '../constants/modules';
import routes from '../constants/routes';

const getModuleInfo = (id) => {
  let module;

  if (id < 100) {
    //modulos
    module = modules.HOME.find((mod) => mod.id === id);
  } else if (id < 200) {
    // modulos del perfil
    module = modules.PROFILE.find((mod) => mod.id === id);
  } else {
    // rutas extras
    module = Object.values(routes).find((route) => route.id === id);
  }

  return module;
};

export default getModuleInfo;
