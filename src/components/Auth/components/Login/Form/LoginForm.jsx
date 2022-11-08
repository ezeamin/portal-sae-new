import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { usePostLoginMutation } from '../../../../../features/api/authApiSlice';
import { setAccessToken, setRefreshToken } from '../../../../../features/auth';

import {
  Checkbox,
  FormControlLabel,
  TextField,
  Link as MUILink,
  InputAdornment,
  Alert,
  Stack,
} from '@mui/material';

import { Lock, Person, Visibility, VisibilityOff } from '@mui/icons-material';

import {
  authRoutes,
  mainRoutes,
} from '../../../../../constants/Routing/routes';

import es from '../../../../../lang/es';

import { RoundedButton } from '../../../../../styled';

const LoginForm = () => {
  const [errorCuil, setErrorCuil] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [backendError, setBackendError] = useState({ show: false, msg: '' });
  const [showPass, setShowPass] = useState(false);

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
      postLogin({ username: cuil, password });
    } else {
      /*
      ! 8. Ingreso Fallido:
      !   a. Si el usuario o la contraseña es incorrecta no debe permitir el ingreso al portal y presentar el mensaje: “Estas credenciales no coinciden con nuestros registros.” 
      !   b. Al tercer intento fallido redireccionar al formulario para solicitar blanqueo de clave.
    
      manejar con un estado la cantidad de intentos
      consultar si en el back hay un atributo indicando que esta bloqueado
    */
    }
  };

  useEffect(() => {
    if (result.isSuccess) {
      setBackendError({
        show: false,
        msg: '',
      });

      dispatch(setAccessToken(result.data.accessToken));
      dispatch(setRefreshToken(result.data.refreshToken));

      // const info = jwt.decode(result.data.accessToken);
      // console.log(info)

      navigate(mainRoutes.MAIN.path);
    }

    if (result.isError) {
      setBackendError({
        show: true,
        msg:
          result?.error?.data?.message || 'Ocurrio un error. Revise los campos',
      });
    }
  }, [result, navigate, dispatch]);

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

      <Stack
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        justifyContent='space-between'
        direction={{ xs: 'column', sm: 'row' }}
        style={{
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <FormControlLabel
          control={<Checkbox />}
          label={es.REMEMBER_ME}
          className='animate-in-right-short'
          sx={{ animationDelay: '400ms' }}
        />
        <MUILink
          component={Link}
          to={authRoutes.RESTORE_PASSWORD.path}
          className='animate-in-right-short'
          sx={{ animationDelay: '450ms' }}
        >
          {es.FORGOT}
        </MUILink>
      </Stack>

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
};

export default LoginForm;
