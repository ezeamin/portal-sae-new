import { useNavigate } from 'react-router-dom';

import { Tooltip } from '@mui/material';

import { ButtonStyled } from '../styled';

const ActionButton = (props) => {
  const { icon, name, color, path, delay } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <Tooltip title={name}>
      <ButtonStyled
        color={color}
        onClick={handleClick}
        sx={{ animationDelay: delay }}
        className='animate-in-bottom'
      >
        {icon}
      </ButtonStyled>
    </Tooltip>
  );
};

export default ActionButton;
