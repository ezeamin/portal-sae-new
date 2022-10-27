import { List, ListItem, ListItemText } from '@mui/material';

import Brightness1Icon from '@mui/icons-material/Brightness1';
import { CustomAlert } from '../..';

const LIST_ICON_MUI = {
  fontSize: 8,
  marginRight: 1,
  marginTop: '0.7rem',
};

const LIST_ITEM_MUI = {
  alignItems: 'flex-start',
  marginBottom: -1.5,
  paddingTop: '2px',
  paddingLeft: '6px',
  paddingRight: '0px',
};

const AlertPassword = () => {
  return (
    <CustomAlert severity='info' sx={{ mt: 2, mb: 4 }}>
      <p>
        Para modificar su contraseña actual, debe cumplir los siguientes
        requisitos:
      </p>
      <List dense sx={{ width: '100%' }}>
        <ListItem sx={LIST_ITEM_MUI}>
          <Brightness1Icon sx={LIST_ICON_MUI} />
          <ListItemText>Longitud minima de 8 caracteres.</ListItemText>
        </ListItem>
        <ListItem sx={LIST_ITEM_MUI}>
          <Brightness1Icon sx={LIST_ICON_MUI} />
          <ListItemText>Debe contener al menos 1 letra mayúscula.</ListItemText>
        </ListItem>
        <ListItem sx={LIST_ITEM_MUI}>
          <Brightness1Icon sx={LIST_ICON_MUI} />
          <ListItemText>Debe contener al menos 1 letra minúscula.</ListItemText>
        </ListItem>
        <ListItem sx={LIST_ITEM_MUI}>
          <Brightness1Icon sx={LIST_ICON_MUI} />
          <ListItemText>Debe contener al menos un número.</ListItemText>
        </ListItem>
        <ListItem sx={LIST_ITEM_MUI}>
          <Brightness1Icon sx={LIST_ICON_MUI} />
          <ListItemText>No debe ser igual a su contraseña actual.</ListItemText>
        </ListItem>
      </List>
    </CustomAlert>
  );
};

export default AlertPassword;
