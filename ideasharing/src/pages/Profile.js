import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/Profile.css";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log("effect");
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .get(`http://localhost:3001/api/users/info`, config)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });
  }, []);
  return (
    <div className="profile-body">
      <div className="profile-main-info">
        <div className="profile-left">
          <img
            className="avatar"
            src={
              user.avatar
                ? "http://localhost:3001" + user.avatar
                : "https://bootdey.com/img/Content/avatar/avatar5.png"
            }
          />
          <h3>{user.fullname}</h3>
          <p className="profile-left-each">{user.position}</p>
          <p className="profile-left-each">{user.location}</p>
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
          <table>
            <tr>
              <td>
                <p className="profile-right-non-main">Fullname:</p>
              </td>
              <td>
                <p className="profile-right-main">{user.fullname}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="profile-right-non-main">Education: </p>
              </td>
              <td>
                <p className="profile-right-main">{user.education}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="profile-right-non-main">Location: </p>
              </td>
              <td>
                <p className="profile-right-main">{user.location}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="profile-right-non-main">Position: </p>
              </td>
              <td>
                <p className="profile-right-main">{user.position}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="profile-right-non-main">Skills: </p>
              </td>
              <td>
                <p className="profile-right-main">{user.skills}</p>
              </td>
            </tr>
          </table>
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
