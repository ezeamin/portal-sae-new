import { useSelector } from 'react-redux';

import Header from '../../components/Commons/Header/Header';
import ModuleList from '../../components/Home/Modules/ModuleList';

import modules from './data/modules';

const Home = () => {
  const user = useSelector((state) => state.globalData.user);

  return (
    <>
      <Header user={user} page="HOME"/>
      <ModuleList modules={modules}/>
    </>
  );
};

export default Home;
