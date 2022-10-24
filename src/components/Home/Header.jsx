import { useNavigate } from 'react-router-dom';

import {
  Avatar,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import { RoundedButton } from '../../styled';

import routes from '../../constants/routes';

const Header = (props) => {
  const { user } = props;

  const navigate = useNavigate();

  const notificationNumber = 5;

  return (
    <Paper
      square
      elevation={0}
      sx={{ py: {md: 5, xs: 3}, backgroundColor: 'whiteDarkMode.main' }}
    >
      <Container>
        <Stack
          direction={{ md: 'row', sm: 'column' }}
          alignItems='center'
          justifyContent='space-between'
        >
          {/* ------------ LEFT ------------ */}
          <Stack direction='row' alignItems='center'>
            <Avatar
              alt={user.name}
              sx={{ width: '4rem', height: '4rem', mr: 3 }}
            />
            <Stack>
              <Typography
                variant='h5'
                component='h1'
                fontWeight='bold'
                color='light.contrastText'
              >
                {`Bienvenido, ${user.name}`}
              </Typography>
              {notificationNumber && (
                <Stack direction='row' alignItems='center'>
                  <NotificationsRoundedIcon
                    color='dark'
                    sx={{ marginLeft: -0.5 }}
                  />
                  <Typography color='light.secondaryContrastText'>
                    {`Tenés ${notificationNumber} notificaciones nuevas`}{' '}
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Stack>

          {/* ------------ RIGHT ------------ */}
          <RoundedButton
            variant='contained'
            color='primary'
            startIcon={<SettingsRoundedIcon />}
            sx={{
              marginTop: { xs: 2, md: 0 },
            }}
            onClick={()=>navigate(routes.MY_PROFILE.path)}
          >
            Mi perfil
          </RoundedButton>
        </Stack>
      </Container>
    </Paper>
  );
};

export default Header;
