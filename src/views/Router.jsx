import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from '../constants/routes';
import { Layout, Home } from './';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path={routes.HOME} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
