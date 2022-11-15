import { useEffect, useLayoutEffect, useState } from 'react';

import { Box } from '@mui/material';

import { Background, FormPanel } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { mainRoutes } from '../../constants/Routing/routes';
import { useNavigate } from 'react-router-dom';
import { setTheme } from '../../features/globalData';
import themes from '../../constants/themes';

const minSize = 900;

const MainAuth = (props) => {
  const { view } = props;

  const auth = useSelector((state) => state.auth);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Resize handling: para mostrar u ocultar el fondo
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    if (auth.accessToken) navigate(mainRoutes.MAIN.path);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navigate, auth.accessToken]);

  useLayoutEffect(() => {
    dispatch(setTheme(themes.LIGHT));
  }, [dispatch]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      <FormPanel view={view} />
      {screenWidth >= minSize && <Background />}
    </Box>
  );
};

export default MainAuth;
