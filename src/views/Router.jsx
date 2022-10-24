import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './';

import routes from '../constants/routes';

// TODO: implementar 
const PrivateRoute = ({ component: Component }) => {
  return <Component />;
  // return isJwtTokenStored() ? <Component /> : <Login />
};

const Router = () => {
  const routesArray = Object.values(routes);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {routesArray.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              element={<PrivateRoute component={route.component} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
