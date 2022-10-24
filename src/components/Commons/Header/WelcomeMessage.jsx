import { Stack, Typography } from '@mui/material';

import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

const WelcomeMessage = (props) => {
  const { user, isHomePage } = props;

  if (!isHomePage) {
    return (
        <Typography
          variant='h4'
          component='h1'
          fontWeight='bold'
          color='light.contrastText'
        >
          {user.name}
        </Typography>
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
        {`Bienvenido, ${user.name}`}
      </Typography>
      {user.notifications && (
        <Stack direction='row' alignItems='center'>
          <NotificationsRoundedIcon color='dark' sx={{ marginLeft: -0.5 }} />
          <Typography color='light.secondaryContrastText'>
            {`Tenés ${user.notifications} notificaciones nuevas`}{' '}
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default WelcomeMessage;
