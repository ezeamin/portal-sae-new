import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Header, ModuleList } from '../../components';
import Waves from '../../components/Home/Waves';

import { mainModulesArray } from '../../constants/Routing/routes';

import es from '../../lang/es';

const Home = () => {
  const user = useSelector((state) => state.globalData.user);

  useEffect(() => {
    document.title = `${es.PORTAL} | ${es.PJT}`;
  }, []);
  
  return (
    <>
      <Header user={user} page='HOME' />
      <ModuleList modules={mainModulesArray} sx={{ mb: 10 }} />
      <Waves />
    </>
  );
};

export default Home;
