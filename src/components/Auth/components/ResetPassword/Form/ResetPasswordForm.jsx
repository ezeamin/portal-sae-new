import { useRef, useState } from 'react';

import { InputAdornment, Stack, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import {
  validateEmail,
  validatePassword,
  validatePasswordNumMinMax,
} from '../../../../../helpers/validators';

import es from '../../../../../lang/es';
import validations from '../../../../../lang/validationsMsg';

import { RoundedButton } from '../../../../../styled';

const errorsInitialState = {
  email: {
    error: false,
    msg: '',
  },
  password: {
    error: false,
    msg: '',
  },
  confirmPassword: {
    error: false,
    msg: '',
  },
};

const ResetPasswordForm = () => {
  const [errors, setErrors] = useState(errorsInitialState);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const confirmPasswordRef = useRef();
  const mailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const email = mailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (!validateEmail(email)) {
      setErrors({
        email: {
          error: true,
          msg: es.NOT_VALID_EMAIL,
        },
        password: errorsInitialState.password,
        confirmPassword: errorsInitialState.confirmPassword,
      });
      setLoading(false);
      return;
    }

    /* 
        valida que tenga al menos 1 letra mayúscula, 1 letra
        minuscula y 1 numero.
      */
    if (!validatePasswordNumMinMax(password)) {
      setErrors({
        email: errorsInitialState.email,
        password: {
          error: true,
          msg: validations.PASS_VALIDATION_COMPLETE,
        },
        confirmPassword: errorsInitialState.confirmPassword,
      });
      setLoading(false);
      return;
    }

    /* 
      valida que las contraseñas tengan una cantidad minima
      de 8 caracteres y maxima de 20 caracteres
    */
    if (!validatePassword(password)) {
      setErrors({
        email: errorsInitialState.email,
        password: {
          error: true,
          msg: validations.PASSWORD_LENGTH,
        },
        confirmPassword: errorsInitialState.confirmPassword,
      });
      setLoading(false);
      return;
    }
    if (!validatePassword(confirmPassword)) {
      setErrors({
        email: errorsInitialState.email,
        password: errorsInitialState.password,
        confirmPassword: {
          error: true,
          msg: validations.PASSWORD_LENGTH,
        },
      });
      setLoading(false);
      return;
    }

    // TODO: cambiar esta validacion - se la hace contra el back
    /* 
      valida que la contraseña nueva sea diferente a la
      contraseña actual.
    */
    // if (password.toLowerCase() !== confirmPassword.toLowerCase()) {
    //   setErrors({
    //     email: errorsInitialState.email,
    //     password: {
    //       error: true,
    //       msg: validations.NEW_PASS_DIFFERENT_FROM_THE_OLD_ONE,
    //     },
    //     confirmPassword: errorsInitialState.confirmPassword,
    //   });
    //   setLoading(false);
    //   return;
    // }

    /* valida que la contraseña nueva y la validacion 
      sean iguales.
      */
    if (password.toLowerCase() !== confirmPassword.toLowerCase()) {
      setErrors({
        email: errorsInitialState.email,
        password: {
          error: true,
        },
        confirmPassword: {
          error: true,
          msg: validations.NEW_PASS_EQUAL_TO_CONFIRM_PASS,
        },
      });
      setLoading(false);
      return;
    }

    // cambiar contraseña
    console.log('BLANQUEO PASS OK');

    setErrors(errorsInitialState);
    setLoading(false);

    // redirect to login
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='E-mail'
        placeholder='Ingrese su E-mail'
        fullWidth
        type='email'
        inputRef={mailRef}
        inputProps={{ maxLength: 50, required: true }}
        sx={{ marginTop: '1.5rem' }}
        error={errors.email.error}
        helperText={errors.email.msg}
      />
      <TextField
        label={es.PASS}
        placeholder={es.NEW_PASS}
        fullWidth
        type={showPass ? 'text' : 'password'}
        inputRef={passwordRef}
        inputProps={{ minLength: 8, maxLength: 20, required: true }}
        sx={{ marginTop: '1rem' }}
        error={errors.password.error}
        helperText={errors.password.msg}
        InputProps={{
          endAdornment: (
            <InputAdornment
              onClick={() => {
                setShowPass(!showPass);
              }}
              sx={{ cursor: 'pointer' }}
              position='end'
            >
              {showPass ? <VisibilityOff /> : <Visibility />}
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label={es.REPEAT_PASSWORD}
        placeholder={es.CONFIRM_PASSWORD}
        fullWidth
        type={showPass ? 'text' : 'password'}
        inputRef={confirmPasswordRef}
        inputProps={{ minLength: 8, maxLength: 20, required: true }}
        sx={{ marginTop: '1rem' }}
        error={errors.confirmPassword.error}
        helperText={errors.confirmPassword.msg}
        InputProps={{
          endAdornment: (
            <InputAdornment
              onClick={() => {
                setShowPass(!showPass);
              }}
              sx={{ cursor: 'pointer' }}
              position='end'
            >
              {showPass ? <VisibilityOff /> : <Visibility />}
            </InputAdornment>
          ),
        }}
      />
      <Stack justifyContent={'center'}>
        <RoundedButton
          variant='contained'
          type='submit'
          loading={loading}
          sx={{ marginTop: '1.5rem' }}
        >
          {es.RESTORE_PASSWORD}
        </RoundedButton>
      </Stack>
    </form>
  );
};

export default ResetPasswordForm;
