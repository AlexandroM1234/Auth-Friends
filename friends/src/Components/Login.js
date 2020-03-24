import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWtihAuth";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // axiosWithAuth()
    axios.post("http://localhost:5000/api/login", credentials).then(res => {
      console.log(res);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
