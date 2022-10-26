import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '..';

import routes from '../../constants/routes';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  const routesArray = Object.values(routes);

  return (
    <BrowserRouter>
      <Routes>
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
