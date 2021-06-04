import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../assets/css//NavigBar.css";
import { Link } from "react-router-dom";

export function NavigBar({ isLogged, onLogOut }) {
  return (
    <div className="NavigBar">
      <Navbar bg="light" variant="light">
        {isLogged ? (
          <Link to="/">
            <Navbar.Brand href="#home">IS - Idea Sharing</Navbar.Brand>
          </Link>
        ) : (
          <Link to="/main">
            <Navbar.Brand href="#home">IS - Idea Sharing</Navbar.Brand>
          </Link>
        )}
        <Nav className="mr-auto"></Nav>
        <Nav>
          {isLogged ? (
            <Link to="/">
              <Button onClick={onLogOut} variant="primary">
                Log out
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="primary">Sign in</Button>
            </Link>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}
