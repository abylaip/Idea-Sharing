import React from "react";
import Ava from "../assets/ava.jpeg";
import "../assets/css/Profile.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";

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
          <div className="personal-info-each">
            <p>Projects: </p>
            <p>IS.kz</p>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid gray",
          marginLeft: 10,
          marginRight: 10,
        }}
      ></div>
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
        <Button variant="success" size="lg" block>
          Submit idea
        </Button>
      </div>
      <div
        style={{
          borderTop: "1px solid gray",
          marginTop: 5,
          marginBottom: 5,
          marginLeft: 10,
          marginRight: 10,
        }}
      ></div>
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
        <div
          style={{
            borderTop: "1px solid gray",
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 10,
            marginRight: 10,
          }}
        ></div>
        <div className="profile-idea">
          <h4>Abylay Aiyp</h4>
          <p>16.05.2021</p>
          <h4>Smart smartphone</h4>
          <p>
            A smartphone is a portable device that combines mobile telephone and
            computing functions into one unit. They are distinguished from
            feature phones by their stronger hardware capabilities and extensive
            mobile operating systems, which facilitate wider software, internet
            (including web browsing over mobile broadband), and multimedia
            functionality (including music, video, cameras, and gaming),
            alongside core phone functions such as voice calls and text
            messaging. Smartphones typically contain a number of
            metal–oxide–semiconductor (MOS) integrated circuit (IC) chips,
            include various sensors that can be leveraged by pre-included and
            third-party software (such as a magnetometer, proximity sensors,
            barometer, gyroscope, accelerometer and more), and support wireless
            communications protocols (such as Bluetooth, Wi-Fi, or satellite
            navigation).
          </p>
        </div>
      </div>
    </div>
  );
}
