import { useEffect, useState } from "react";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleOnChangePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    console.log("email", email);
  }, [email]);

  useEffect(() => {
    console.log("password", password);
  }, [password]);

  return {
    email,
    password,
    handleOnChangeEmail,
    handleOnChangePassword,
    showPassword,
    setShowPassword
  }
}