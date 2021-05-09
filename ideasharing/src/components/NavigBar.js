import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../cssFiles/NavigBar.css";
import { Link, Redirect } from "react-router-dom";

export function NavigBar() {
  function handleLogin() {
    return <Redirect to="/login" />;
  }
  return (
    <div className="NavigBar">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">IS - Idea Sharing</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">How it works</Nav.Link>
          <Nav.Link href="#features">Who we are</Nav.Link>
          <Nav.Link href="#pricing">What we do</Nav.Link>
          <Nav.Link href="#pricing">Contact us</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary" onClick={handleLogin}>
            Sign in
          </Button>
        </Nav>
      </Navbar>
    </div>
  );
}
