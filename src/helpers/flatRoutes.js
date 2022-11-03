import * as routes from '../constants/Routing/routes';

export const flatMainRoutes = () => {
  const mainRoutes = Object.values(routes.mainRoutes);

  //delete first position ("COMMON")
  mainRoutes.shift();

  //append component to each route
  mainRoutes.forEach((route) => {
    route.component = routes.mainRoutes.COMMON.component;
  });

  return mainRoutes;
};

export const flatAuthRoutes = () => {
  const authRoutes = Object.values(routes.authRoutes);

  //delete first position ("COMMON")
  authRoutes.shift();

  //append component to each route
  authRoutes.forEach((route) => {
    route.component = routes.authRoutes.COMMON.component;
  });

  return authRoutes;
};

export const flatProfileRoutes = () => {
  const profileRoutes = Object.values(routes.profileRoutes);

  //delete first position ("COMMON")
  profileRoutes.shift();

  //append component to each route
  profileRoutes.forEach((route) => {
    route.component = routes.profileRoutes.COMMON.component;
  });

  return profileRoutes;
};

export const flatModulesRoutes = () => {
  const allModulesRoutes = Object.values(routes.modulesRoutes);

  const modulesRoutes = allModulesRoutes.map((module) => {
    const moduleRoutes = Object.values(module);
    moduleRoutes.shift();

    return moduleRoutes;
  });

  // get first element of each position into a new array
  const flatModulesRoutes = modulesRoutes.map((module) => module[0]);

  flatModulesRoutes.forEach((route) => {
    // todos llevan el mismo componente
    route.component = routes.modulesRoutes.ESCRITOS.COMMON.component;
  });

  return flatModulesRoutes;
};
