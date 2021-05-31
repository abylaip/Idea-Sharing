import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../assets/css//NavigBar.css";
import { Link } from "react-router-dom";

export function NavigBar({ isLogged, logInHandler }) {
  return (
    <div className="NavigBar">
      <Navbar bg="light" variant="light">
        <Link to="/">
          <Navbar.Brand href="#home">IS - Idea Sharing</Navbar.Brand>
        </Link>
        <Nav className="mr-auto"></Nav>
        <Nav>
          {isLogged ? (
            <Link to="/login">
              <Button variant="primary">Sign in</Button>
            </Link>
          ) : (
            <Link to="/">
              <Button onClick={logInHandler} variant="primary">
                Log out
              </Button>
            </Link>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}
