import { AddRounded, CloseRounded, SearchRounded } from '@mui/icons-material';

const iconsConfig = {
  sx: {
    fontSize: '1.75rem',
  },
};

export const actionButtons = {
  CLOSE: {
    name: 'Cerrar',
    icon: <CloseRounded {...iconsConfig} />,
    color: "red",
    path: '/',
  },
  NEW: {
    name: 'Nuevo',
    icon: <AddRounded {...iconsConfig} />,
    color: 'green',
  },
  SEARCH: {
    name: 'Buscar',
    icon: <SearchRounded {...iconsConfig} />,
    color: 'blue',
  },
};
