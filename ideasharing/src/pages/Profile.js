import React from "react";
import Ava from "../assets/ava.jpeg";
import "../assets/css/Profile.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile-body">
      <div className="profile-main-info">
        <div className="profile-left">
          <img
            className="avatar"
            src="https://bootdey.com/img/Content/avatar/avatar5.png"
          />
          <h3>Abylay Aiyp</h3>
          <p className="profile-left-each">Software Engineer</p>
          <p className="profile-left-each">Almaty, Kazakhstan</p>
          <Link to="/settings">
            <button
              style={{
                backgroundColor: "#b0bec5",
                width: 200,
                border: "none",
                borderRadius: 5,
              }}
            >
              Edit
            </button>
          </Link>
        </div>
        <div className="profile-right">
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
      <div className="profile-create-ideas">
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Title"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Title"
          />
        </InputGroup>
        <InputGroup size="sm">
          <InputGroup.Prepend>
            <InputGroup.Text>Description</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="Description" />
        </InputGroup>
        <br />
        <Button variant="success" size="lg" block style={{ width: 200 }}>
          Submit idea
        </Button>
      </div>
      <div className="profile-ideas">
        <div className="profile-idea">
          <h4>Abylay Aiyp</h4>
          <p>14.05.2021</p>
          <h4>GPS System</h4>
          <p>
            The Global Positioning System (GPS), originally Navstar GPS,[1] is a
            satellite-based radionavigation system owned by the United States
            government and operated by the United States Space Force.[2] It is
            one of the global navigation satellite systems (GNSS) that provides
            geolocation and time information to a GPS receiver anywhere on or
            near the Earth where there is an unobstructed line of sight to four
            or more GPS satellites.[3] Obstacles such as mountains and buildings
            block the relatively weak GPS signals.
          </p>
        </div>
      </div>
    </div>
  );
}
