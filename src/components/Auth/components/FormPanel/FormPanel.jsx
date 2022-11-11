import { Container } from '@mui/system';

import { AuthPaper } from './styled';

import loginViews from '../../../../constants/views/loginViews';

import Login from '../Login/Login';
import ResetPassword from '../ResetPassword/ResetPassword';
import RestorePassword from '../RestorePassword/RestorePassword';

const FormPanel = (props) => {
  const { view } = props;

  // Router propio, para mostrar el componente correspondiente
  let renderedComp;
  switch (view) {
    case loginViews.LOGIN: {
      renderedComp = <Login />;
      break;
    }

    case loginViews.RESET_PASSWORD: {
      renderedComp = <ResetPassword />;
      break;
    }

    case loginViews.RESTORE_PASSWORD: {
      renderedComp = <RestorePassword />;
      break;
    }

    default: {
      renderedComp = <></>;
    }
  }

  return (
    <AuthPaper square sx={{ backgroundColor: 'whiteDarkMode.main' }}>
      <Container
        sx={{
          paddingY: '2.5rem',
          paddingX: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
        maxWidth='xs'
      >
        <img
          src='/assets/img/logos/logo-57.png'
          alt='Logo Poder Judicial de Tucumán'
          height='57'
          width='57'
          className='animate-in-bottom-short'
        />
        {renderedComp}
      </Container>
    </AuthPaper>
  );
};

export default FormPanel;
