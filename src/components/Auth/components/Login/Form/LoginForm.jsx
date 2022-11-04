import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  const [showPass, setShowPass] = useState(false);

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
      // datos válidos, llamar al back
      navigate(mainRoutes.MAIN.path);
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

  return (
    <form onSubmit={onSubmit}>
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
        sx={{ marginTop: '1.5rem' }}
        type='number'
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
        sx={{ marginTop: '1rem' }}
        type={showPass ? 'text' : 'password'}
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
        <FormControlLabel control={<Checkbox />} label={es.REMEMBER_ME} />
        <MUILink component={Link} to={authRoutes.RESTORE_PASSWORD.path}>
          {es.FORGOT}
        </MUILink>
      </Stack>
      <RoundedButton
        color='primary'
        variant='contained'
        type='submit'
        sx={{ width: '100%' }}
      >
        {es.ENTER}
      </RoundedButton>
    </form>
  );
};

export default LoginForm;
