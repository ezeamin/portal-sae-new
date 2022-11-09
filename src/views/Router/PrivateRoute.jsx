import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { authRoutes } from '../../constants/Routing/routes';

import { setCurrentPage } from '../../features/globalData';

import LazyLoadingSpinner from './Loading/LazyLoadingSpinner';

const PrivateRoute = (props) => {
  const { component: Component, routeId, args, auth } = props;

  const location = useLocation();

  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);

  // Colocar en el store el id de la página actual
  useEffect(() => {
    dispatch(setCurrentPage(routeId));
  }, [location, dispatch, routeId]);

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
