import { useDispatch, useSelector } from 'react-redux';
import { setModulesModalOpened } from '../../features/surfaces';

import { Box, Container, Dialog, Drawer } from '@mui/material';

import ModuleList from '../Commons/ModuleItem/ModuleList';

import { modules } from '../../constants/constants';
import { RoundedButton } from '../../styled';

const modulesList = Object.values(modules.HOME);

const ModulesModal = () => {
  const opened = useSelector((state) => state.surfaces.modulesModalOpened);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModulesModalOpened(false));
  };

  if (window.innerWidth < 900) {
    return (
      <Drawer open={opened} onClose={handleClose}>
        <Container>
          <RoundedButton
            variant='outlined'
            fullWidth
            color='dark'
            sx={{ my: 2 }}
            onClick={handleClose}
          >
            Cerrar
          </RoundedButton>
        </Container>
        <Box sx={{ overflow: 'scroll' }}>
          <ModuleList modules={modulesList} sx={{ mt: 0 }} />
        </Box>
      </Drawer>
    );
  }

  return (
    <Dialog open={opened} onClose={handleClose} maxWidth='lg'>
      <ModuleList modules={modulesList} sx={{ overflowY: 'hidden', py: 1 }} />
    </Dialog>
  );
};

export default ModulesModal;
