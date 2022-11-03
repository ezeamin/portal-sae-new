import { useNavigate } from 'react-router-dom';

import { Breadcrumbs, Link } from '@mui/material';

import { routes } from '../../../constants/routes';

const BreadcrumbsList = (props) => {
  const { positions = [] } = props;
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Breadcrumbs separator='›' className='animate-in-right-short'>
      <Link
        underline='hover'
        key='1'
        color='inherit'
        sx={{cursor: "pointer"}}
        onClick={() => handleClick(routes.HOME.path)}
      >
        Inicio
      </Link>
      {positions.map((position, index) => (
        <Link
          underline='hover'
          key={index + 2}
          color='inherit'
          sx={{cursor: "pointer"}}
          onClick={() => handleClick(position.path)}
        >
          {position.name}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsList;
