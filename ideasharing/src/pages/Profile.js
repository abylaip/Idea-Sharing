import React from "react";
import Ava from "../assets/ava.jpeg";
import "../assets/css/Profile.css";
import { InputGroup, FormControl } from "react-bootstrap";

export default function Profile() {
  return (
    <div className="profile-body">
      <div className="profile-main-info">
        <img className="avatar" src={Ava} />
        <div className="profile-main-info-personal">
          <h3>Abylay Aiyp</h3>
          <div className="personal-info-each">
            <p>Education: </p>
            <p>Massachusets Institute of Technology</p>
          </div>
          <div className="personal-info-each">
            <p>Location: </p>
            <p>Kazakhstan, Almaty</p>
          </div>
          <div className="personal-info-each">
            <p>Position: </p>
            <p>Software Developer</p>
          </div>
          <div className="personal-info-each">
            <p>Skills: </p>
            <p>Full-stack developer</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="profile-ideas">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">
              Default
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Description</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="Description" />
        </InputGroup>
      </div>
    </div>
  );
}
