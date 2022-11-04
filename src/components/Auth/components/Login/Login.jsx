import { useEffect } from 'react';

import { Divider, Link as MUILink, Stack } from '@mui/material';

import LoginForm from './Form/LoginForm';

import es from '../../../../lang/es';

import { FormSection, H2AuthPanel } from '../../styled';

// import TermsAndConditionsModal from '../../../components/Login/TermsAndConditions/TermsAndConditionsModal';
import QuickAccessButtons from './QuickAccessButtons';

const REGISTER_URL =
  'https://www4.justucuman.gov.ar/tutoriales-normativas/formularios';

const Login = () => {
  useEffect(() => {
    document.title = 'Iniciar sesión | Portal del SAE';
  }, []);

  return (
    <>
      {/* // TODO: validar terminos y condiciones con la base de datos */}
      {/* <TermsAndConditionsModal /> */}
      <FormSection>
        <H2AuthPanel className="animate-in-right-short">{es.LOGIN}</H2AuthPanel>
        <Stack direction='row' className="animate-in-right-short" sx={{animationDelay: "100ms"}}>
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
        <LoginForm />
      </FormSection>
      <Divider />
      <QuickAccessButtons />
    </>
  );
};

export default Login;
