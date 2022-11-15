import { useCallback, useEffect, useState } from 'react';

import { Divider, Link as MUILink, Stack } from '@mui/material';

import LoginForm from './Form/LoginForm';

import es from '../../../../lang/es';

import { FormSection, H2AuthPanel } from '../../styled';

import TermsAndConditionsModal from './TermsAndConditions/TermsAndConditionsModal';
import QuickAccessButtons from './QuickAccessButtons';

const REGISTER_URL =
  'https://www4.justucuman.gov.ar/tutoriales-normativas/formularios';

const Login = () => {
  const [showTyCModal, setShowTyCModal] = useState(false);

  useEffect(() => {
    document.title = 'Iniciar sesión | Portal del SAE';
  }, []);

  const handleNewUser = useCallback(() => {
    // mostrar tyc
    setShowTyCModal(true);
    // llamar al be para guardar el tyc
    // cambiar contraseña
  }, []);

  return (
    <>
      {/* // TODO: validar terminos y condiciones con la base de datos */}
      {showTyCModal && <TermsAndConditionsModal />}
      <FormSection>
        <H2AuthPanel className='animate-in-right-short'>{es.LOGIN}</H2AuthPanel>
        <Stack
          direction='row'
          className='animate-in-right-short'
          sx={{ animationDelay: '100ms' }}
        >
          <p
            style={{
              marginRight: '0.5rem',
            }}
          >
            {es.NO_ACCOUNT}
          </p>
          <MUILink href={REGISTER_URL} target='_blank'>
            {es.SIGNUP}
          </MUILink>
        </Stack>
        <LoginForm handleNewUser={handleNewUser} />
      </FormSection>
      <Divider sx={{ animationDelay: '650ms' }} className='animate-in-bottom' />
      <QuickAccessButtons />
    </>
  );
};

export default Login;
