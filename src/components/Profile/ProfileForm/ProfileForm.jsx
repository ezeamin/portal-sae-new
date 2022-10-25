import { useForm } from 'react-hook-form';

import { Paper, TextField, Stack, Typography, Divider } from '@mui/material';

import { CustomContainer } from '../../';

const ProfileForm = () => {
  const { register, handleSubmit: submitRHF } = useForm();

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <CustomContainer>
      <Paper sx={{ p: 3 }}>
        <Typography variant='h4' component='h3'>
          Editar datos
        </Typography>
        <Divider sx={{my: 2}} /> 
        <form onSubmit={submitRHF(handleSubmit)}>
          <Stack direction='row' justifyContent='space-between'>
            <TextField
              type='text'
              label='Apellido'
              variant='outlined'
              {...register('lastname')}
            />
            <TextField
              type='text'
              label='Nombre'
              variant='outlined'
              {...register('name')}
            />
            <TextField
              type='email'
              label='Correo'
              variant='outlined'
              {...register('email')}
            />
          </Stack>
        </form>
      </Paper>
    </CustomContainer>
  );
};

export default ProfileForm;
