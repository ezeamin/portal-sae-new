import { Box, Typography } from '@mui/material';

const ErrorPdfMessage = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <i className='fa-solid fa-circle-exclamation text-danger fa-2x mb-2'></i>
      <Typography variant='h5' component='h5'>
        Error cargando archivo
      </Typography>
      <Typography variant='body1' component='p'>
        Por favor, intente cargar nuevamente esta página
      </Typography>
    </Box>
  );
};

export default ErrorPdfMessage;
