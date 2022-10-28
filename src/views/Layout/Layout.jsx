import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../../components';

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* Tamaños navbar y footer */}
      <div style={{ marginTop: '65px', marginBottom: '60px' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
