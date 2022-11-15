import { useRef, useState } from 'react';

import { InputAdornment, Stack, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { usePutTermsAndConditionsMutation } from '../../../../../features/api/userSlice';

import es from '../../../../../lang/es';

import { RoundedButton } from '../../../../../styled';
import { validateFields } from '../helpers/validators';

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

  const [putTyC, response] = usePutTermsAndConditionsMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const email = mailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (
      validateFields(
        email,
        password,
        confirmPassword,
        setErrors,
        setLoading,
        errorsInitialState
      )
    ) {
      // cambiar contraseña
      console.log('BLANQUEO PASS OK');

      setErrors(errorsInitialState);
      setLoading(false);

      // Mandar al BE
      putTyC();
      // TODO: Enviar contraseña al BE

      // redirect to home
    }
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
