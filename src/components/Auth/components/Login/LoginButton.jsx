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
        >
          {title}
        </RoundedButton>
      );
    }

    return (
      <RoundedButton to={to} variant='outlined' startIcon={icon}>
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
        >
          {icon}
        </RoundedButton>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={title}>
      <RoundedButton to={to} size='large' variant='outlined'>
        {icon}
      </RoundedButton>
    </Tooltip>
  );
};

export default LoginButton;
