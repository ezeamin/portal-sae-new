import { useEffect, useState } from 'react';

import { Paper } from '@mui/material';

import { writingsAdapter } from '../../../adapters/writingsAdapter';

import { useGetWritingsQuery } from '../../../features/api/writingsSlice';

const IngresoEscritos = () => {
  const [writings, setWritings] = useState();
  console.log("🚀 ~ file: IngresoEscritos.jsx ~ line 11 ~ IngresoEscritos ~ writings", writings)

  const { data, isError, isLoading } = useGetWritingsQuery({
    numPage: 0,
    quantityPerPage: 10,
  });

  useEffect(() => {
    if (data && !isError && !isLoading) {
      console.log(data);
      const formattedData = writingsAdapter(data);
      setWritings(formattedData);
    }
  }, [data, isError, isLoading]);

  return (
    <Paper
      sx={{
        width: '100%',
        height: '100%',
        display: 'block-inline',
        animationDelay: '500ms',
      }}
      className='animate-in-bottom'
    ></Paper>
  );
};

export default IngresoEscritos;
