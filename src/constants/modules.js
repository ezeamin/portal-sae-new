import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import MoveToInboxRoundedIcon from '@mui/icons-material/MoveToInboxRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import { routesModules } from './constants';

const iconsConfig = {
  sx: {
    fontSize: '3rem',
  },
};

const modules = {
  HOME: [
    {
      id: routesModules.HOME.ESCRITOS.id,
      name: 'Ingreso escritos',
      description: 'Presentaciones',
      color: '#7fcf7c',
      icon: <CreateRoundedIcon {...iconsConfig} />,
      path: routesModules.HOME.ESCRITOS.path,
    },
    {
      id: routesModules.HOME.NOTIFICACIONES.id,
      name: 'Notificaciones',
      description: 'Casillero virtual',
      color: '#b3b3b3',
      icon: <MoveToInboxRoundedIcon {...iconsConfig} />,
      path: routesModules.HOME.NOTIFICACIONES.path,
    },
    {
      id: routesModules.HOME.PAGOS.id,
      name: 'Pagos judiciales',
      description: 'Online/Presencial',
      color: '#ce6cd9',
      icon: <DescriptionRoundedIcon {...iconsConfig} />,
      path: routesModules.HOME.PAGOS.path,
    },
    {
      id: routesModules.HOME.TURNOS.id,
      name: 'Solicitud turnos',
      description: 'Online/Presencial',
      color: '#e36f6f',
      icon: <WorkHistoryRoundedIcon {...iconsConfig} />,
      path: routesModules.HOME.TURNOS.path,
    },
    {
      id: routesModules.HOME.CONSULTA_EXPEDIENTES.id,
      name: 'Consulta expedientes',
      description: 'Online/Presencial',
      color: '#e6a25e',
      icon: <SearchRoundedIcon {...iconsConfig} />,
      path: routesModules.HOME.CONSULTA_EXPEDIENTES.path,
    },
    {
      id: routesModules.HOME.UNIDADES.id,
      name: 'Consulta unidades',
      description: 'Mensajes',
      color: '#ded559',
      icon: <EmailRoundedIcon {...iconsConfig} />,
      path: routesModules.HOME.UNIDADES.path,
    },
    {
      id: routesModules.HOME.JURISPRUDENCIA.id,
      name: 'Jurisprudencia',
      description: 'Online/Presencial',
      color: '#b58c53',
      icon: <BookmarkRoundedIcon {...iconsConfig} />,
      path: routesModules.HOME.JURISPRUDENCIA.path,
    },
    {
      id: routesModules.HOME.INICIO_EXPEDIENTES.id,
      name: 'Inicio expedientes',
      description: 'Online/Presencial',
      color: '#7d9ec7',
      icon: <MenuBookRoundedIcon {...iconsConfig} />,
      path: routesModules.HOME.INICIO_EXPEDIENTES.path,
    },
    {
      id: routesModules.HOME.OGA.id,
      name: 'OGA',
      description: 'Online/Presencial',
      color: '#82ad80',
      icon: <AccountBalanceRoundedIcon {...iconsConfig} />,
      path: routesModules.HOME.OGA.path,
    },
  ],

  PROFILE: [
    {
      id: routesModules.PROFILE.DATA_FORM.id,
      name: 'Editar datos',
      description: 'Editar datos personales como nombre e email',
      color: '#7d9ec7',
      icon: <CreateRoundedIcon {...iconsConfig} />,
      path: routesModules.PROFILE.DATA_FORM.path,
    },
    {
      id: routesModules.PROFILE.PASSWORD.id,
      name: 'Cambiar contraseña',
      description: 'Cambiar contraseña de ingreso',
      color: '#7d9ec7',
      icon: <PasswordRoundedIcon {...iconsConfig} />,
      path: routesModules.PROFILE.PASSWORD.path,
    },
    {
      id: routesModules.PROFILE.LOGOUT.id,
      name: 'Cerrar sesión',
      description: 'Salir de la sesión actual',
      color: '#e36f6f',
      icon: <LogoutRoundedIcon {...iconsConfig} />,
      path: '',
      action: () => {
        console.log('LOG OUT');
      },
    },
  ],
};

export default modules;
