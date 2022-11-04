import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Tooltip } from '@mui/material';

import { ButtonStyled } from './styled';

import { setWritingsModalSearch } from '../../../features/modal/genericModalSlice';

const ActionButton = (props) => {
  const { icon, name, color, path, delay, modal, moduleInfo } = props;
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleClick = () => {
    if ( modal ) {
      switch (moduleInfo) {
        case 'Ingreso escritos search':
          dispatch(setWritingsModalSearch({searchWritings: true}))
          break;
      
        default:
          break;
      }
    }
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
