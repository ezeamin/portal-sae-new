import { useDispatch, useSelector } from 'react-redux';

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { setModal } from '../../features/modal/genericModalSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const { modal: modalState } = useSelector(state => state.genericModal.value);

  const handleClickCloseModal = () => {
    dispatch(setModal({ modal: false, name: '', type: '' }));
  };

  return (
    <Dialog onClose={handleClickCloseModal} open={modalState}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='name'
          label='Email Address'
          type='email'
          fullWidth
          variant='standard'
        />
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={() }>Cancel</Button>
        <Button onClick={}>Subscribe</Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default Modal;
