import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import MoveToInboxRoundedIcon from '@mui/icons-material/MoveToInboxRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

const iconsConfig = {
  sx: {
    fontSize: '3rem',
  },
};

const modules = [
  {
    name: 'Ingreso de escritos',
    description: 'Presentaciones',
    color: '#7fcf7c',
    icon: <CreateRoundedIcon {...iconsConfig} />,
  },
  {
    name: 'Notificaciones digitales',
    description: 'Casillero virtual',
    color: '#b3b3b3',
    icon: <MoveToInboxRoundedIcon {...iconsConfig} />,
  },
  {
    name: 'Pagos judiciales',
    description: 'Online/Presencial',
    color: '#ce6cd9',
    icon: <DescriptionRoundedIcon {...iconsConfig} />,
  },
  {
    name: 'Solicitud de turnos',
    description: 'Online/Presencial',
    color: '#e36f6f',
    icon: <WorkHistoryRoundedIcon {...iconsConfig} />,
  },
  {
    name: 'Consulta de expedientes',
    description: 'Online/Presencial',
    color: '#e6a25e',
    icon: <SearchRoundedIcon {...iconsConfig} />,
  },
  {
    name: 'Consulta a la unidad judicial',
    description: 'Mensajes',
    color: '#ded559',
    icon: <EmailRoundedIcon {...iconsConfig} />,
  },
  {
    name: 'Jurisprudencia',
    description: 'Online/Presencial',
    color: '#b58c53',
    icon: <BookmarkRoundedIcon {...iconsConfig} />,
  },
  {
    name: 'Inicio expedientes',
    description: 'Online/Presencial',
    color: '#7d9ec7',
    icon: <MenuBookRoundedIcon {...iconsConfig} />,
  },
  {
    name: 'OGA - Audiencias Judiciales',
    description: 'Online/Presencial',
    color: '#82ad80',
    icon: <AccountBalanceRoundedIcon {...iconsConfig} />,
  },
];

export default modules;
