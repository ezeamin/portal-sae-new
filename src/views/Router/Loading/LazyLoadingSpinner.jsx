import { Stack } from '@mui/material';

const LazyLoadingSpinner = () => {
  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      sx={{ height: '100%', width: '100%' }}
    >
      <div className='spinner'>
        <div className='double-bounce1'></div>
        <div className='double-bounce2'></div>
      </div>
    </Stack>
  );
};

export default LazyLoadingSpinner;
