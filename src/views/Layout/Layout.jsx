import { Outlet } from 'react-router-dom';
import { Footer, ModulesModal, Navbar } from '../../components';

const Layout = () => {
  return (
    <>
      <Navbar />

      {/* Tamaños navbar y footer */}
      <div style={{ marginTop: '65px', marginBottom: '48px' }}>
        <Outlet />
      </div>
      
      <Footer />

      {/* Modales */}
      <ModulesModal />
    </>
  );
};

export default Layout;
