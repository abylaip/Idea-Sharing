import React, { useState } from "react";
import "../assets/css/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3001/api/auth/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log("success");
        console.log(res);
        localStorage.setItem("token", res.data.token);
        console.log(localStorage.getItem("token"));
        onLogin();
      })
      .catch((error) => {
        console.error(error);
        alert("Wrong email or password, try again!");
      });
  };

  return (
    <div className="login">
      <div className="loginForm">
        <form>
          <h1>Login</h1>
          <h5>Use your account to login</h5>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChangeEmail}
          />
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleChangePassword}
          />
          <br />
          <br />
          <button
            type="submit"
            className="btn login-button"
            onClick={handleSubmit}
          >
            Sign in
          </button>
          <br />
          <Link to="/registration">I don't have an account</Link>
        </form>
      </div>
    </div>
  );
}
