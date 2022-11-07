import useTheme from './useTheme';

// Extraer color en hexadecimal, de un módulo

const useModuleColor = (colorString) => {
  const colors = useTheme();

  return colors.palette[colorString].main;
};

export default useModuleColor;
