import modulesColors from '../constants/modulesColors';

const lightTheme = {
  primary: {
    light: '#8192f7',
    main: '#5c7aea',
    contrastText: '#fff',
  },
  secondary: {
    main: '#6a5acd',
  },
  light: {
    contrastText: '#3f3f3f',
    secondaryContrastText: '#8a8a8a',
    main: '#e6e6e6',
  },
  dark: {
    light: '#c4c4c4',
    main: '#8a8a8a',
  },
  white: {
    contrastText: '#3f3f3f',
    main: '#fff',
  },
  whiteDarkMode: {
    contrastText: '#000',
    main: '#fff',
  },
  background: {
    default: '#e6e6e6',
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
  ...modulesColors,
};

export default lightTheme;
