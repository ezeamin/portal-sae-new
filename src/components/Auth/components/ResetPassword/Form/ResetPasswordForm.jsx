import { memo, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { InputAdornment, Stack, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { setTempPass } from '../../../../../features/globalData';
import {
  usePutTermsAndConditionsMutation,
  usePutUpdatePasswordMutation,
} from '../../../../../features/api/userSlice';

import { mainRoutes } from '../../../../../constants/Routing/routes';
import { RoundedButton } from '../../../../../styled';
import { updatePasswordAdapter } from '../../../../../adapters/profileAdapter';
import { validateFields } from '../helpers/validators';

import es from '../../../../../lang/es';

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

  const confirmPasswordRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tempPass = useSelector((state) => state.globalData.tempPass);

  const [putTyC, responseTyC] = usePutTermsAndConditionsMutation();
  const [putPassword, responsePass] = usePutUpdatePasswordMutation();

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
      // cambiar contraseña

      // resetear errores
      setErrors(errorsInitialState);

      const data = {
        currentPass: tempPass,
        newPass: password,
      };

      const dataToSend = updatePasswordAdapter(data);

      // Mandar al BE
      putTyC();

      putPassword(dataToSend);
    }
  };

  useEffect(() => {
    if (responsePass.isSuccess) {
      setLoading(false);
      dispatch(setTempPass(null));
      setAlert({
        show: false,
        msg: '',
        severity: '',
      });
      navigate(mainRoutes.MAIN.path);
    }

    if (responsePass.isError || responseTyC.isError) {
      setLoading(false);
      setAlert({
        show: true,
        msg:
          responsePass.error.data?.message || 'Ocurrio un error, por favor reintente',
        severity: 'error',
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [responsePass, responseTyC, navigate, dispatch, setAlert]);

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
          sx={{ marginTop: '1.5rem' }}
        >
          {es.RESTORE_PASSWORD}
        </RoundedButton>
      </Stack>
    </form>
  );
});

export default ResetPasswordForm;
