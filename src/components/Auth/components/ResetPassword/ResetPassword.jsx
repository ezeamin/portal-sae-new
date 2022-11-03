import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Alert, Stack } from '@mui/material';

import ResetPasswordForm from './Form/ResetPasswordForm';

import { authRoutes } from '../../../../constants/Routing/routes';

import es from '../../../../lang/es';

import { FormSection, H2AuthPanel } from '../../styled';
import { RoundedButton } from '../../../../styled';

const ResetPassword = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${es.RESET_PASSWORD} | ${es.PORTAL}`;
  }, []);

  const redirectHome = () => {
    navigate(authRoutes.LOGIN.path);
  };

  return (
    <FormSection>
        <H2AuthPanel>{es.RESTORE_PASSWORD}</H2AuthPanel>
        <Alert severity='info'>{es.RESET_PASSWORD_MSG}</Alert>
      <ResetPasswordForm />
      <Stack justifyContent={'center'}>
        <RoundedButton
          onClick={redirectHome}
          sx={{ marginTop: '1rem' }}
          variant='text'
        >
          {es.BACK_HOME}
        </RoundedButton>
      </Stack>
    </FormSection>
  );
};

export default ResetPassword;
