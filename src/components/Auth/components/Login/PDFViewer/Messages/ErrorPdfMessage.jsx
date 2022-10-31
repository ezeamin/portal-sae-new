const ErrorPdfMessage = () => {
  return (
    <div className="text-center my-5">
      <i className="fa-solid fa-circle-exclamation text-danger fa-2x mb-2"></i>
      <h5 className="mb-1">Error cargando archivo</h5>
      <p className="mb-0">
        Por favor, intente navegando nuevamente de regreso a esta página
      </p>
    </div>
  );
};

export default ErrorPdfMessage;
