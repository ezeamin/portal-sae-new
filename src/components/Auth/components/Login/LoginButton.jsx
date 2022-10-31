import { Tooltip } from '@mui/material';

import { RoundedButton } from '../../../../styled';

const LoginButton = (props) => {
  const { isMobile, href, icon, to, title } = props;

  const isExternal = href ? true : false;

  // MOBILE
  if (isMobile) {
    if (isExternal) {
      return (
        <RoundedButton
          href={href}
          target='_blank'
          variant='outlined'
          startIcon={icon}
          sx={{ width: '100%' }}
        >
          {title}
        </RoundedButton>
      );
    }

    return (
      <RoundedButton
        to={to}
        variant='outlined'
        startIcon={icon}
        sx={{ width: '100%' }}
      >
        {title}
      </RoundedButton>
    );
  }

  // WEB
  if (isExternal) {
    return (
      <Tooltip title={title}>
        <RoundedButton
          href={href}
          target='_blank'
          variant='outlined'
          size='large'
          sx={{ width: '100%' }}
        >
          {icon}
        </RoundedButton>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={title}>
      <RoundedButton
        to={to}
        size='large'
        variant='outlined'
        sx={{ width: '100%' }}
      >
        {icon}
      </RoundedButton>
    </Tooltip>
  );
};

export default LoginButton;
