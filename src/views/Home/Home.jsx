import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { writingsAdapter } from '../../adapters/writingsAdapter';

import { Header, ModuleList } from '../../components';
import Waves from '../../components/Home/Waves';

import { mainModulesArray } from '../../constants/Routing/routes';

import { useGetWritingsQuery } from '../../features/api/writingsSlice';
import es from '../../lang/es';

const Home = () => {
  const user = useSelector((state) => state.globalData.user);

  const [writings, setWritings] = useState();

  const { data, isError, isLoading } = useGetWritingsQuery({
    numPage: 0,
    quantityPerPage: 10,
  });

  useEffect(() => {
    if (data && !isError && !isLoading) {
      const formattedData = writingsAdapter(data);
      setWritings(formattedData);
    }
  }, [data, isError, isLoading]);

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
