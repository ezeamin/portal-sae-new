import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setModulesModalOpened } from '../../../features/surfaces';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

import { iconTypes } from '../../../constants/iconTypes';

import useIcon from '../../../hooks/useIcon';
import useModuleColor from '../../../hooks/useModuleColor';

const ModuleCard = (props) => {
  const { module, delay } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const icon = useIcon({ icon: module.icon, type: iconTypes.MODULE })
  const color = useModuleColor(module.color);

  // TODO: Hook para manejar color

  const handleClick = () => {
    dispatch(setModulesModalOpened(false));
    if (module.path) navigate(module.path);
    else module.action();
  };

  return (
    <Card
      sx={{
        height: '100%',
        backgroundColor: 'whiteDarkMode.main',
        animationDelay: `${delay}ms`,
      }}
      className='animate-in-bottom'
    >
      <CardActionArea sx={{ height: '100%' }} onClick={handleClick}>
        <Stack sx={{ height: '100%' }} direction='row'>
          <Box
            sx={{
              minWidth: '15px',
              backgroundColor: color,
            }}
          ></Box>
          <CardContent sx={{ height: '100%' }}>
            <Stack direction='row' alignItems='center' sx={{ height: '100%' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '4rem',
                  height: '5rem',
                  mr: 3,
                  color: color,
                }}
              >
                {icon}
              </Box>
              <Stack justifyContent='center'>
                <Typography gutterBottom variant='h5' component='h5'>
                  {module.name}
                </Typography>
                <Typography variant='body1' color='text.secondary'>
                  {module.description}
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

export default ModuleCard;
