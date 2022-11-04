import useTheme from './useTheme';

const useModuleColor = (colorString) => {
  const colors = useTheme();

  return colors.palette[colorString].main;
};

export default useModuleColor;
