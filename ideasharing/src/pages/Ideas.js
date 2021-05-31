import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../assets/css/Ideas.css";
import ModalMoreInfo from "../components/ModalMoreInfo";

export default function Ideas() {
  const [show, setShow] = useState(false);

  const hideHandler = () => setShow(false);
  return (
    <div className="ideas-body">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <div className="ideas-idea">
        <h4>Zhandos Abdireshov</h4>
        <p>13.05.2021</p>
        <h4>Social Media</h4>
        <p>
          Social media are interactive technologies that allow the creation or
          sharing/exchange of information, ideas, career interests, and other
          forms of expression via virtual communities and networks.[1][2] While
          challenges to the definition of social media arise[3] due to the broad
          variety of stand-alone and built-in social-media services currently
          available, there are some common features:[2]
        </p>
        <Button variant="dark" className="cnct-btn">
          Connect
        </Button>
        <Button onClick={() => setShow(true)} variant="outline-primary">
          More info
        </Button>
      </div>

      <ModalMoreInfo show={show} hide={hideHandler} />
    </div>
  );
}
