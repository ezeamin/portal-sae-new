import { useRef, useState } from 'react';
import { Alert, Stack, TextField } from '@mui/material';

import { validateEmail } from '../../../../../helpers/validators';

import es from '../../../../../lang/es';

import { RoundedButton } from '../../../../../styled';

const RestorePasswordForm = () => {
  const [emailError, setEmailError] = useState({
    error: false,
    msg: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const mailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);
    const email = mailRef.current.value;

    if (validateEmail(email)) {
      // mandar mail

      setIsSent(true);
      setEmailError({
        error: false,
        msg: '',
      });
    } else {
      setEmailError({
        error: true,
        msg: es.NOT_VALID_EMAIL,
      });
    }

    setIsSending(false);
  };

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
        sx={{ marginTop: '1.5rem', animationDelay: "300ms" }}
        error={emailError.error}
        helperText={emailError.msg}
        className="animate-in-right-short"
      />
      <Stack justifyContent={'center'}>
        <RoundedButton
          variant='contained'
          type='submit'
          loading={isSending}
          disabled={isSent}
          sx={{ marginTop: '1rem', animationDelay: "500ms" }}
          className="animate-in-bottom"
        >
          {es.SEND_LINK}
        </RoundedButton>
      </Stack>
    </form>
  );
};

export default RestorePasswordForm;
