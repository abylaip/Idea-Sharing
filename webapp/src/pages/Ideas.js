import React, { useState, useEffect } from "react";
import {
  Alert,
  InputGroup,
  FormControl,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Moment from "moment";
import axios from "axios";
import "../assets/css/Ideas.css";
import ModalMoreInfo from "../components/ModalMoreInfo";
import { Link } from "react-router-dom";

function buildAxios() {
  return axios.create({
    baseURL: "http://localhost:3001",
    timeout: 30000,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}

export default function Ideas() {
  const [show, setShow] = useState(false);
  const [ideas, setIdeas] = useState([]);
  const [ideaUser, setIdeaUser] = useState({});
  const [ideaId, setIdeaId] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showRegistered, setShowRegistered] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log(window.signed);
    console.log(window.setted);
    if (window.signed === true && window.setted === false) {
      console.log("asdasd");
      setShowRegistered(true);
    }
    console.log("effect: load");
    buildAxios()
      .get(`/api/ideas/all`)
      .then((response) => {
        console.log("Ideas loaded");
        setIdeas(response.data);
      });
  }, []);

  const hideHandler = () => setShow(false);

  const handleSendConnection = () => {
    setShowAlert(true);
    buildAxios()
      .get(`/api/ideas/idea/${ideaId}/connect`)
      .then((response) => {
        console.log(response);
      });
    const timeId = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    return () => {
      clearTimeout(timeId);
    };
  };
  const ideaForm = (
    author,
    postedDate,
    title,
    content,
    connectedUsers,
    createdBy,
    user_id
  ) => {
    const date = Moment(postedDate).format("DD-MM-YYYY");
    return (
      <div className="ideas-idea">
        <Alert
          variant="success"
          style={{
            opacity: showAlert ? "1" : "0",
            position: "absolute",
            width: "1010px",
            top: "150px",
          }}
        >
          The request to connect with this user has been successfully sent!
        </Alert>
        <ModalMoreInfo show={show} hide={hideHandler} user={ideaUser} />
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

        <br />
        <br />
        <Button
          variant="dark"
          className="cnct-btn"
          onClick={() => {
            setIdeaId(user_id);
            handleSendConnection();
          }}
        >
          Connect
        </Button>
        <Button
          onClick={() => {
            setShow(true);
            setIdeaUser(createdBy);
          }}
          variant="outline-primary"
        >
          More info
        </Button>
      </div>
    );
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  return (
    <div className="ideas-body">
      <Alert show={showRegistered} variant="success">
        <Alert.Heading>Welcome to Idea Sharing!</Alert.Heading>
        <p>
          We are very happy that you have registered in our service for the
          exchange of ideas. Here you can share your ideas, as well as find new
          inspirations! Since you are a new user, we ask you to fill in the
          items according to your data!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to="/settings">
            <Button
              onClick={() => setShowRegistered(false)}
              variant="outline-success"
            >
              Go to Settings!
            </Button>
          </Link>
        </div>
      </Alert>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search..."
          name="search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          onChange={handleSearch}
        />
      </InputGroup>
      {ideas
        .filter((title) => title.title.includes(`${search}`))
        .map((idea) =>
          ideaForm(
            idea.author,
            idea.createdAt,
            idea.title,
            idea.content,
            idea.connectedUsers,
            idea.createdBy,
            idea.id
          )
        )}
    </div>
  );
}
