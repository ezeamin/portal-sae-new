import { Grid } from '@mui/material';
import { CustomContainer } from '../../';

import ModuleCard from './ModuleCard';

const ModuleList = (props) => {
  const { modules } = props;

  return (
    <CustomContainer>
      <Grid
        container
        spacing={2}
        alignItems='stretch'
        justifyContent='space-evenly'
      >
        {modules.map((module) => (
          <Grid item key={module.name} xs={12} md={4}>
            <ModuleCard module={module} />
          </Grid>
        ))}
      </Grid>
    </CustomContainer>
  );
};

export default ModuleList;