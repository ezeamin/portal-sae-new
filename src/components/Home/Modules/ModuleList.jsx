import { Container, Grid } from '@mui/material';
import ModuleCard from './ModuleCard';

const ModuleList = (props) => {

  const { modules } = props;

  return (
    <Container sx={{ my: 5 }}>
      <Grid container spacing={2} alignItems="stretch" justifyContent="space-evenly">
        {modules.map((module) => (
          <Grid item key={module.name} xs={12} md={4}>
            <ModuleCard module={module} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ModuleList;
