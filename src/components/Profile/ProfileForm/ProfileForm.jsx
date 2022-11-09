import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  responseUpdateUserAdapter,
  updateUserAdapter,
} from '../../../adapters/profileAdapter';
import { usePutUpdateUserMutation } from '../../../features/api/userSlice';

import { TextField, Stack, Typography, Divider, Box } from '@mui/material';

import BackButton from '../../Commons/BackButton/BackButton';

import { CustomContainer, CustomPaper, CustomAlert } from '../../';
import { RoundedButton } from '../../../styled';
import customSwal from '../../../helpers/customSwal';

import { emailRegex } from '../../../helpers/validators';

import { profileRoutes } from '../../../constants/Routing/routes';

import es from '../../../lang/es';
import { setUser } from '../../../features/globalData';

const ProfileForm = () => {
  const {
    register,
    handleSubmit: submitRHF,
    formState: { errors },
  } = useForm();

  // Mutation
  const [putUpdateUser, response] = usePutUpdateUserMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [alert, setAlert] = useState({ show: false, msg: '' });
  const [hasBeenSent, setHasBeenSent] = useState(false);

  const handleSubmit = (data) => {
    // Las validaciones las hace la librería antes de llamar al submit
    const dataToSend = updateUserAdapter(data);

    putUpdateUser(dataToSend);
  };

  useEffect(() => {
    if (response.isError) {
      setAlert({
        show: true,
        msg: 'Error al modificar los datos',
        severity: 'error',
      });
    } else if (response.isSuccess) {
      const user = responseUpdateUserAdapter(response.data.data);
      dispatch(setUser(user));

      setAlert({
        show: true,
        msg: 'Datos modificados correctamente',
        severity: 'success',
      });

      setHasBeenSent(true);
    }
  }, [response, navigate, dispatch]);

  const user = useSelector((state) => state.globalData.user);

  return (
    <CustomContainer>
      <CustomPaper>
        <BackButton sx={{ mb: 3 }} />
        <Typography variant='h4' component='h3'>
          {es.CHANGE_DATA}
        </Typography>
        <Divider sx={{ my: 2 }} />

        {alert.show && (
          <CustomAlert sx={{ mb: 3 }} severity={alert.severity}>
            {alert.msg}
          </CustomAlert>
        )}

        {/* submitRHF es el middleware de react hook form */}
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
              disabled={hasBeenSent}
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
              disabled={hasBeenSent}
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
              disabled={hasBeenSent}
              sx={{
                flexBasis: '100%',
              }}
              {...register('email', { required: true, pattern: emailRegex })}
            />
          </Stack>

          <Box sx={{ textAlign: 'right', mt: 3 }}>
            <RoundedButton
              disabled={hasBeenSent}
              type='submit'
              variant='contained'
            >
              {es.SAVE}
            </RoundedButton>
          </Box>
        </form>
      </CustomPaper>
    </CustomContainer>
  );
};

export default ProfileForm;
