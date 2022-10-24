import {
  Avatar,
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
        <Stack direction='row' sx={{ height: '100%' }}>
          <Box
            sx={{
              p: 3,
              backgroundColor: module.color,
            }}
          >
            <Stack direction='row' alignItems='center' justifyContent='center'>
              <Avatar
                sx={{
                  width: '5rem',
                  height: '5rem',
                }}
              >
                {module.icon}
              </Avatar>
            </Stack>
          </Box>
          <CardContent>
            <Stack justifyContent='center' sx={{height: "100%"}}>
              <Typography gutterBottom variant='h5' component='h5'>
                {module.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {module.description}
              </Typography>
            </Stack>
          </CardContent>
        </Stack>
      </CardActionArea>
    </Card>
  );
};

export default ModuleCard;
