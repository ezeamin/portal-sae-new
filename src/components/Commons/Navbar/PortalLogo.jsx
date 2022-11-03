import { useNavigate } from 'react-router-dom';

import { Tooltip } from '@mui/material';

import { mainRoutes } from '../../../constants/Routing/routes';

const PortalLogo = () => {
  const navigate = useNavigate();
  return (
    <Tooltip title='Portal del SAE'>
      <button
        onClick={() => navigate(mainRoutes.HOME.path)}
        style={{ marginRight: '0.5rem', height: '65px' }}
      >
        <img
          src='/assets/img/logos/logo-57.png'
          alt='Portal del SAE'
          height={45}
          width={42}
        />
      </button>
    </Tooltip>
  );
};

export default PortalLogo;
