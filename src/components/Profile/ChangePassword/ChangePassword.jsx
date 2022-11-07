import { useState } from 'react';

import { Divider, Typography } from '@mui/material';

import { CustomContainer, CustomPaper } from '../..';
import { CustomAlert } from '../..';

import AlertPassword from './AlertPassword';
import FormPassword from './FormPassword';

import BackButton from '../../Commons/BackButton/BackButton';

import es from '../../../lang/es';

const alertDefault = {
  show: false,
  msg: '',
  severity: 'success',
};

const ChangePassword = () => {
  const [alert, setAlert] = useState(alertDefault);

  return (
    <CustomContainer sx={{mb: 10}}>
      <CustomPaper>
        <BackButton sx={{ mb: 3 }} />
        
        <Typography variant='h4' component='h3'>
          { es.CHANGE_PASSWORD }
        </Typography>

        <Divider sx={{ my: 2 }} />

        {alert.show && (
          <CustomAlert severity={alert.severity}>{alert.msg}</CustomAlert>
        )}

        <AlertPassword />

        <FormPassword setAlert={setAlert} />
      </CustomPaper>
    </CustomContainer>
  );
};

export default ChangePassword;
