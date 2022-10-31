import { useEffect, useState } from 'react';

import { Box } from '@mui/material'; 

import { Background, FormPanel } from '../../components';

const minSize = 900;

const MainAuth = (props) => {
  const { view } = props;

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      <FormPanel view={view} />
      {screenWidth >= minSize && <Background />}
    </Box>
  );
};

export default MainAuth;
