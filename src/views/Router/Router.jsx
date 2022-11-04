import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '..';

import PrivateRoute from './PrivateRoute';
import { ModulesModal } from '../../components';
import {
  flatAuthRoutes,
  flatMainRoutes,
  flatModulesRoutes,
  flatProfileRoutes,
} from '../../helpers/flatRoutes';

const Router = () => {
  const authRoutes = flatAuthRoutes();
  const mainRoutes = flatMainRoutes();
  const profileRoutes = flatProfileRoutes();
  const modulesRoutes = flatModulesRoutes();

  const loggedRoutes = [...mainRoutes, ...profileRoutes, ...modulesRoutes];

  return (
    <BrowserRouter>
      <ModulesModal />
      <Routes>
        <Route path='/auth'>
          {authRoutes.map((route) => (
            <Route
              path={route.path}
              key={route.id}
              element={
                <PrivateRoute
                  component={route.component}
                  args={route?.args}
                  routeId={route.id}
                />
              }
            />
          ))}
        </Route>

        {/* Logged routes */}
        <Route path='/' element={<Layout />}>
          {loggedRoutes.map((route) => (
            <Route
              path={route.path}
              key={route.id}
              element={
                <PrivateRoute
                  component={route.component}
                  args={route?.args}
                  routeId={route.id}
                />
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
