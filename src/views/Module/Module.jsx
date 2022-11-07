import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  Dialog,
} from '@mui/material';
import { CustomAlert, BreadcrumbsList } from '../../components';

import { flatModulesRoutes } from '../../helpers/flatRoutes';
import { actionButtons } from '../../constants/actionButtons';

import ModuleHeader from '../../components/Modules/Extra/ModuleHeader/ModuleHeader';

const tempButtons = Object.values(actionButtons);

const Module = () => {
  const moduleId = useSelector((state) => state.globalData.currentPage);

  const modulesList = flatModulesRoutes();

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [component, setComponent] = useState(null);
  const [buttons, setButtons] = useState([]);
  const [positions, setPositions] = useState([]);
  const [moduleHelp, setModuleHelp] = useState('');

  const [modalOpened, setModalOpened] = useState(false);

  const handleModal = (condition) => {
    setModalOpened(condition);
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
      <ModuleHeader title={title} subtitle={subtitle} buttons={buttons} handleModal={handleModal}/>

      {component}

      <Dialog open={modalOpened} onClose={()=>handleModal(false)}>
        <CustomAlert severity='info'>{moduleHelp}</CustomAlert>
      </Dialog>
    </Container>
  );
};

export default Module;
