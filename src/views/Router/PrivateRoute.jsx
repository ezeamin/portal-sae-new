import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ids } from '../../constants/Routing/ids';
import { authRoutes, mainRoutes } from '../../constants/Routing/routes';

import { setCurrentPage } from '../../features/globalData';

import useAvailableModules from '../../hooks/useAvailableModules';

import LazyLoadingSpinner from './Loading/LazyLoadingSpinner';

const PrivateRoute = (props) => {
  const { component: Component, routeId, args, auth } = props;

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);

  const { modulesIds } = useAvailableModules();

  // Colocar en el store el id de la página actual
  useEffect(() => {
    // chequear que el usuario tenga permiso para acceder a la ruta
    if (routeId > ids.MIN.MODULES_ROUTES) {
      if (!modulesIds.includes(routeId)) {
        navigate(mainRoutes.MAIN.path);
      }
    }

    dispatch(setCurrentPage(routeId));
  }, [location, dispatch, navigate, auth, modulesIds, routeId]);

  // Suspense se usa para los componentes de carga lazy

  if (auth) {
    // rutas de login, etc
    return (
      <Suspense fallback={<LazyLoadingSpinner />}>
        <Component {...args} />
      </Suspense>
    );
  }

  return (
    <>
      {accessToken ? (
        <Suspense fallback={<LazyLoadingSpinner />}>
          <Component {...args} />
        </Suspense>
      ) : (
        <Navigate to={authRoutes.LOGIN.path} />
      )}
    </>
  );
};

export default PrivateRoute;
