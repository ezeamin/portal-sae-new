import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { setCurrentPage } from '../../features/globalData';

import LazyLoadingSpinner from './Loading/LazyLoadingSpinner';

// TODO: implementar
const PrivateRoute = (props) => {
  const { component: Component, routeId, args } = props;

  const location = useLocation();

  const dispatch = useDispatch();

  // Colocar en el store el id de la página actual
  useEffect(() => {
    dispatch(setCurrentPage(routeId));
  }, [location, dispatch, routeId]);

  // Suspense se usa para los componentes de carga lazy
  return (
    <Suspense fallback={<LazyLoadingSpinner />}>
      <Component {...args} />
    </Suspense>
  );
  // return isJwtTokenStored() ? <Component /> : <Login />
};

export default PrivateRoute;
