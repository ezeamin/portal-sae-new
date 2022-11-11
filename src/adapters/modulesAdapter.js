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
  });
};

export const modulesAdapterIds = (modules) => {
  return modules.map((module) => {
    switch (module) {
      case 'writings':
        return modulesRoutes.ESCRITOS.MAIN.id;
      case 'payments':
        return modulesRoutes.PAGOS.MAIN.id;
      case 'proceedings-viewer':
        return modulesRoutes.CONSULTA_EXPEDIENTES.MAIN.id;
      case 'consultations':
        return modulesRoutes.UNIDADES.MAIN.id;
      case 'jurisprudence':
        return modulesRoutes.JURISPRUDENCIA.MAIN.id;
      case 'proceedings-creation':
        return modulesRoutes.INICIO_EXPEDIENTES.MAIN.id;
      case 'oga':
        return modulesRoutes.OGA.MAIN.id;
      default:
        return 0;
    }
  });
};
