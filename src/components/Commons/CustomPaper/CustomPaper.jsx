import { Paper } from '@mui/material';

const CustomPaper = ({ children, sxProps }) => {
  const sx = {
    p: 3,
    backgroundColor: 'whiteDarkMode.main',
    ...sxProps,
  };

  return (
    <Paper variant='fullyRounded' sx={sx}>
      {children}
    </Paper>
  );
};

export default CustomPaper;
