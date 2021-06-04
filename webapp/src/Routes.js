import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import App from "./App";
import { Login } from "./pages/Login";

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={App} />
          <Route path="/login" component={Login} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    </Router>
  );
}
