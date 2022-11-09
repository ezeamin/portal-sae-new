import { Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { iconTypes } from '../../../constants/iconTypes';

import useIcon from '../../../hooks/useIcon';

const PageChip = (props) => {
  const { currentPage } = props;

  const navigate = useNavigate();

  const icon = useIcon({ icon: currentPage.icon, type: iconTypes.ROUTE });

  const handleNavigate = () => {
    const { path } = currentPage;

    const res = path.split('/')[1];

    navigate(`/${res}`);
  };

  return (
    <Chip
      label={currentPage.name}
      color={currentPage.color}
      icon={icon}
      className='animate-in-right'
      onClick={handleNavigate}
      sx={{
        fontWeight: 'bold',
        textShadow: '0 0 2px #000',
        flexDirection: 'row',
        cursor: 'pointer',
        '& .MuiChip-icon': {
          filter: 'drop-shadow(0 0 0.3px #000)',
          color: 'red',
        },
        '& .MuiChip-label': {
          lineHeight: '12px',
        },
      }}
    />
  );
};

export default PageChip;
