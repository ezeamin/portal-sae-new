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

import { logoutAction } from '../../../../../actions/logout';

import { modalStyled, PDFViewerStyled } from '../../../styled';

import PDFViewer from '../PDFViewer/PDFViewer';
import { useNavigate } from 'react-router-dom';
import { authRoutes } from '../../../../../constants/Routing/routes';

const TermsAndConditionsModal = () => {
  const [checked, setChecked] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (checked) setDisabledButton(false);
    else setDisabledButton(true);
  }, [checked]);

  //   const handleOpen = () => setOpen(true);

  const handleClickBtnAceptar = (e) => {
    e.preventDefault();

    // cerrar el modal
    checked && setOpen(false);

    // Crear contraseña (eliminar la temporal)
    navigate(authRoutes.RESET_PASSWORD.path);
  };

  const handleClose = () => {
    setOpen(false);
    logoutAction();
  };

  return (
    <Modal onClose={handleClose} open={open}>
      <Box sx={modalStyled}>
        <Stack
          alignItems={{
            xs: 'center',
            md: 'stretch',
          }}
          direction='column'
          justifyContent='space-between'
          spacing={1}
          sx={{
            height: '100%',
          }}
        >
          <Typography sx={{ fontSize: '1.1rem' }}>
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
                onClick={handleClose}
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
                  width: { xs: '100%', md: '160px' },
                }}
                variant='contained'
                startIcon={<CheckCircleIcon />}
              >
                Aceptar
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Modal>
  );
};

export default TermsAndConditionsModal;
