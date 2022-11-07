import { useSelector } from 'react-redux';

import { Alert } from '@mui/material';

import themes from '../../../constants/themes';

// Alert que en modo oscuro se coloca con "outlined"

const CustomAlert = ({ children, ...sxProps }) => {
  const theme = useSelector((state) => state.globalData.theme);

  const variant = {
    variant: theme === themes.LIGHT ? 'standard' : 'outlined',
  };

  return (
    <Alert {...variant} {...sxProps}>
      {children}
    </Alert>
  );
};

export default CustomAlert;
