import React, { useState } from "react";
//import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const loginValidation = () => {
    let valid = true;
    if (username.length < 3 || password.length < 3) {
      let valid = false;
      console.log("not valid");
      return valid;
    } else {
      console.log(" valid");
      return valid;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = loginValidation();
    if (isValid) {
      console.log(`userName:${username}, password:${password} `);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
