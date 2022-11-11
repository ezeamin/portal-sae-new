import { useSelector } from 'react-redux';

import { modulesAdapter, modulesAdapterIds } from '../adapters/modulesAdapter';
import { modulesRoutes } from '../constants/Routing/routes';

const useAvailableModules = () => {
  const activeModules = useSelector(
    (state) => state.globalData.user.activeModules
  );

  const activeModulesAddapted = modulesAdapter(activeModules);
  const activeModulesIds = modulesAdapterIds(activeModules);

  return {
    modulesList: activeModulesAddapted,
    modulesIds: activeModulesIds,
    modules: activeModulesAddapted
      .map((moduleAdp) => {
        const module = {
          ...modulesRoutes[moduleAdp].MAIN,
          color: modulesRoutes[moduleAdp].COMMON.routeInfo.color,
          icon: modulesRoutes[moduleAdp].COMMON.routeInfo.icon,
        };

        return module;
      })
      .sort((a, b) => (a.id < b.id ? -1 : 1)),
  };
};

export default useAvailableModules;
