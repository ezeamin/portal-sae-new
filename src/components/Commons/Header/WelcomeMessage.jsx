import { useNavigate } from 'react-router-dom';

import { HomeRounded, NotificationsRounded } from '@mui/icons-material';

import { Skeleton, Stack, Typography } from '@mui/material';

import { mainRoutes } from '../../../constants/Routing/routes';

import { RoundedButton } from '../../../styled';
import es from '../../../lang/es';

const WelcomeMessage = (props) => {
  const { user, isHomePage } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(mainRoutes.MAIN.path);
  };

  // Página del perfil
  if (!isHomePage) {
    return (
      <Stack>
        <Typography
          variant='h4'
          component='h1'
          fontWeight='bold'
          color='light.contrastText'
          className='animate-in-right'
        >
          {user ? (
            <>{user?.name + ' ' + user?.lastname}</>
          ) : (
            <Skeleton variant='rectangular' width={250} height={30} />
          )}
        </Typography>
        <RoundedButton
          variant='outlined'
          color='dark'
          onClick={handleClick}
          startIcon={<HomeRounded />}
          sx={{ width: { xs: '100%', md: '150px' }, mt: 1 }}
          size='small'
          className='animate-in-right'
        >
          {es.HOME}
        </RoundedButton>
      </Stack>
    );
  }

  // Página principal
  return (
    <Stack>
      <Typography
        variant='h5'
        component='h1'
        fontWeight='bold'
        color='light.contrastText'
        className='animate-in-right'
      >
        {user ? (
          <>{es.WELCOME + ', ' + user?.name + ' ' + user?.lastname}</>
        ) : (
          <>
            <Skeleton variant='rectangular' width={250} height={30} />
            <Skeleton
              variant='rectangular'
              width={200}
              height={20}
              sx={{ mt: 0.5 }}
            />
          </>
        )}
      </Typography>
      {!!user?.notifications && (
        <Stack
          direction='row'
          alignItems='flex-start'
          className='animate-in-right'
          sx={{ animationDelay: '100ms' }}
        >
          <NotificationsRounded color='dark' sx={{ ml: -0.5, mr: 1 }} />
          <Typography color='light.secondaryContrastText'>
            {es.YOU_HAVE +
              ' ' +
              user?.notifications +
              ' ' +
              es.NEW_NOTIFICATIONS.toLowerCase()}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default WelcomeMessage;
