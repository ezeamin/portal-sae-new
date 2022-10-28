import { useEffect } from 'react';

import { Link as MUILink, Stack } from '@mui/material';

import {
  Article as ArticleIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  FolderShared as FolderSharedIcon,
  Gavel as GavelIcon,
} from '@mui/icons-material';

import LoginForm from './Form/LoginForm';

import LoginButton from './LoginButton';

import es from '../../../lang/es';

import { FormSection, H2AuthPanel, HrStyled } from '../../../styled';

import TermsAndConditionsModal from '../../../components/Login/TermsAndConditions/TermsAndConditionsModal';

const PROTOCOLO_SENTENCIAS = 'https://portaldelsae.justucuman.gov.ar/protocolo-sentencias';
const REGISTER_URL= 'https://www4.justucuman.gov.ar/tutoriales-normativas/formularios';
const TUTORIALES_NORMATIVAS = 'https://www4.justucuman.gov.ar/tutoriales-normativas';

const Login = () => {
  useEffect(() => {
    document.title = 'Iniciar sesión | Portal del SAE';
  }, []);

  const isMobile = window.innerWidth < 900;

  return (
    <>
      {/* // TODO: validar terminos y condiciones con la base de datos */}
      <TermsAndConditionsModal />
      <FormSection>
        <H2AuthPanel>{es.LOGIN}</H2AuthPanel>
        <Stack direction='row'>
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
      <HrStyled />
      {/* Botones de accesos directos */}
      <FormSection>
        <Stack spacing={1} direction={{ md: 'row', xs: 'column' }}>
          {/* // TODO: Redireccionar a Consulta de Expedientes */} 
          <LoginButton
            title='CONSULTA DE EXPEDIENTES'
            icon={<ArticleIcon />}
            isMobile={isMobile}
            to='#'
          />
          {/* // TODO: Redireccionar a Estrado Judicial */}
          <LoginButton
            title='ESTRADO JUDICIAL'
            icon={<GavelIcon />}
            isMobile={isMobile}
            to='#'
          />
          <LoginButton
            title='TUTORIALES Y NORMATIVAS'
            icon={<AssignmentTurnedInIcon />}
            isMobile={isMobile}
            href={TUTORIALES_NORMATIVAS}
          />
          <LoginButton
            title='PROTOCOLO DE SENTENCIAS'
            icon={<FolderSharedIcon />}
            isMobile={isMobile}
            href={PROTOCOLO_SENTENCIAS}
          />
        </Stack>
      </FormSection>
    </>
  );
};

export default Login;
