import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const iconsConfig = {
  sx: {
    fontSize: '3rem',
  },
};

const profileModules = [
  {
    name: 'Editar datos',
    description: 'Editar datos personales como nombre e email',
    color: '#7d9ec7',
    icon: <CreateRoundedIcon {...iconsConfig} />,
  },
  {
    name: 'Cambiar contraseña',
    description: 'Cambiar contraseña de ingreso',
    color: '#7d9ec7',
    icon: <PasswordRoundedIcon {...iconsConfig} />,
  },
  {
    name: 'Cerrar sesión',
    description: 'Salir de la sesión actual',
    color: '#e36f6f',
    icon: <LogoutRoundedIcon {...iconsConfig} />,
  },
];

export default profileModules;
