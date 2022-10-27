const useTestId = (id) => {
  if (process.env.REACT_APP_ENV === 'production') return;

  return {
    'data-testid': id,
  };
};

export default useTestId;