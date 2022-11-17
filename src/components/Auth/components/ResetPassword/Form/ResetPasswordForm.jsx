import { memo, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { InputAdornment, Stack, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import {
  usePutResetPasswordMutation,
  usePutTermsAndConditionsMutation,
} from '../../../../../features/api/userSlice';

import { mainRoutes } from '../../../../../constants/Routing/routes';
import { RoundedButton } from '../../../../../styled';

import { validateFields } from '../helpers/validators';

import es from '../../../../../lang/es';
import { setAccessToken } from '../../../../../features/auth';
import { resetPasswordAdapter } from '../../../../../adapters/authAdapter';

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

const ResetPasswordForm = memo((props) => {
  const { setAlert } = props;

  const [errors, setErrors] = useState(errorsInitialState);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const confirmPasswordRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = window.location.href.split('token=')[1];

  const [putTyC, responseTyC] = usePutTermsAndConditionsMutation();
  const [putResetPassword, responseResetPass] = usePutResetPasswordMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (
      validateFields(
        password,
        confirmPassword,
        setErrors,
        setLoading,
        errorsInitialState
      )
    ) {
      //* cambiar contraseña *

      // resetear errores
      setErrors(errorsInitialState);

      const data = {
        password,
      };

      const dataToSend = resetPasswordAdapter(data);

      if (token) {
        //* modificar contraseña desde el mail

        dispatch(setAccessToken(token));
      } else putTyC();

      // Mandar al BE
      putResetPassword(dataToSend);
    }
  };

  useEffect(() => {
    //* Cambio de contraseña desde mail
    if (token && responseResetPass.isSuccess) {
      setLoading(false);
      setDisabled(true);
      dispatch(setAccessToken(''));
      setAlert({
        show: true,
        msg: 'Contraseña modificada correctamente',
        severity: 'success',
      });
      return;
    }

    //* Cambio de contraseña en primer logueo
    if (responseResetPass.isSuccess) {
      setLoading(false);
      setAlert({
        show: false,
        msg: '',
        severity: '',
      });
      navigate(mainRoutes.MAIN.path);
    }

    //* Error en cualquier caso
    if (responseTyC.isError || responseResetPass.isError) {
      setLoading(false);
      setAlert({
        show: true,
        msg:
          responseResetPass.error?.data?.message ||
          'Ocurrio un error, por favor reintente',
        severity: 'error',
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [responseResetPass, responseTyC, navigate, dispatch, setAlert, token]);

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '-1.5rem' }}>
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
          disabled={disabled}
          sx={{ marginTop: '1.5rem' }}
        >
          {es.RESTORE_PASSWORD}
        </RoundedButton>
      </Stack>
    </form>
  );
});

export default ResetPasswordForm;
