import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigBar } from "./components/NavigBar";
import { BackPic } from "./components/BackPic";
import { BodyInfo } from "./components/BodyInfo";
import { SiteFeatures } from "./components/SiteFeatures";

function App() {
  return (
    <div className="App">
      <BackPic />
      <NavigBar />
      <BodyInfo />
      <SiteFeatures />
    </div>
  );
}

export default App;
