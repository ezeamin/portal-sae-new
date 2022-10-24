import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout,Home } from './';

// import routes from '../constants/routes';

const Router = () => {
  // console.log(Object.values(routes));

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* {Object.values(routes).forEach(route => <Route path={route.path} element={route.component} />)} */}
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
