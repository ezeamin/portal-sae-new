import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '..';

import PrivateRoute from './PrivateRoute';

import { authRoutes, routes } from '../../constants/routes';

const Router = () => {
  const authRoutesArray = Object.values(authRoutes);
  const routesArray = Object.values(routes);

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/auth'>
            {authRoutesArray.map((route) => (
              <Route
                path={route.path}
                key={route.id}
                element={
                  <PrivateRoute
                    component={route.component}
                    args={route?.args}
                    routeId={route.id}
                    auth
                  />
                }
              />
            ))}
          </Route>
          <Route path='/' element={<Layout />}>
            {routesArray.map((route) => (
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
