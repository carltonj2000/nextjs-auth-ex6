export function validateEmail(email: string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function validatePassword(password: string) {
  // Password should be at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Password should contain at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Password should contain at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // Password should contain at least one digit
  if (!/\d/.test(password)) {
    return false;
  }

  // Password should contain at least one special character
  if (!/[!@#$%^&*()\-_=+{};:,<.>]/.test(password)) {
    return false;
  }

  // If all conditions are met, the password is valid
  return true;
}
