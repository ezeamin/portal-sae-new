import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert, Stack } from '@mui/material';

import RestorePasswordForm from './Form/RestorePasswordForm';

import { authRoutes } from '../../../../constants/Routing/routes';

import es from '../../../../lang/es';

import { FormSection, H2AuthPanel } from '../../styled';
import { RoundedButton } from '../../../../styled';

const RestorePassword = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${es.RESTORE_PASSWORD} | ${es.PORTAL}`;
  }, []);

  const redirectHome = () => {
    navigate(authRoutes.LOGIN.path);
  };

  return (
    <FormSection>
      <H2AuthPanel>{es.RESTORE_PASSWORD}</H2AuthPanel>
      <Alert severity='info'>{es.RESTORE_PASSWORD_MSG}</Alert>
      <RestorePasswordForm />
      <Stack justifyContent={'center'}>
        <RoundedButton
          variant='text'
          sx={{ marginTop: '1rem' }}
          onClick={redirectHome}
        >
          {es.BACK_HOME}
        </RoundedButton>
      </Stack>
    </FormSection>
  );
};

export default RestorePassword;
