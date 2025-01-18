import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = (e) => {
    console.log("inside handle");

    if (username == "admin" && password == "admin") {
      console.log("inside");
      navigate("/Dashboard");
    } else {
      alert("Invalid Login Credentials...");
      navigate("/Login");
    }
  };

  return (
    <div>
      <h2>Welcome to Monica's React Hooks</h2>
      <h2>Login</h2>

      <div>
        <input
          className="username"
          required="required"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <br />
        <input
          className="password"
          required="required"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" onClick={handleClick}>
          Login
        </button>
        <br />
        <br />
        <small>username : admin and password : admin </small>
      </div>
    </div>
  );
};
export default Login;
