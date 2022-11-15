import { useDispatch, useSelector } from 'react-redux';

import { Container, IconButton, Tooltip } from '@mui/material';
import { DarkModeRounded, LightModeRounded } from '@mui/icons-material';

import { AuthPaper } from './styled';

import loginViews from '../../../../constants/views/loginViews';

import Login from '../Login/Login';
import ResetPassword from '../ResetPassword/ResetPassword';
import RestorePassword from '../RestorePassword/RestorePassword';

import themes from '../../../../constants/themes';
import { setTheme } from '../../../../features/globalData';

import es from '../../../../lang/es';

const FormPanel = (props) => {
  const { view } = props;

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.globalData.theme);

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

  const handleChangeTheme = () => {
    const newValue = theme === themes.LIGHT ? themes.DARK : themes.LIGHT;

    dispatch(setTheme(newValue));
  };

  return (
    <AuthPaper
      square
      sx={{ backgroundColor: 'whiteDarkMode.main', position: 'relative' }}
    >
      <Tooltip title={es.CHANGE_THEME}>
        <IconButton
          onClick={handleChangeTheme}
          sx={{ position: 'absolute', right: '0.5rem', top: '0.5rem' }}
        >
          {theme === themes.LIGHT ? <DarkModeRounded /> : <LightModeRounded />}
        </IconButton>
      </Tooltip>

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
