import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { RoundedButton } from '../../../styled';

import {
  NavigateNextRounded,
  KeyboardArrowDownRounded,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';

import { validatePassword } from '../../../helpers/validators';
import { Box, InputAdornment, Stack, TextField } from '@mui/material';

import es from '../../../lang/es';

import { usePutUpdatePasswordMutation } from '../../../features/api/userSlice';
import { updatePasswordAdapter } from '../../../adapters/profileAdapter';

const defaultStateShowPass = {
  currentPass: false,
  newPass: false,
  confirmPass: false,
};

const FormPassword = (props) => {
  const { setAlert } = props;

  const {
    register,
    handleSubmit: submitRHF,
    formState: { errors },
  } = useForm();

  const [updatePassword, response] = usePutUpdatePasswordMutation();

  const [hasBeenSent, setHasBeenSent] = useState(false);
  const [showPass, setShowPass] = useState(defaultStateShowPass);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleSubmit = (data) => {
    if (hasBeenSent) return;

    if (data.newPass !== data.repeatNewPass) {
      setAlert({
        show: true,
        msg: 'Las contraseñas no coinciden',
        severity: 'warning',
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (!validatePassword(data.newPass)) {
      setAlert({
        show: true,
        msg: 'La contraseña no cumple con el patron',
        severity: 'warning',
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const dataToSend = updatePasswordAdapter(data);

    updatePassword(dataToSend)
  };

  useEffect(() => {
    if (response.isError) {
      setAlert({
        show: true,
        msg: response.isError?.message || 'Error al modificar la contraseña',
        severity: 'error',
      });
    } else if (response.isSuccess) {
      setAlert({
        show: true,
        msg: 'Contraseña modificada correctamente',
        severity: 'success',
      });

      setHasBeenSent(true);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [response, setAlert]);

  //   Para correccion de flecha de contraseña (visual)
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <form onSubmit={submitRHF(handleSubmit)}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        justifyContent='space-between'
        alignItems='center'
      >
        <TextField
          type={showPass.currentPass ? 'text' : 'password'}
          label='Contraseña actual'
          variant='outlined'
          disabled={hasBeenSent}
          error={!!errors.currentPass}
          sx={{
            flexBasis: '100%',
            width: '100%',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                onClick={() => {
                  setShowPass((state) => ({
                    ...state,
                    currentPass: !state.currentPass,
                  }));
                }}
                sx={{ cursor: 'pointer' }}
                position='end'
              >
                {showPass.currentPass ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
          {...register('currentPass', { required: true, minLength: 2 })}
        />

        {screenWidth >= 900 ? (
          <NavigateNextRounded />
        ) : (
          <KeyboardArrowDownRounded />
        )}

        <TextField
          type={showPass.newPass ? 'text' : 'password'}
          label='Nueva contraseña'
          variant='outlined'
          error={!!errors.newPass}
          disabled={hasBeenSent}
          sx={{
            flexBasis: '100%',
            width: '100%',
          }}
          {...register('newPass', {
            required: true,
            minLength: 8,
            maxLength: 20,
          })}
          InputProps={{
            endAdornment: (
              <InputAdornment
                onClick={() => {
                  setShowPass((state) => ({
                    ...state,
                    newPass: !state.newPass,
                  }));
                }}
                sx={{ cursor: 'pointer' }}
                position='end'
              >
                {showPass.newPass ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
        />

        <TextField
          type={showPass.repeatPass ? 'text' : 'password'}
          label='Repetir contraseña'
          variant='outlined'
          error={!!errors.repeatNewPass}
          disabled={hasBeenSent}
          sx={{
            flexBasis: '100%',
            width: '100%',
          }}
          {...register('repeatNewPass', {
            required: true,
            minLength: 8,
            maxLength: 20,
          })}
          InputProps={{
            endAdornment: (
              <InputAdornment
                onClick={() => {
                  setShowPass((state) => ({
                    ...state,
                    repeatPass: !state.repeatPass,
                  }));
                }}
                sx={{ cursor: 'pointer' }}
                position='end'
              >
                {showPass.repeatPass ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Box sx={{ textAlign: 'right', mt: 3 }}>
        <RoundedButton disabled={hasBeenSent} type='submit' variant='contained'>
          {es.SAVE}
        </RoundedButton>
      </Box>
    </form>
  );
};

export default FormPassword;
