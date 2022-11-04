import { AddRounded, CloseRounded, SearchRounded } from '@mui/icons-material';
import { paths } from './Routing/paths';


const iconsConfig = {
  sx: {
    fontSize: '1.75rem',
  },
};

export const actionButtons = {
  CLOSE: {
    color: 'red',
    icon: <CloseRounded {...iconsConfig} />,
    name: 'Cerrar',
    path: paths.HOME,
  },
  NEW: {
    color: 'green',
    icon: <AddRounded {...iconsConfig} />,
    name: 'Nuevo',
    path: null,
  },
  SEARCH: {
    color: 'blue',
    icon: <SearchRounded {...iconsConfig} />,
    name: 'Buscar',
    path: null,
  },
};
