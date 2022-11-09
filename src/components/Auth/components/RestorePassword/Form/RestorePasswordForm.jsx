import { useEffect, useRef, useState } from 'react';
import { Alert, Stack, TextField } from '@mui/material';

import { validateEmail } from '../../../../../helpers/validators';

import es from '../../../../../lang/es';

import { RoundedButton } from '../../../../../styled';

import { usePostRestorePasswordMutation } from '../../../../../features/api/authApiSlice';

const RestorePasswordForm = () => {
  const [emailError, setEmailError] = useState({
    error: false,
    msg: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const [postRestorePassword, response] = usePostRestorePasswordMutation();

  const mailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);

    const email = mailRef.current.value;

    if (!validateEmail(email)) {
      setEmailError({
        error: true,
        msg: es.NOT_VALID_EMAIL,
      });
      setIsSending(false);
      return;
    }

    postRestorePassword({ email });
  };

  useEffect(() => {
    if (response.isError) {
      setIsSending(false);
      
      setEmailError({
        error: true,
        msg: response.error?.message || 'Ocurrio un error inesperado',
      });
    } else if (response.isSuccess) {
      setIsSending(false);

      setIsSent(true);
      setEmailError({
        error: false,
        msg: '',
      });
    }
  }, [response]);

  return (
    <form onSubmit={handleSubmit}>
      {isSent && <Alert sx={{ marginTop: '1rem' }}>Enlace enviado</Alert>}
      <TextField
        label={es.EMAIL}
        placeholder={es.ENTER_EMAIL}
        fullWidth
        type='email'
        inputRef={mailRef}
        inputProps={{ maxLength: 50, required: true }}
        sx={{ marginTop: '1.5rem', animationDelay: '300ms' }}
        error={emailError.error}
        helperText={emailError.msg}
        className='animate-in-right-short'
      />
      <Stack justifyContent={'center'}>
        <RoundedButton
          variant='contained'
          type='submit'
          loading={isSending}
          disabled={isSent}
          sx={{ marginTop: '1rem', animationDelay: '500ms' }}
          className='animate-in-bottom'
        >
          {es.SEND_LINK}
        </RoundedButton>
      </Stack>
    </form>
  );
};

export default RestorePasswordForm;
