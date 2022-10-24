import { useSelector } from 'react-redux';

import Header from '../../components/Home/Header';
import ModuleList from '../../components/Home/Modules/ModuleList';

const Home = () => {
  const user = useSelector((state) => state.globalData.user);

  return (
    <>
      <Header user={user} />
      <ModuleList />
    </>
  );
};

export default Home;
