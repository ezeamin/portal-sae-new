import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, Stack, Typography } from '@mui/material';

import ActionButton from '../../components/Modules/ActionButton/ActionButton';
import BreadcrumbsList from '../../components/Modules/Breadcrumbs/BreadcrumbsList';

import { flatModulesRoutes } from '../../helpers/flatRoutes';
import { actionButtons } from '../../constants/actionButtons';


const tempButtons = Object.values(actionButtons)

const Module = () => {
  const moduleId = useSelector((state) => state.globalData.currentPage);

  const modulesList = flatModulesRoutes();

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [component, setComponent] = useState(null);
  const [buttons, setButtons] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const module = modulesList.find((module) => module.id === moduleId);

    if (!module) return;

    setTitle(module.name);
    setSubtitle(module.routeInfo.description);
    setButtons(module.routeInfo.buttons || tempButtons);
    setPositions(module.routeInfo.positions);
    setComponent(<module.routeInfo.component />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId]);

  return (
    <Container sx={{ mb: 10, mt: 12, overflowX: 'hidden' }}>
      <BreadcrumbsList positions={positions} />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent='space-between'
        sx={{ mb: 4 }}
      >
        <div>
          <Typography
            variant='h4'
            fontWeight='bold'
            sx={{ mt: 2, animationDelay: '50ms' }}
            className='animate-in-right'
          >
            {title}
          </Typography>
          <Typography
            variant='body1'
            sx={{ animationDelay: '100ms' }}
            className='animate-in-right'
          >
            {subtitle}
          </Typography>
        </div>
        {/* agregar la nueva propiead en button */}
        <Stack direction='row' alignItems='center' sx={{ mt: { xs: 2 } }}>
          {buttons.map((button, index) => (
            <ActionButton
              key={button?.name}
              delay={`${index * 100 + 300}ms`}
              {...button}
            />
          ))}
        </Stack>
      </Stack>
      {component}
    </Container>
  );
};

export default Module;
