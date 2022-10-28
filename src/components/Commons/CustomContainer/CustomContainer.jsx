import { Container } from '@mui/material';

const CustomContainer = ({ children, sx }) => {
  return <Container sx={{ mt: 3, mb: 3, ...sx }}>{children}</Container>;
};

export default CustomContainer;
