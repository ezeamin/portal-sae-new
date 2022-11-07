import { Paper } from '@mui/material';

// Paper con colores y margenes normalizados

const CustomPaper = ({ children, sx: sxProps }) => {
  const sx = {
    p: 3,
    backgroundColor: 'whiteDarkMode.main',
    ...sxProps,
  };

  return (
    <Paper variant='fullyRounded' sx={sx} className='animate-in-bottom'>
      {children}
    </Paper>
  );
};

export default CustomPaper;
