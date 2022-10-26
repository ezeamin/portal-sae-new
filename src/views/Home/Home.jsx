import { useSelector } from 'react-redux';

import { Header, ModuleList } from '../../components';

import { modules } from '../../constants/constants';

const Home = () => {
  const user = useSelector((state) => state.globalData.user);

  const modulesList = Object.values(modules.HOME);

  return (
    <>
      <Header user={user} page='HOME' />
      <ModuleList modules={modulesList} />
    </>
  );
};

export default Home;
