import {
  validatePassword,
} from '../../../../../helpers/validators';

import validations from '../../../../../lang/validationsMsg';

export const validateFields = (
  password,
  confirmPassword,
  setErrors,
  setLoading,
  errorsInitialState
) => {
  /* 
    valida que las contraseñas tengan el criterio establecido
  */
  if (!validatePassword(password)) {
    setErrors({
      email: errorsInitialState.email,
      password: {
        error: true,
        msg: validations.PASSWORD_LENGTH,
      },
      confirmPassword: errorsInitialState.confirmPassword,
    });
    setLoading(false);
    return false;
  }
  if (!validatePassword(confirmPassword)) {
    setErrors({
      email: errorsInitialState.email,
      password: errorsInitialState.password,
      confirmPassword: {
        error: true,
        msg: validations.PASSWORD_LENGTH,
      },
    });
    setLoading(false);
    return false;
  }

  // valida que las contraseñas sean iguales
  if (password !== confirmPassword) {
    setErrors({
      email: errorsInitialState.email,
      password: {
        error: true,
      },
      confirmPassword: {
        error: true,
        msg: validations.NEW_PASS_EQUAL_TO_CONFIRM_PASS,
      },
    });
    setLoading(false);
    return false;
  }

  return true;
};