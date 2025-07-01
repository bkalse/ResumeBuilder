export const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validatePhone = (phone) => /^\+?[0-9\s()-]{7,20}$/.test(phone);
