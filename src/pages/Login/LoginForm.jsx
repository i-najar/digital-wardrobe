import React from "react";
import Input from "../../components/forms/Input";

function LoginForm() {
  return (
    <form className="login-form">
      <Input type="text" placeholder="Email" />
      <Input type="text" placeholder="Password" />
      <Input type="text" placeholder="Confirm Password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
