import { useSelector } from 'react-redux';

import Header from './Header';
import ModuleList from './Modules/ModuleList';

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
