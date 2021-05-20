import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../assets/css//NavigBar.css";
import { Link } from "react-router-dom";

export function NavigBar() {
  function show() {
    console.log("asdasd");
    if (localStorage.getItem("loggedIn") === true) {
      return <p>asdasdasd</p>;
    }
    return (
      <Link to="/login">
        <Button variant="primary">Sign in</Button>
      </Link>
    );
  }
  return (
    <div className="NavigBar">
      <Navbar bg="light" variant="light">
        <Link to="/">
          <Navbar.Brand href="#home">IS - Idea Sharing</Navbar.Brand>
        </Link>
        <Nav className="mr-auto"></Nav>
        <Nav>{show()}</Nav>
      </Navbar>
    </div>
  );
}
