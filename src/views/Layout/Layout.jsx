import { Outlet } from 'react-router-dom';

import { Footer, Navbar } from '../../components';
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
      <Modal />
    </>
  );
};

export default Layout;
