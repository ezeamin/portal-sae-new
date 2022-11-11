import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Header, ModuleList } from '../../components';
import Waves from '../../components/Home/Waves';

import useAvailableModules from '../../hooks/useAvailableModules';

import es from '../../lang/es';

const Home = () => {
  const user = useSelector((state) => state.globalData.user);

  useEffect(() => {
    document.title = `${es.PORTAL} | ${es.PJT}`;
  }, []);

  const { modules } = useAvailableModules();

  return (
    <>
      <Header user={user} page='HOME' />
      <ModuleList modules={modules} sx={{ mb: 10 }} />
      <Waves />
    </>
  );
};

export default Home;
