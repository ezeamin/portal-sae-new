import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { setCurrentPage } from '../../features/globalData';

import getPageInfo from '../../helpers/getPageInfo';

import LazyLoadingSpinner from './Loading/LazyLoadingSpinner';

// TODO: implementar
const PrivateRoute = (props) => {
  const { component: Component, routeId, args } = props;

  const location = useLocation();

  const dispatch = useDispatch();

  //   Colocar en el store la info del sitio actual
  useEffect(() => {
    const module = getPageInfo(routeId);

    dispatch(setCurrentPage(module.id));
  }, [location, dispatch, routeId]);

  return (
    <Suspense fallback={<LazyLoadingSpinner />}>
      <Component {...args} />
    </Suspense>
  );
  // return isJwtTokenStored() ? <Component /> : <Login />
};

export default PrivateRoute;
