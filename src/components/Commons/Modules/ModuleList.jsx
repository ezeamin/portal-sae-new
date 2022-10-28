import { Grid } from '@mui/material';
import { CustomContainer } from '../../';

import ModuleCard from './ModuleCard';

const ModuleList = (props) => {
  const { modules, sx: propsSx } = props;

  return (
    <CustomContainer sx={propsSx}>
      <Grid
        container
        spacing={2}
        alignItems='stretch'
        justifyContent='space-evenly'
      >
        {modules.map((module, index) => (
          <Grid item key={module.name} xs={12} md={4}>
            <ModuleCard module={module} delay={index * 30} />
          </Grid>
        ))}
      </Grid>
    </CustomContainer>
  );
};

export default ModuleList;
