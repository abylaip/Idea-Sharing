import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../assets/css/Main.css";
import Profile from "./Profile";
import Settings from "./Settings";
import Ideas from "./Ideas";
import ProfileIcon from "../assets/profile.png";
import IdeasIcon from "../assets/ideas.png";
import SettingsIcon from "../assets/settings.png";

const routes = [
  {
    path: "/profile",
    main: Profile,
  },
  {
    path: "/main",
    exact: true,
    main: Ideas,
  },
  {
    path: "/settings",
    main: Settings,
  },
];

export default function Main() {
  return (
    <Router>
      <div style={{ display: "flex", marginLeft: 100, marginRight: 100 }}>
        <div
          style={{
            padding: "10px",
            width: "15%",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              textAlign: "left",
            }}
          >
            <li>
              <Link to="/profile" style={{ color: "black" }}>
                <img
                  src={ProfileIcon}
                  alt="profile"
                  style={{ height: 15, width: 15 }}
                />
                Profile
              </Link>
            </li>
            <br />
            <li>
              <Link to="/main" style={{ color: "black" }}>
                <img
                  src={IdeasIcon}
                  alt="ideas"
                  style={{ height: 15, width: 15 }}
                />
                Ideas
              </Link>
            </li>
            <br />
            <li>
              <Link to="/settings" style={{ color: "black" }}>
                <img
                  src={SettingsIcon}
                  alt="settings"
                  style={{ height: 15, width: 15 }}
                />
                Settings
              </Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
