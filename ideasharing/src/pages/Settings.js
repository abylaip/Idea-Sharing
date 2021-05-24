import React from "react";
import "../assets/css/Settings.css";

export default function Settings() {
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
                  src="https://bootdey.com/img/Content/avatar/avatar5.png"
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
                  <label for="fullname">Full name</label>
                  <input
                    type="text"
                    id="fullname"
                    className="input-form-control"
                    placeholder="Abylay Aiyp"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="lastname">Education</label>
                  <input
                    type="text"
                    id="education"
                    className="input-form-control"
                    placeholder="MIT"
                  />
                </div>
              </div>
              <div className="form-group">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  className="input-form-control"
                  id="inputEmail4"
                  placeholder="Abylay@Aiyp.me"
                />
              </div>
              <div className="form-group">
                <label for="location">Location</label>
                <input
                  type="text"
                  className="input-form-control"
                  id="location"
                  placeholder="Almaty, Kazakhstan"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="skills">Skills</label>
                  <input
                    type="text"
                    className="input-form-control"
                    id="skills"
                    placeholder="Full-Stack Developer"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="position">Position</label>
                  <select id="position" className="input-form-control">
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
                    <label for="inputPassword4">Old Password</label>
                    <input
                      type="password"
                      className="input-form-control"
                      id="inputPassword5"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputPassword5">New Password</label>
                    <input
                      type="password"
                      className="input-form-control"
                      id="inputPassword5"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputPassword6">Confirm Password</label>
                    <input
                      type="password"
                      className="input-form-control"
                      id="inputPassword6"
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
              <button className="save-button">Save Change</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
