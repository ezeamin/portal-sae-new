import { Stack, Typography } from '@mui/material';

import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

import { RoundedButton } from '../../../styled';
import { useNavigate } from 'react-router-dom';
import routes from '../../../constants/routes';

const WelcomeMessage = (props) => {
  const { user, isHomePage } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.HOME.path);
  };

  if (!isHomePage) {
    return (
      <Stack>
        <Typography
          variant='h4'
          component='h1'
          fontWeight='bold'
          color='light.contrastText'
        >
          {`${user.name} ${user.lastname}`}
        </Typography>
        <RoundedButton
          variant='outlined'
          color='dark'
          onClick={handleClick}
          startIcon={<HomeRoundedIcon />}
          sx={{ width: { md: '50%' }, mt: 1 }}
          size='small'
        >
          Inicio
        </RoundedButton>
      </Stack>
    );
  }

  return (
    <Stack>
      <Typography
        variant='h5'
        component='h1'
        fontWeight='bold'
        color='light.contrastText'
      >
        {`Bienvenido, ${user.name} ${user.lastname}`}
      </Typography>
      {user.notifications && (
        <Stack direction='row' alignItems='flex-start'>
          <NotificationsRoundedIcon color='dark' sx={{ ml: -0.5, mr: 1 }} />
          <Typography color='light.secondaryContrastText'>
            {`Tenés ${user.notifications} notificaciones nuevas`}{' '}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default WelcomeMessage;
