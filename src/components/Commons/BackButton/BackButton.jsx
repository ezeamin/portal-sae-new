import { useNavigate } from 'react-router-dom';
import { RoundedButton } from '../../../styled';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const BackButton = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <RoundedButton
      {...props}
      onClick={handleClick}
      variant="outlined"
      color="dark"
      startIcon={<ArrowBackRoundedIcon />}
    >
      Volver
    </RoundedButton>
  );
};

export default BackButton;
