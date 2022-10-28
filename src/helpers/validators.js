export const emailRegex =
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.edu|com|gov|net|org|int|mil|ar$/;

export const passRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

export const validateEmail = (email) => {
  if (!email.trim()) return false;

  if (email.trim().length > 50) return false;

  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  if (!password.trim()) return false;
  return passRegex.test(password);
};

export const validatePasswordNumMinMax = (pass) => {
  const regex = /^(?=.*\d)(?=.*[a-záéíóöúüñ]).*[A-ZÁÉÍÓÖÚÜÑ]/;
  if (!regex.test(pass)) return false;

  return true;
};
