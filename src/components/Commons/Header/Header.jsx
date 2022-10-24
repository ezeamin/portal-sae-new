import { useNavigate } from 'react-router-dom';

import { Avatar, Container, Paper, Stack } from '@mui/material';

import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import { RoundedButton } from '../../../styled';

import routes from '../../../constants/routes';
import WelcomeMessage from './WelcomeMessage';

const Header = (props) => {
  const { user, page } = props;

  let isHomePage = false;
  if (page === 'HOME') isHomePage = true;

  const navigate = useNavigate();

  return (
    <Paper
      square
      elevation={0}
      sx={{ py: { md: 5, xs: 3 }, backgroundColor: 'whiteDarkMode.main' }}
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
            <WelcomeMessage user={user} isHomePage={isHomePage} />
          </Stack>

          {/* ------------ RIGHT ------------ */}
          {isHomePage && (
            <RoundedButton
              variant='contained'
              color='primary'
              startIcon={<SettingsRoundedIcon />}
              sx={{
                marginTop: { xs: 2, md: 0 },
              }}
              onClick={() => navigate(routes.MY_PROFILE.path)}
            >
              Mi perfil
            </RoundedButton>
          )}
        </Stack>
      </Container>
    </Paper>
  );
};

export default Header;
