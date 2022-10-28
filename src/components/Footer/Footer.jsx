import { useEffect, useState } from 'react';

import { Chip, Paper, Stack } from '@mui/material';

const Footer = () => {
  const [version, setVersion] = useState('');

  useEffect(() => {
    const importPJson = async () => {
      const pjson = await import('../../../package.json');
      setVersion(pjson.version);
    };
    importPJson();
  }, []);

  return (
    <Paper
      elevation={0}
      square
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '3rem',
        backgroundColor: "dark.light",
      }}
    >
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        sx={{
          height: '100%',
          mx: 1,
        }}
      >
        <Chip
          label='2022 - Direccion de Sistemas'
          color='light'
          sx={{
            fontWeight: "bold",
          }}
        />
        <Chip
          label={`v${version}`}
          color='light'
          sx={{
            fontWeight: "bold",
          }}
        />
      </Stack>
    </Paper>
  );
};

export default Footer;
