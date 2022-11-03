import { Avatar, Stack, Tooltip, Typography } from '@mui/material';

const ProfileInfo = (props) => {
  const { user, navigateProfile, isPortrait } = props;

  const config = {
    direction: isPortrait ? 'row-reverse' : 'row',
    justifyContent: isPortrait ? 'space-between' : 'flex-start',
  };

  return (
    <Stack {...config}>
      <Stack sx={{ mr: !isPortrait && 2, textAlign: 'right' }}>
        <Typography
          variant='body1'
          component='p'
          color='light.contrastText'
          fontWeight='bold'
          sx={{
            lineHeight: 1.5,
          }}
        >
          {`${user.name} ${user.lastname}`}
        </Typography>
        <Typography
          variant='body2'
          component='p'
          color='light.secondaryContrastText'
          sx={{
            lineHeight: 1,
          }}
        >
          {user.number}
        </Typography>
      </Stack>
      <Tooltip title='Mi perfil'>
        <button onClick={navigateProfile}>
          <Avatar alt={user.name} src={user?.avatar || '/'} />
        </button>
      </Tooltip>
    </Stack>
  );
};

export default ProfileInfo;
