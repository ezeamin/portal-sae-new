import { Container } from '@mui/material';

const CustomContainer = ({ children }) => {
  return <Container sx={{ mt: 3, mb: 5 }}>{children}</Container>;
};

export default CustomContainer;
