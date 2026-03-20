export const checkValidate = (email: string, password: string) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|-])(?!.*\s).{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Incorrect password";

  return null;
};
