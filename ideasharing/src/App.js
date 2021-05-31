import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
import { NavigBar } from "./components/NavigBar";

function App() {
  const [logged, setLogged] = useState(true);
  const logOutHandler = () => setLogged(false);
  const logInHandler = () => setLogged(true);
  return (
    <div className="App">
      <NavigBar isLogged={logged} logInHandler={logInHandler} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/login"
          component={() => <Login logOutHandler={logOutHandler} />}
        />
        <Route path="/registration" component={Registration} />
        <Route path="/main" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
