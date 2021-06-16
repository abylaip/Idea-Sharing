import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "moment";
import "../assets/css/Profile.css";
import {
  Alert,
  InputGroup,
  FormControl,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function buildAxios() {
  return axios.create({
    baseURL: "http://localhost:3001",
    timeout: 1000,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export default function Profile() {
  const [user, setUser] = useState({});
  const [ideas, setIdeas] = useState([]);
  const [submitTitle, setSubmitTitle] = useState("");
  const [submitContent, setSubmitContent] = useState("");
  const [newIdea, setNewIdea] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("effect: loaded");
    buildAxios()
      .get(`/api/users/info`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      });

    buildAxios()
      .get(`/api/ideas/`)
      .then((response) => {
        console.log("Ideas loaded");
        setIdeas(response.data);
      });
  }, []);

  const ideaForm = (author, postedDate, title, content, connectedUsers) => {
    const date = Moment(postedDate).format("DD-MM-YYYY");
    return (
      <div className="profile-idea">
        <h4>{author}</h4>
        <p>{date}</p>
        <h4>{title}</h4>
        <p>{content}</p>
        <OverlayTrigger
          key={"top"}
          placement={"top"}
          overlay={
            <Tooltip id={`tooltip-${"top"}`}>
              <table className="tooltip-table">
                <tbody>
                  {connectedUsers.map((connectedUser) => {
                    console.log(connectedUser.fullname);
                    return (
                      <tr>
                        <td>{connectedUser.fullname}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Tooltip>
          }
        >
          <Button variant="secondary">
            {0 | connectedUsers.length} people connected
          </Button>
        </OverlayTrigger>
      </div>
    );
  };

  const handleSubmitIdea = () => {
    buildAxios()
      .post(`/api/ideas/`, {
        title: submitTitle,
        content: submitContent,
      })
      .then((response) => {
        setNewIdea(response.data);
        console.log(newIdea);
        buildAxios()
          .get(`/api/ideas/`)
          .then((res) => {
            console.log("Ideas loaded");
            setIdeas(res.data);
          });
      });
    setShow(true);
    setSubmitTitle("");
    setSubmitContent("");
    const timeId = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(timeId);
    };
  };

  return (
    <div className="profile-body">
      <Alert
        variant="success"
        style={{
          opacity: show ? "1" : "0",
          position: "absolute",
          width: "1035px",
          top: "630px",
        }}
      >
        Your idea has been successfully submitted. Develop your creativity!
      </Alert>
      <div className="profile-main-info">
        <div className="profile-left">
          <img className="avatar" src={user.avatar} />
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
            name="title"
            value={submitTitle}
            aria-describedby="inputGroup-sizing-default"
            placeholder="Title"
            onChange={(e) => setSubmitTitle(e.target.value)}
          />
        </InputGroup>
        <InputGroup size="sm">
          <InputGroup.Prepend>
            <InputGroup.Text>Description</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            as="textarea"
            value={submitContent}
            name="description"
            aria-label="Description"
            onChange={(e) => setSubmitContent(e.target.value)}
          />
        </InputGroup>
        <br />
        <Button
          variant="success"
          size="lg"
          block
          style={{ width: 200 }}
          onClick={handleSubmitIdea}
        >
          Submit idea
        </Button>
      </div>
      <div className="profile-ideas">
        {ideas.map((idea) =>
          ideaForm(
            idea.author,
            idea.createdAt,
            idea.title,
            idea.content,
            idea.connectedUsers
          )
        )}
      </div>
    </div>
  );
}
