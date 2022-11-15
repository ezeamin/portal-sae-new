import { useEffect } from 'react';

import { Stack } from '@mui/material';

import ResetPasswordForm from './Form/ResetPasswordForm';

import es from '../../../../lang/es';

import { FormSection, H2AuthPanel } from '../../styled';
import CustomAlert from '../../../Custom/CustomAlert/CustomAlert';
import { RoundedButton } from '../../../../styled';
import { logoutAction } from '../../../../actions/logout';

const ResetPassword = () => {
  useEffect(() => {
    document.title = `${es.RESET_PASSWORD} | ${es.PORTAL}`;
  }, []);

  const redirectHome = () => {
    logoutAction();
  };

  return (
    <FormSection>
      <H2AuthPanel>{es.RESTORE_PASSWORD}</H2AuthPanel>
      <CustomAlert severity='info'>{es.RESET_PASSWORD_MSG}</CustomAlert>
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
