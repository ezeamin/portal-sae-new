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

const ModuleCard = (props) => {
  const { module, delay } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      className='animate-in'
    >
      <CardActionArea sx={{ height: '100%' }} onClick={handleClick}>
        <Stack sx={{ height: '100%' }} direction='row'>
          <Box
            sx={{
              width: '15px',
              backgroundColor: module.color,
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
                  color: module.color,
                }}
              >
                {module.icon}
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