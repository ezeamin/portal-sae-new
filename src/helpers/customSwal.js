import Swal from 'sweetalert2';

const customSwal = (args) => {
  return Swal.fire({
    ...args,
    confirmButtonColor: '#5c7aea',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Cancelar',
    customClass: {
      confirmButton: 'swal2-button',
      cancelButton: 'swal2-button',
    },
  });
};

export default customSwal;
