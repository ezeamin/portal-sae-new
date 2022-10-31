import { useState } from 'react';

import {
  Divider,
  Typography,
} from '@mui/material';

import { CustomContainer, CustomPaper } from '../..';
import { CustomAlert } from '../..';

import BackButton from '../../Commons/BackButton/BackButton';
import AlertPassword from './AlertPassword';
import FormPassword from './FormPassword';

const alertDefault = {
  show: false,
  msg: '',
  severity: 'success',
};

const ChangePassword = () => {
  const [alert, setAlert] = useState(alertDefault);

  return (
    <CustomContainer>
      <CustomPaper>
        <BackButton sx={{ mb: 3 }} />
        <Typography variant='h4' component='h3'>
          Cambiar contraseña
        </Typography>
        <Divider sx={{ my: 2 }} />
        {alert.show && (
          <CustomAlert severity={alert.severity}>{alert.msg}</CustomAlert>
        )}
        <AlertPassword />
        <FormPassword setAlert={setAlert}/>
      </CustomPaper>
    </CustomContainer>
  );
};

export default ChangePassword;
