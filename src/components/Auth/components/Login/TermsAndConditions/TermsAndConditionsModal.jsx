import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Modal,
  Stack,
  Typography,
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {
  ButtonWithIconStyled,
  modalStyled,
  PDFViewerStyled,
} from './styled';

import PDFViewer from '../PDFViewer/PDFViewer';

const TermsAndConditionsModal = () => {
  const [checked, setChecked] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (checked) setDisabledButton(false);
    else setDisabledButton(true);
  }, [checked]);

  //   const handleOpen = () => setOpen(true);

  const handleClickBtnAceptar = (e) => {
    // TODO: cambiar el estado en base de datos a chequeado
    e.preventDefault();

    console.log("Aceptar");
    // cerrar el modal
    checked && setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      aria-describedby='modal-modal-description'
      aria-labelledby='modal-modal-title'
      onClose={handleClose}
      open={open}
    >
      <Box sx={modalStyled}>
        <Stack
          alignItems={{
            xs: 'center',
            // sm: 'center',
            md: 'stretch',
          }}
          direction='column'
          justifyContent='space-evenly'
          spacing={1}
          sx={{
            height: '100%',
          }}
        >
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
            Por favor lea y acepte los términos y condiciones.
          </Typography>

          {/* Visualizador archivo PDF: Nombre: “portalsae_terminos_condiciones.pdf” */}
          <PDFViewerStyled>
            <PDFViewer />
          </PDFViewerStyled>

          <form onSubmit={handleClickBtnAceptar}>
            <FormGroup
              sx={{
                alignItems: 'center',
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    inputProps={{ 'aria-label': 'controlled' }}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label='He leído y acepto los términos y condiciones indicados.'
              />
            </FormGroup>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent='flex-end'
            >
              <Button
                onClick={() => setOpen(false)}
                type='button'
                sx={{
                  paddingRight: '2rem',
                  paddingLeft: '2rem',
                  mt: { xs: 2, md: 0 },
                }}
                variant='outlined'
              >
                Cancelar
              </Button>
              <Button
                disabled={disabledButton}
                type='submit'
                sx={{
                  ml: { md: 2 },
                  mt: { xs: 2, md: 0 },
                }}
                variant='contained'
              >
                <ButtonWithIconStyled>
                  <CheckCircleIcon fontSize='small' />
                  <p>Aceptar</p>
                </ButtonWithIconStyled>
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Modal>
  );
};

export default TermsAndConditionsModal;
