import React from "react";
import "../assets/css/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  function handleLoggedIn() {
    localStorage.setItem("loggedIn", true);
  }
  return (
    <div className="login">
      <div className="loginForm">
        <h1>Login</h1>
        <h5>Use your account to login</h5>
        <input type="text" placeholder="Enter username" />
        <input type="password" placeholder="Enter password" />
        <br />
        <br />
        <Link to="/main">
          <button
            type="submit"
            className="login-button"
            onClick={handleLoggedIn}
          >
            Sign in
          </button>
        </Link>
        <br />
        <Link to="/registration">
          <a>Forgot password?</a>
        </Link>
      </div>
    </div>
  );
}
