import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, Dialog } from '@mui/material';

import { CustomAlert, BreadcrumbsList } from '../../components';
import ModuleHeader from '../../components/Modules/Extra/ModuleHeader/ModuleHeader';

import { actionButtons } from '../../constants/actionButtons';

import { flatModulesRoutes } from '../../helpers/flatRoutes';

const tempButtons = Object.values(actionButtons);

const Module = () => {
  const moduleId = useSelector((state) => state.globalData.currentPage);

  const modulesList = flatModulesRoutes();

  const [buttons, setButtons] = useState([]);
  const [component, setComponent] = useState(null);
  const [moduleHelp, setModuleHelp] = useState('');
  const [positions, setPositions] = useState([]);
  const [subtitle, setSubtitle] = useState('');
  const [title, setTitle] = useState('');


  const [infoModalOpened, setInfoModalOpened] = useState(false);

  const handleModal = (condition) => {
    setInfoModalOpened(condition);
  };

  useEffect(() => {
    const module = modulesList.find((module) => module.id === moduleId);

    if (!module) return;

    setTitle(module.name);
    setSubtitle(module.routeInfo.description);
    setButtons(module.routeInfo.buttons || tempButtons);
    setPositions(module.routeInfo.positions);
    setModuleHelp(module.help);
    setComponent(<module.routeInfo.component />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId]);

  return (
    <Container sx={{ mb: 10, mt: 12, overflowX: 'hidden' }}>
      <BreadcrumbsList positions={positions} />
      <ModuleHeader
        buttons={buttons}
        handleModal={handleModal}
        subtitle={subtitle}
        title={title}
      />

      {component}

      <Dialog open={infoModalOpened} onClose={() => handleModal(false)}>
        <CustomAlert severity='info'>{moduleHelp}</CustomAlert>
      </Dialog>
    </Container>
  );
};

export default Module;
