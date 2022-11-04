import { useState } from "react";

import { Dialog } from "@mui/material";

const Modal = () => {

    const [openModal, setOpenModal] = useState(false);

    const handleClickCloseModal = () => {
        // TODO: cerrar modal
    }

  return (
    <Dialog
        open={openModal}
        onClose={handleClickCloseModal}
    >

    </Dialog>
  )
}

export default Modal;
