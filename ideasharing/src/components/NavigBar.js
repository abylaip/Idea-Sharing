import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

export function NavigBar() {
  return (
    <>
      <style type="text/css">
        {`
            .btn-primary {
                background-color: #2D3436;
                color: white;
                border: none;
                border-radius: 999px;
                width: 100px;
            }
            .btn-primary:hover {
                background-color: white;
                color: #2D3436;
            }
        `}
      </style>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">IS - Idea Sharing</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">How it works</Nav.Link>
          <Nav.Link href="#features">Who we are</Nav.Link>
          <Nav.Link href="#pricing">What we do</Nav.Link>
          <Nav.Link href="#pricing">Contact us</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary">Sign in</Button>
        </Nav>
      </Navbar>
    </>
  );
}
