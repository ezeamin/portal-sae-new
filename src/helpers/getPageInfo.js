import { ids } from '../constants/Routing/ids';
import {
  authRoutes,
  mainRoutes,
  modulesRoutes,
  profileRoutes,
} from '../constants/Routing/routes';

const getPageInfo = (id) => {
  if (id >= ids.MIN.MAIN_ROUTES && id <= ids.MAX.MAIN_ROUTES) {
    const arr = Object.values(mainRoutes);
    const arrIndex = arr.findIndex((route) => route.id === id);

    const page = arr[arrIndex];

    return {
      ...page,
      icon: arr[0].routeInfo.icon,
      color: arr[0].routeInfo.color,
    };
  }

  if (id >= ids.MIN.AUTH_ROUTES && id <= ids.MAX.AUTH_ROUTES) {
    const arr = Object.values(authRoutes);
    const arrIndex = arr.findIndex((route) => route.id === id);

    const page = arr[arrIndex];

    return {
      ...page,
      icon: arr[0].routeInfo.icon,
      color: arr[0].routeInfo.color,
    };
  }

  if (id >= ids.MIN.PROFILE_ROUTES && id <= ids.MAX.PROFILE_ROUTES) {
    const arr = Object.values(profileRoutes);
    const arrIndex = arr.findIndex((route) => route.id === id);

    const page = arr[arrIndex];

    return {
      ...page,
      icon: arr[0].routeInfo.icon,
      color: arr[0].routeInfo.color,
      name: arr[0].routeInfo.name,
    };
  }

  if (id >= ids.MIN.MODULES_ROUTES && id <= ids.MAX.MODULES_ROUTES) {
    const arr = Object.values(modulesRoutes);

    const arrValues = arr.map((module) =>
      Object.values(module).map((internalMod, index) => {
        if (index === 0) return null;

        return {
          ...internalMod,
          color: module.COMMON.routeInfo.color,
          icon: module.COMMON.routeInfo.icon,
        };
      })
    );

    // remove null values
    const modules = arrValues
      .map((module) => module.filter((item) => item !== null))
      .flat();

    // find page
    const arrIndex = modules.findIndex((modules) => modules.id === id);

    const page = modules[arrIndex];

    return page;
  }
};

export default getPageInfo;
