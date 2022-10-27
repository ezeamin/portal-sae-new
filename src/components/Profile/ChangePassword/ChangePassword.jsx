import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Divider, Typography, Stack, TextField, Box } from '@mui/material';

import { CustomContainer, CustomPaper } from '../..';
import { RoundedButton } from '../../../styled';

import BackButton from '../../Commons/BackButton/BackButton';
import AlertPassword from './AlertPassword';
import { CustomAlert } from '../..';

import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import { validatePassword } from '../../../helpers/validators';

const alertDefault = {
  show: false,
  msg: '',
  severity: 'success',
};

const ChangePassword = () => {
  const {
    register,
    handleSubmit: submitRHF,
    formState: { errors },
  } = useForm();

  const [alert, setAlert] = useState(alertDefault);
  const [hasBeenSent, setHasBeenSent] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleSubmit = (data) => {
    if (hasBeenSent) return;

    if (data.newPass !== data.repeatNewPass) {
      setAlert({
        show: true,
        msg: 'Las contraseñas no coinciden',
        severity: 'warning',
      });
      return;
    }

    if (!validatePassword(data.newPass)) {
      setAlert({
        show: true,
        msg: 'La contraseña no cumple con el patron',
        severity: 'warning',
      });
      return;
    }

    setAlert({
      show: true,
      msg: 'Datos modificados correctamente',
      severity: 'success',
    });
    setHasBeenSent(true);
  };

  //   Para correccion de flecha de contraseña
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        <form onSubmit={submitRHF(handleSubmit)}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            justifyContent='space-between'
            alignItems='center'
          >
            <TextField
              type='password'
              label='Contraseña actual'
              variant='outlined'
              error={!!errors.currentPass}
              autoFocus
              sx={{
                flexBasis: '100%',
                width: '100%',
              }}
              {...register('currentPass', { required: true, minLength: 2 })}
            />
            {screenWidth >= 900 ? (
              <NavigateNextRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )}
            <TextField
              type='password'
              label='Nueva contraseña'
              variant='outlined'
              error={!!errors.newPass}
              sx={{
                flexBasis: '100%',
                width: '100%',
              }}
              {...register('newPass', {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
            />
            <TextField
              type='password'
              label='Repetir contraseña'
              variant='outlined'
              error={!!errors.repeatNewPass}
              sx={{
                flexBasis: '100%',
                width: '100%',
              }}
              {...register('repeatNewPass', {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
            />
          </Stack>
          <Box sx={{ textAlign: 'right', mt: 3 }}>
            <RoundedButton
              disabled={hasBeenSent}
              type='submit'
              variant='contained'
            >
              Guardar
            </RoundedButton>
          </Box>
        </form>
      </CustomPaper>
    </CustomContainer>
  );
};

export default ChangePassword;
