import { useState } from "react";

import { Dialog } from "@mui/material";

const Modal = () => {
    const [open, setOpen] = useState(true); // cambiar a false

    const handleClickCloseModal = () => {
        // TODO: cerrar modal
        setOpen(false);
    }

  return (
    <Dialog
        onClose={handleClickCloseModal}
        open={open}
    >

    </Dialog>
  )
}

export default Modal;
