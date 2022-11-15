import { Outlet } from 'react-router-dom';

import { Footer, ModulesModal, Navbar } from '../../components';
import Modal from '../../components/Modal/Modal';

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
      <Modal />
    </>
  );
};

export default Layout;
