import "./App.css";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { NavigBar } from "./components/NavigBar";

function App() {
  return (
    <div className="App">
      <NavigBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </div>
  );
}

export default App;
