import Headcomponent from "./components/Headcomponent";
import Slogancomponent from "./components/Slogancomponent";
import Clock from "./components/Clock";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <Headcomponent />
      <Slogancomponent />
      <Clock />
    </div>
  );
}

export default App;
