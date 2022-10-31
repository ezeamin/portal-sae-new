import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import {
  TextField,
  Stack,
  Typography,
  Divider,
  Box,
  Alert,
} from '@mui/material';

import BackButton from '../../Commons/BackButton/BackButton';
import { CustomContainer, CustomPaper } from '../../';
import { RoundedButton } from '../../../styled';

import { emailRegex } from '../../../helpers/validators';

const ProfileForm = () => {
  const {
    register,
    handleSubmit: submitRHF,
    formState: { errors },
  } = useForm();

  const [alert, setAlert] = useState({ show: false, msg: '' });
  const [hasBeenSent, setHasBeenSent] = useState(false);

  const handleSubmit = (data) => {
    console.log(data);
    setAlert({
      show: true,
      msg: 'Datos modificados correctamente',
      severity: "success"
    });
    setHasBeenSent(true);
  };

  const user = useSelector((state) => state.globalData.user);

  return (
    <CustomContainer>
      <CustomPaper>
        <BackButton sx={{ mb: 3 }} />
        <Typography variant='h4' component='h3'>
          Editar datos
        </Typography>
        <Divider sx={{ my: 2 }} />
        {alert.show && (
          <Alert sx={{ mb: 3 }} severity={alert.severity}>
            {alert.msg}
          </Alert>
        )}
        <form onSubmit={submitRHF(handleSubmit)}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            justifyContent='space-between'
          >
            <TextField
              type='text'
              label='Apellido'
              variant='outlined'
              helperText={user.lastname}
              error={Boolean(errors.lastname)}
              sx={{
                flexBasis: '80%',
              }}
              {...register('lastname', { required: true, minLength: 2 })}
            />
            <TextField
              type='text'
              label='Nombre'
              variant='outlined'
              helperText={user.name}
              error={Boolean(errors.name)}
              sx={{
                flexBasis: '80%',
              }}
              {...register('name', { required: true, minLength: 2 })}
            />
            <TextField
              type='email'
              label='Correo'
              variant='outlined'
              helperText={user.email}
              error={Boolean(errors.email)}
              sx={{
                flexBasis: '100%',
              }}
              {...register('email', { required: true, pattern: emailRegex })}
            />
          </Stack>
          <Box sx={{ textAlign: 'right', mt: 3 }}>
            <RoundedButton disabled={hasBeenSent} type='submit' variant='contained'>
              Guardar
            </RoundedButton>
          </Box>
        </form>
      </CustomPaper>
    </CustomContainer>
  );
};

export default ProfileForm;
