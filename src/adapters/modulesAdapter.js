import { modulesRoutes } from '../constants/Routing/routes';

export const modulesAdapter = (modules) => {
  return modules.map((module) => {
    switch (module) {
      case 'writings':
        return 'ESCRITOS';
      case 'payments':
        return 'PAGOS';
      case 'proceedings-viewer':
        return 'CONSULTA_EXPEDIENTES';
      case 'consultations':
        return 'UNIDADES';
      case 'jurisprudence':
        return 'JURISPRUDENCIA';
      case 'proceedings-creation':
        return 'INICIO_EXPEDIENTES';
      case 'oga':
        return 'OGA';
      default:
        return '';
    }
  }).filter(mod => mod !== '');
};

export const modulesAdapterIds = (modules) => {
  return modules
    .map((module) => {
      switch (module) {
        case 'writings':
          return Object.values(modulesRoutes.ESCRITOS).map((page) => page?.id);
        case 'payments':
          return Object.values(modulesRoutes.PAGOS).map((page) => page?.id);
        case 'proceedings-viewer':
          return Object.values(modulesRoutes.CONSULTA_EXPEDIENTES).map(
            (page) => page?.id
          );
        case 'consultations':
          return Object.values(modulesRoutes.UNIDADES).map((page) => page?.id);
        case 'jurisprudence':
          return Object.values(modulesRoutes.JURISPRUDENCIA).map(
            (page) => page?.id
          );
        case 'proceedings-creation':
          return Object.values(modulesRoutes.INICIO_EXPEDIENTES).map(
            (page) => page?.id
          );
        case 'oga':
          return Object.values(modulesRoutes.OGA).map((page) => page?.id);
        default:
          return 0;
      }
    })
    .flat()
    .filter((ids) => ids); // eliminar undefined
};
