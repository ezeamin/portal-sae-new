import { useDispatch, useSelector } from 'react-redux';
import { setModulesModalOpened } from '../../features/surfaces';

import { Box, Container, Dialog, Drawer } from '@mui/material';

import ModuleList from '../Commons/ModuleItem/ModuleList';

import { mainModulesArray } from '../../constants/Modules/modules';

import { RoundedButton } from '../../styled';

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
          <ModuleList modules={mainModulesArray} sx={{ mt: 0 }} />
        </Box>
      </Drawer>
    );
  }

  return (
    <Dialog open={opened} onClose={handleClose} maxWidth='lg'>
      <ModuleList modules={mainModulesArray} sx={{ overflowY: 'hidden', py: 1 }} />
    </Dialog>
  );
};

export default ModulesModal;
