import React from "react";
import "../cssFiles/Login.css";

export function Login() {
  return (
    <div className="login">
      <div className="loginForm">
        <h1>Login</h1>
        <h5>Use your account to login</h5>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
      </div>
    </div>
  );
}
