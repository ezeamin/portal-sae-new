import { Chip } from '@mui/material';

const ModuleChip = (props) => {
  const { currentModule } = props;

  return (
    <Chip
      label={currentModule.name}
      color={currentModule.color}
      sx={{
        fontWeight: 'bold',
      }}
    />
  );
};

export default ModuleChip;
