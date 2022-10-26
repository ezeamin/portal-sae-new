export const emailRegex =
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.edu|com|gov|net|org|int|mil|ar$/;

export const validateEmail = (email) => {
  if (!email.trim()) return false;

  return emailRegex.test(email);
};
