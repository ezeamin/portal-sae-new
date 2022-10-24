import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';

const ModuleCard = (props) => {
  const { module } = props;

  return (
    <Card sx={{ height: '100%', backgroundColor: 'whiteDarkMode.main' }}>
      <CardActionArea sx={{ height: '100%' }}>
        <Stack sx={{ height: '100%' }} direction="row">
              <Box
                sx={{
                  width: '15px',
                  backgroundColor: module.color,
                }}
              ></Box>
          <CardContent sx={{ height: '100%' }}>
            <Stack direction='row' alignItems='center' sx={{ height: '100%' }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: '5rem',
                  height: '5rem',
                  mr: 3,
                  color: module.color,
                }}
              >
                {module.icon}
              </Box>
              <Stack justifyContent='center'>
                <Typography gutterBottom variant='h5' component='h5'>
                  {module.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {module.description}
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

export default ModuleCard;
