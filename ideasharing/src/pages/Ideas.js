import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../assets/css/Ideas.css";

export default function Ideas() {
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
        <Button variant="dark">Connect</Button>
        <Button variant="link">More info</Button>
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
      <div className="ideas-idea">
        <h4>Abylay Aiyp</h4>
        <p>16.05.2021</p>
        <h4>Smart smartphone</h4>
        <p>
          A smartphone is a portable device that combines mobile telephone and
          computing functions into one unit. They are distinguished from feature
          phones by their stronger hardware capabilities and extensive mobile
          operating systems, which facilitate wider software, internet
          (including web browsing over mobile broadband), and multimedia
          functionality (including music, video, cameras, and gaming), alongside
          core phone functions such as voice calls and text messaging.
          Smartphones typically contain a number of metal–oxide–semiconductor
          (MOS) integrated circuit (IC) chips, include various sensors that can
          be leveraged by pre-included and third-party software (such as a
          magnetometer, proximity sensors, barometer, gyroscope, accelerometer
          and more), and support wireless communications protocols (such as
          Bluetooth, Wi-Fi, or satellite navigation).
        </p>
        <Button variant="dark">Connect</Button>
        <Button variant="link">More info</Button>
      </div>
    </div>
  );
}
