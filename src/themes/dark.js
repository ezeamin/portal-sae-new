import modulesColors from "../constants/Modules/modulesColors";

const darkTheme = {
  primary: {
    light: '#8192f7',
    main: '#5c7aea',
    contrastText: '#fff',
  },
  secondary: {
    main: '#6a5acd',
  },
  light: {
    contrastText: '#dddddd',
    secondaryContrastText: '#c4c4c4',
    main: '#414141',
  },
  dark: {
    light: '#414141',
    main: '#c4c4c4',
    contrastText: '#dddddd',
  },
  white: {
    contrastText: '#dfdfdf',
    main: '#000000',
  },
  whiteDarkMode: {
    contrastText: '#dfdfdf',
    main: '#3f3f3f',
  },
  background: {
    default: '#3a3a3a',
  },
  green: {
    main: '#43a047',
  },
  red: {
    main: '#e53935',
  },
  yellow: {
    main: '#fdd835',
  },
  blue: {
    main: '#039be5',
  },

  // Modules
  ...modulesColors
  // ESCRITOS: modulesColors.ESCRITOS.DARK,
  // NOTIFICACIONES: modulesColors.NOTIFICACIONES.DARK,
  // PAGOS: modulesColors.PAGOS.DARK,
  // TURNOS: modulesColors.TURNOS.DARK,
  // CONSULTA_EXPEDIENTES: modulesColors.CONSULTA_EXPEDIENTES.DARK,
  // UNIDADES: modulesColors.UNIDADES.DARK,
  // JURISPRUDENCIA: modulesColors.JURISPRUDENCIA.DARK,
  // INICIO_EXPEDIENTES: modulesColors.INICIO_EXPEDIENTES.DARK,
  // OGA: modulesColors.OGA.DARK,
};

export default darkTheme;
