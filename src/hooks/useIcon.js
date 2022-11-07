import { iconTypes } from '../constants/iconTypes';

const modulesIconsConfig = {
  sx: {
    fontSize: '3rem',
  },
};

export const routesIconsConfig = {
  sx: {
    fontSize: '1.2rem',
    ml: '12px !important',
  },
};

// Ajustar los estilos y tamaños del icono segun
// donde se aplique

const useIcon = (props) => {
  const { icon: Icon, type } = props;

  switch (type) {
    case iconTypes.ROUTE: {
      return <Icon {...routesIconsConfig} />;
    }
    case iconTypes.MODULE: {
      return <Icon {...modulesIconsConfig} />;
    }
    default: {
      return <Icon />;
    }
  }
};

export default useIcon;
