import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../assets/css//NavigBar.css";
import { Link } from "react-router-dom";

export function NavigBar({ isLogged, onLogOut }) {
  return (
    <div className="NavigBar">
      <Navbar bg="light" variant="light">
        <Link to="/">
          <Navbar.Brand>IS - Idea Sharing</Navbar.Brand>
        </Link>

        <Nav.Link>
          <Link className="inactive" to="/about">
            About us
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link className="inactive" to="/contacts">
            Contacts
          </Link>
        </Nav.Link>

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
