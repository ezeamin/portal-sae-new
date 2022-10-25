import { useSelector } from 'react-redux';

import { Header, ModuleList } from '../../components';

import modules from '../../constants/modules';

const Home = () => {
  const user = useSelector((state) => state.globalData.user);

  return (
    <>
      <Header user={user} page="HOME"/>
      <ModuleList modules={modules.HOME}/>
    </>
  );
};

export default Home;
