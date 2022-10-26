import customSwal from '../helpers/customSwal';

const logout = () => {
  customSwal({
    title: '¿Estás seguro?',
    text: '¿Deseas cerrar sesión?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Cerrar sesión'
  }).then((res) => {
    if (res.isConfirmed) {
      console.log('Sesion cerrada');
      //window.location.href = '/login';
    }
  });
};

export default logout;
