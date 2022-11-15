import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import { Background, FormPanel } from '../../components';

import { mainRoutes } from '../../constants/Routing/routes';

const minSize = 900;

const MainAuth = (props) => {
  const { view } = props;

  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.globalData.user);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  // Resize handling: para mostrar u ocultar el fondo
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // no mostrar rutas de autenticacion cuando
    // el usuario esté logueado (auth.accessToken), excepto
    // cuando sea nuevo y esté firmando TyC
    if (auth.accessToken && !user?.newUser)
      navigate(mainRoutes.MAIN.path);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navigate, auth.accessToken, user?.newUser]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      <FormPanel view={view} />
      {screenWidth >= minSize && <Background />}
    </Box>
  );
};

export default MainAuth;
