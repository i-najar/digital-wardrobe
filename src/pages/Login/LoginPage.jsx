import React from "react";
import { useState } from "react";
import LoginForm from "./LoginForm";

function LoginPage() {
  // const [contact, setContact] = useState({
  //   fName: "",
  //   email: "",
  // });

  return (
    <div className="login-page">
      <h1>Hi!</h1>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
