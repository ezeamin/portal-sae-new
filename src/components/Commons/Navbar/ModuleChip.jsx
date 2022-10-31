import { Chip } from '@mui/material';

const ModuleChip = (props) => {
  const { currentModule } = props;

  return (
    <Chip
      label={currentModule.name}
      color={currentModule.routeInfo.color}
      icon={currentModule.routeInfo.icon}
      className='animate-in-right'
      sx={{
        fontWeight: 'bold',
        lineHeight: '10',
      }}
    />
  );
};

export default ModuleChip;
