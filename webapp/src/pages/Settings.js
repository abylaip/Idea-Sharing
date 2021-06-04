import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/Settings.css";

export default function Settings() {
  const [user, setUser] = useState({});
  const [ava, setAva] = useState();
  const [fullname, setFullname] = useState("");
  const [education, setEducation] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [position, setPosition] = useState("");
  const [password, setPassword] = useState("");

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

  const handleFullnameChange = (event) => {
    console.log(event.target.value);
    setFullname(event.target.value);
  };
  const handleEducationChange = (event) => {
    console.log(event.target.value);
    setEducation(event.target.value);
  };
  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handleLocationChange = (event) => {
    console.log(event.target.value);
    setLocation(event.target.value);
  };
  const handleSkillsChange = (event) => {
    console.log(event.target.value);
    setSkills(event.target.value);
  };
  const handlePositionChange = (event) => {
    console.log(event.target.value);
    setPosition(event.target.value);
  };
  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    console.log(user.id);
    axios
      .post(
        `http://localhost:3001/api/users/${user.id}`,
        {
          // avatar: ava,
          // fullname: fullname,
          education: education,
          // email: email,
          location: location,
          // skills: skills,
          position: position,
          // password: password,
        },
        config
      )
      .then((res) => {
        console.log("asd");
        console.log(res.data);
      })
      .catch((error) => {
        alert("Something went wrong, write information correctly");
      });
  };
  return (
    <div className="settings-body">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8 mx-auto">
          <div className="my-4">
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Profile
                </a>
              </li>
            </ul>
            <form>
              <div className="avatar-top row">
                <img
                  src={
                    user.avatar
                      ? "http://localhost:3001" + user.avatar
                      : "https://bootdey.com/img/Content/avatar/avatar5.png"
                  }
                  alt="avatar"
                  className="avatar-img"
                />

                <input
                  type="file"
                  id="avatar-img"
                  name="avatar-img"
                  accept="image/png, image/jpeg"
                  style={{ border: "none" }}
                  className="col-md-12"
                ></input>
              </div>
              <hr className="my-4" />
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>Full name</label>
                  <input
                    type="text"
                    name="fullname"
                    className="input-form-control"
                    placeholder={user.fullname}
                    onChange={handleFullnameChange}
                  />
                </div>
                <div className="form-group col-md-12">
                  <label>Education</label>
                  <input
                    type="text"
                    className="input-form-control"
                    placeholder={user.education}
                    onChange={handleEducationChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="input-form-control"
                  placeholder={user.email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  className="input-form-control"
                  placeholder={user.location}
                  onChange={handleLocationChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Skills</label>
                  <input
                    type="text"
                    className="input-form-control"
                    placeholder={user.skills}
                    onChange={handleSkillsChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Position</label>
                  <select
                    className="input-form-control"
                    onChange={handlePositionChange}
                  >
                    <option selected="">Choose...</option>
                    <option>Software Engineer</option>
                    <option>Enterpreneur</option>
                    <option>Team</option>
                  </select>
                </div>
              </div>
              <hr className="my-4" />
              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Old Password</label>
                    <input type="password" className="input-form-control" />
                  </div>
                  <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="input-form-control" />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="input-form-control"
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <p className="mb-2">Password requirements</p>
                  <p className="small text-muted mb-2">
                    To create a new password, you have to meet all of the
                    following requirements:
                  </p>
                  <ul className="small text-muted pl-4 mb-0">
                    <li>Minimum 8 character</li>
                    <li>At least one special character</li>
                    <li>At least one number</li>
                    <li>Can’t be the same as a previous password</li>
                  </ul>
                </div>
              </div>
              <button className="save-button" onClick={handleSubmit}>
                Save Change
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}