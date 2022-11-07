import { Chip } from '@mui/material';

import { iconTypes } from '../../../constants/iconTypes';

import useIcon from '../../../hooks/useIcon';

const PageChip = (props) => {
  const { currentPage } = props;

  const icon = useIcon({ icon: currentPage.icon, type: iconTypes.ROUTE });

  return (
    <Chip
      label={currentPage.name}
      color={currentPage.color}
      icon={icon}
      className='animate-in-right'
      sx={{
        fontWeight: 'bold',
        lineHeight: '10',
        textShadow: '0 0 2px #000',
        '& .MuiChip-icon': {
          filter: "drop-shadow(0 0 0.5px #000)",
          color: 'red',
        },
      }}
    />
  );
};

export default PageChip;
