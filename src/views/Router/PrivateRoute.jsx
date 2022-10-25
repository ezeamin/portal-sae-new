import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { setCurrentModule } from '../../features/globalData';

import getModuleInfo from '../../helpers/getModuleInfo';

// TODO: implementar
const PrivateRoute = (props) => {
  const { component: Component, routeId, args } = props;

  const location = useLocation();

  const dispatch = useDispatch();

  //   Colocar en el store la info del sitio actual
  useEffect(() => {
    const module = getModuleInfo(routeId);

    dispatch(setCurrentModule(module.id));
  }, [location, dispatch, routeId]);

  return <Component {...args} />;
  // return isJwtTokenStored() ? <Component /> : <Login />
};

export default PrivateRoute;
