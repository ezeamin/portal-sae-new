import { useEffect, useState } from 'react';

import AlertPassword from '../../../Profile/ChangePassword/AlertPassword';
import CustomAlert from '../../../Custom/CustomAlert/CustomAlert';
import ResetPasswordForm from './Form/ResetPasswordForm';

import es from '../../../../lang/es';

import { FormSection, H2AuthPanel } from '../../styled';
import { logoutAction } from '../../../../actions/logout';
import { RoundedButton } from '../../../../styled';

const alertDefault = {
  show: false,
  msg: '',
  severity: 'success',
};

const ResetPassword = () => {
  const [alert, setAlert] = useState(alertDefault);

  useEffect(() => {
    document.title = `${es.RESET_PASSWORD} | ${es.PORTAL}`;
  }, []);

  const redirectHome = () => {
    logoutAction();
  };

  return (
    <FormSection>
      <H2AuthPanel>{es.RESTORE_PASSWORD}</H2AuthPanel>

      {alert.show && (
        <CustomAlert severity={alert.severity}>{alert.msg}</CustomAlert>
      )}

      {/* Main instructions */}
      <AlertPassword />

      <ResetPasswordForm setAlert={setAlert} />

      <RoundedButton
        onClick={redirectHome}
        sx={{ marginTop: '1rem', width: '100%' }}
        variant='text'
      >
        {es.BACK_HOME}
      </RoundedButton>
    </FormSection>
  );
};

export default ResetPassword;
