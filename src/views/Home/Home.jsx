import { useSelector } from 'react-redux';

import { Header, ModuleList } from '../../components';
import Waves from '../../components/Home/Waves';

import mainModules from '../../constants/Modules/modules.js';

const Home = () => {
  const user = useSelector((state) => state.globalData.user);

  const modulesList = mainModules || [];

  return (
    <>
      <Header user={user} page='HOME' />
      <ModuleList modules={modulesList} sx={{mb: 10}}/>
      <Waves />
    </>
  );
};

export default Home;
