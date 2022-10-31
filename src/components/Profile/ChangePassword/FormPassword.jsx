import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { RoundedButton } from '../../../styled';

import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { validatePassword } from '../../../helpers/validators';
import { Box, InputAdornment, Stack, TextField } from '@mui/material';

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
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }

    if (!validatePassword(data.newPass)) {
      setAlert({
        show: true,
        msg: 'La contraseña no cumple con el patron',
        severity: 'warning',
      });
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }

    setAlert({
      show: true,
      msg: 'Datos modificados correctamente',
      severity: 'success',
    });
    window.scrollTo({top: 0, behavior: 'smooth'});
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
          <NavigateNextRoundedIcon />
        ) : (
          <KeyboardArrowDownRoundedIcon />
        )}
        <TextField
          type={showPass.newPass ? 'text' : 'password'}
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
          Guardar
        </RoundedButton>
      </Box>
    </form>
  );
};

export default FormPassword;
