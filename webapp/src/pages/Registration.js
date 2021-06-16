import React, { useState } from "react";
import "../assets/css/Registration.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Registration() {
  window.signed = false;
  window.setted = false;
  console.log(window.signed);
  console.log(window.setted);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeName = (event) => {
    setFullname(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("asdasd");
    axios
      .post(`http://localhost:3001/api/auth/`, {
        fullname: fullname,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        window.signed = true;
      });
  };

  return (
    <div className="registration">
      <div className="registration-form">
        <h1>Registration</h1>
        <form>
          <input
            type="text"
            name="fullname"
            placeholder="Enter full-name"
            onChange={handleChangeName}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChangeEmail}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={handleChangePassword}
          />
          <br />
          <br />
          <button
            type="submit"
            className="btn registration-button"
            onClick={handleSubmit}
          >
            <Link to="/login" className="registration-button">
              Register
            </Link>
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}
