import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/Settings.css";

function buildAxios() {
  return axios.create({
    baseURL: "http://localhost:3001",
    timeout: 1000,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export default function Settings() {
  const [user, setUser] = useState({});
  const [form, setForm] = useState({
    avatarUrl: "https://bootdey.com/img/Content/avatar/avatar5.png",
    fullname: "",
    education: "",
    email: "",
    location: "",
    skills: "",
    position: "",
  });

  useEffect(() => {
    console.log("effect: load");
    buildAxios()
      .get(`/api/users/info`)
      .then((response) => {
        console.log("User loaded");
        console.log(response.data);
        setUser(response.data);
        setForm({
          avatarUrl: response.data.avatar,
          fullname: response.data.fullname,
          education: response.data.education,
          email: response.data.email,
          location: response.data.location,
          skills: response.data.skills,
          position: response.data.position,
        });
      });
  }, []);

  const onAvatarChange = async (e) => {
    console.log(e);
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("avatar", file, file.name);
    try {
      const result = await buildAxios().post(`/api/upload/`, formData);
      setForm(
        Object.assign({}, form, {
          avatarUrl: `http://localhost:3001/${result.data.path}`,
        })
      );
    } catch (error) {
      console.error(error);
      alert("Failed to upload avatar");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user.id);
    console.log(form);
    buildAxios()
      .put(`/api/users/${user._id}`, {
        avatar: form.avatarUrl,
        fullname: form.fullname,
        education: form.education,
        email: form.email,
        location: form.location,
        skills: form.skills,
        position: form.position,
      })
      .then((res) => {
        console.log("asd");
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
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
                <img src={form.avatarUrl} alt="avatar" className="avatar-img" />

                <input
                  type="file"
                  id="avatar-img"
                  name="avatar-img"
                  accept="image/png, image/jpeg"
                  style={{ border: "none" }}
                  onChange={onAvatarChange}
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
                    value={form.fullname}
                    onChange={(e) =>
                      setForm(
                        Object.assign({}, form, { fullname: e.target.value })
                      )
                    }
                  />
                </div>
                <div className="form-group col-md-12">
                  <label>Education</label>
                  <input
                    type="text"
                    className="input-form-control"
                    value={form.education}
                    onChange={(e) =>
                      setForm(
                        Object.assign({}, form, { education: e.target.value })
                      )
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="input-form-control"
                  value={form.email}
                  onChange={(e) =>
                    setForm(Object.assign({}, form, { email: e.target.value }))
                  }
                />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  className="input-form-control"
                  value={form.location}
                  onChange={(e) =>
                    setForm(
                      Object.assign({}, form, { location: e.target.value })
                    )
                  }
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Skills</label>
                  <input
                    type="text"
                    className="input-form-control"
                    value={form.skills}
                    onChange={(e) =>
                      setForm(
                        Object.assign({}, form, { skills: e.target.value })
                      )
                    }
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Position</label>
                  <select className="input-form-control">
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
                    <input type="password" className="input-form-control" />
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
