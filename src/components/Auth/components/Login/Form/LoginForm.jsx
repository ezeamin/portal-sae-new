import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { usePostLoginMutation } from '../../../../../features/api/authApiSlice';
import { setUser } from '../../../../../features/globalData';
import { setAccessToken } from '../../../../../features/auth';

import { userAdapter } from '../../../../../adapters/authAdapter';

import {
  TextField,
  Link as MUILink,
  InputAdornment,
  Alert,
} from '@mui/material';

import { Lock, Person, Visibility, VisibilityOff } from '@mui/icons-material';

import {
  authRoutes,
  mainRoutes,
} from '../../../../../constants/Routing/routes';

import es from '../../../../../lang/es';

import { RoundedButton } from '../../../../../styled';
import { memo } from 'react';

const LoginForm = memo((props) => {
  const { handleNewUser } = props;

  const [errorCuil, setErrorCuil] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [backendError, setBackendError] = useState({ show: false, msg: '' });
  const [showPass, setShowPass] = useState(false);

  const [loginAttemps, setLoginAttemps] = useState(0);

  const [postLogin, result] = usePostLoginMutation();

  const dispatch = useDispatch();

  const cuilRef = useRef();
  const passRef = useRef();

  const navigate = useNavigate();

  const checkForErrors = (cuil, password) => {
    let isError = false;

    if (cuil.length < 3 || cuil.length > 20) {
      setErrorCuil(true);
      isError = true;
    } else setErrorCuil(false);

    // password validation?
    if (password.trim().length === 0) {
      setErrorPass(true);
      isError = true;
    } else setErrorPass(false);

    return isError;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const cuil = cuilRef.current.value;
    const password = passRef.current.value;

    if (!checkForErrors(cuil, password)) {
      setLoginAttemps((loginAttemps) => loginAttemps + 1);
      postLogin({ username: cuil, password });
    }
  };

  useEffect(() => {
    if (result.isSuccess) {
      setBackendError({
        show: false,
        msg: '',
      });

      const user = userAdapter(result.data.user);

      dispatch(setUser(user));
      dispatch(setAccessToken(result.data.accessToken));

      if (user.newUser) {
        // Mostrar TyC y cambiar contraseña
        handleNewUser();
      } 
      else navigate(mainRoutes.MAIN.path);
    }

    if (result.isError) {
      if (loginAttemps > 2) {
        navigate(authRoutes.RESTORE_PASSWORD.path);
      }

      setBackendError({
        show: true,
        msg:
          result?.error?.data?.message || 'Ocurrio un error. Revise los campos',
      });
    }
  }, [result, navigate, dispatch, loginAttemps, handleNewUser]);

  return (
    <form onSubmit={onSubmit}>
      {backendError.show && (
        <Alert severity='warning' sx={{ marginTop: '1rem' }}>
          {backendError.msg}
        </Alert>
      )}

      {errorCuil && (
        <Alert severity='warning' sx={{ marginTop: '1rem' }}>
          {cuilRef.current.value.length === 0
            ? es.EMPTY_CUIL_CUIT
            : es.NOT_VALID_CUIL_CUIT}
        </Alert>
      )}

      {errorPass && (
        <Alert
          severity='warning'
          sx={{ marginTop: errorCuil ? '0.5rem' : '1rem' }}
        >
          {passRef.current.value.length === 0
            ? es.EMPTY_PASSWORD
            : es.NOT_VALID_PASSWORD}
        </Alert>
      )}

      <TextField
        error={errorCuil}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Person />
            </InputAdornment>
          ),
        }}
        label={es.CUIL_CUIT}
        inputRef={cuilRef}
        placeholder={`Ingrese ${es.CUIL_CUIT} sin guiones`}
        sx={{ marginTop: '1.5rem', animationDelay: '200ms' }}
        type='number'
        className='animate-in-right-short'
      />

      <TextField
        error={errorPass}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Lock />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              onClick={() => {
                setShowPass(!showPass);
              }}
              position='end'
              sx={{ cursor: 'pointer' }}
            >
              {showPass ? <VisibilityOff /> : <Visibility />}
            </InputAdornment>
          ),
        }}
        label={es.PASS}
        inputRef={passRef}
        placeholder='Ingrese su contraseña'
        sx={{ marginTop: '1rem', animationDelay: '300ms' }}
        type={showPass ? 'text' : 'password'}
        className='animate-in-right-short'
      />

      <MUILink
        component={Link}
        to={authRoutes.RESTORE_PASSWORD.path}
        className='animate-in-right-short'
        sx={{
          animationDelay: '450ms',
          display: 'inline-block',
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        {es.FORGOT}
      </MUILink>

      <RoundedButton
        color='primary'
        variant='contained'
        type='submit'
        sx={{ width: '100%', animationDelay: '600ms' }}
        className='animate-in-bottom'
      >
        {es.ENTER}
      </RoundedButton>
    </form>
  );
});

export default LoginForm;
