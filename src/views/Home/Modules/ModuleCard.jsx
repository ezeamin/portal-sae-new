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
    <Card sx={{height: "100%"}}>
      <CardActionArea sx={{height: "100%"}}>
          <Stack direction='row' sx={{height: "100%"}}>
            <Box
            sx={{
                p: 3,
                backgroundColor: module.color,
            }}
              
            >
              <Stack
                direction='row'
                alignItems='center'
                justifyContent="center"
              >
                <Avatar
                  sx={{
                    width: '5rem',
                    height: '5rem',
                  }}
                />
              </Stack>
            </Box>
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {module.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {module.description}
              </Typography>
            </CardContent>
          </Stack>
      </CardActionArea>
    </Card>
  );
};

export default ModuleCard;
