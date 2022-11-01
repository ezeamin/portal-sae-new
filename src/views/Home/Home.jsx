import { useSelector } from 'react-redux';

import { Header, ModuleList } from '../../components';
import Waves from '../../components/Home/Waves';

import { modules } from '../../constants/constants';

import { useGetWritingsQuery } from '../../features/api/writingsSlice';

const Home = () => {
  const user = useSelector((state) => state.globalData.user);

  const { data } = useGetWritingsQuery();
  console.log("🚀 ~ file: Home.jsx ~ line 14 ~ Home ~ data", data)

  const modulesList = Object.values(modules.HOME);

  return (
    <>
      <Header user={user} page='HOME' />
      <ModuleList modules={modulesList} sx={{mb: 10}}/>
      <Waves />
    </>
  );
};

export default Home;
