import { Container } from '@mui/system';

import { AuthPaper } from './styled';

import loginViews from './data/loginViews';

import Login from '../Login/Login';
import ResetPassword from '../ResetPassword/ResetPassword';
import RestorePassword from '../RestorePassword/RestorePassword';

const FormPanel = (props) => {
  const { view } = props;

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
    <AuthPaper square>
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
        />
        {/* //TODO: animacion para transicion de pagina  
            https://www.framer.com/docs/introduction/
            https://codesandbox.io/s/framer-motion-screen-wipe-page-transitions-with-react-router-6-yo38bu?from-embed=&file=/src/App.tsx:423-432
        */}

        <>{renderedComp}</>

        {/* <Router>
          <Routes>
            <Route path={routes.HOME} element={<Login />} />
            <Route
              path={routes.RESTORE_PASSWORD}
              element={<RestorePassword />}
            />
            <Route path={routes.RESET_PASSWORD} element={<ResetPassword />} />
            <Route
              path={routes.CHANGE_PASSWORD_LOGGED}
              element={<ChangePasswordLogged />}
            />
          </Routes>
        </Router> */}
      </Container>
    </AuthPaper>
  );
};

export default FormPanel;
