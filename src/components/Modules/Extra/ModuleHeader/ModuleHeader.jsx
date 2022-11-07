import { IconButton, Stack, Typography } from '@mui/material';
import { InfoRounded } from '@mui/icons-material';

import ActionButton from '../ActionButton/ActionButton';

const ModuleHeader = (props) => {
  const { title, subtitle, buttons, handleModal } = props;

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent='space-between'
      sx={{ mb: 4 }}
    >
      <div>
        <Stack
          direction='row'
          alignItems='center'
          sx={{ mt: 2, animationDelay: '50ms' }}
          className='animate-in-right'
        >
          <Typography
            variant='h4'
            fontWeight='bold'
            sx={{ color: 'white.contrastText' }}
          >
            {title}
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={() => handleModal(true)}>
            <InfoRounded sx={{ color: '#a0a0a0' }} />
          </IconButton>
        </Stack>
        <Typography
          variant='body1'
          sx={{ animationDelay: '100ms' }}
          className='animate-in-right'
        >
          {subtitle}
        </Typography>
      </div>
      <Stack direction='row' alignItems='center' sx={{ mt: { xs: 2 } }}>
        {buttons.map((button, index) => (
          <ActionButton
            key={button?.name}
            delay={`${index * 100 + 300}ms`}
            {...button}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default ModuleHeader;
