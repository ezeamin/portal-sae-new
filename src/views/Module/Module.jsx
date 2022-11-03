import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Container, Stack, Typography } from '@mui/material';

import { modules } from '../../constants/constants';

import IngresoEscritos from '../../components/Modules/IngresoEscritos/IngresoEscritos';
import ActionButton from '../../components/Modules/ActionButton/ActionButton';
import BreadcrumbsList from '../../components/Modules/Breadcrumbs/BreadcrumbsList';
import { routes } from '../../constants/routes';

const Module = (props) => {
  const { positions = [], routeDescription } = props;

  const moduleId = useSelector((state) => state.globalData.currentModule);

  const [title, setTitle] = useState('');
  const [component, setComponent] = useState(null);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    switch (moduleId) {
      case routes.ESCRITOS.id:
        setTitle(modules.HOME.ESCRITOS.name);
        setButtons(modules.HOME.ESCRITOS.buttons);
        setComponent(<IngresoEscritos />);
        break;
      default:
        break;
    }
  }, [moduleId]);

  return (
    <Container sx={{ mb: 10, mt: 12 }}>
      <BreadcrumbsList positions={positions} />
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent='space-between'
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
            {routeDescription}
          </Typography>
        </div>
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
