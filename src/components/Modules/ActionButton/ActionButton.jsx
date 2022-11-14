import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Tooltip } from '@mui/material';

import { ButtonStyled } from './styled';

import { actionButtons } from '../../../constants/actionButtons';

import { setModal } from '../../../features/modal/genericModalSlice';

import es from '../../../lang/es';

const ActionButton = (props) => {
  const { icon, name, color, path, delay, modal, moduleInfo } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (modal) {
      switch (moduleInfo) {
        case `${es.MODULES.WRITINGS.NAME + actionButtons.SEARCH.name}`:
          dispatch(
            setModal({
              modal: true,
              name: es.MODULES.WRITINGS.NAME,
              type: actionButtons.SEARCH.name,
            })
          );
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
