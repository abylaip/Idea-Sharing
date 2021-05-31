import React from "react";
import "../assets/css/Registration.css";
import { Link } from "react-router-dom";

export default function Registration() {
  return (
    <div className="registration">
      <div className="registration-form">
        <h1>Registration</h1>
        <input type="text" placeholder="Enter email" />
        <input type="password" placeholder="Enter password" />
        <input type="password" placeholder="Re-enter password" />
        <br />
        <br />
        <Link to="/login">
          <button type="submit" className="registration-button">
            Register
          </button>
        </Link>
        <br />
      </div>
    </div>
  );
}
