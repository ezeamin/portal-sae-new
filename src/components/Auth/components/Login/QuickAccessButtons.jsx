import { Stack } from '@mui/material';

import { FormSection } from '../../styled';

import LoginButton from './LoginButton';

import {
  Article as ArticleIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  FolderShared as FolderSharedIcon,
  Gavel as GavelIcon,
} from '@mui/icons-material';

const PROTOCOLO_SENTENCIAS =
  'https://portaldelsae.justucuman.gov.ar/protocolo-sentencias';
const TUTORIALES_NORMATIVAS =
  'https://www4.justucuman.gov.ar/tutoriales-normativas';

const QuickAccessButtons = () => {
  const isMobile = window.innerWidth < 900;

  return (
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
  );
};

export default QuickAccessButtons;
