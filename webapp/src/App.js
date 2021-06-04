import React, { useState } from "react";
import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
import { NavigBar } from "./components/NavigBar";

function App() {
  const history = useHistory();
  const [logged, setLogged] = useState(false);

  const onLogin = () => {
    setLogged(true);
    history.push("/main");
  };
  const onLogOut = () => setLogged(false);

  return (
    <div className="App">
      <NavigBar isLogged={logged} onLogOut={onLogOut} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={() => <Login onLogin={onLogin} />} />
        <Route path="/registration" component={Registration} />
        <Route path="/main" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
