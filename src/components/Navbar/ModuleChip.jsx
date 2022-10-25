import { Chip } from '@mui/material';

const ModuleChip = (props) => {
  const { currentModule } = props;

  return (
    <Chip
      label={currentModule.name}
      color={currentModule.color}
      icon={currentModule.icon}
      sx={{
        fontWeight: 'bold',
        lineHeight: '10',
      }}
    />
  );
};

export default ModuleChip;
