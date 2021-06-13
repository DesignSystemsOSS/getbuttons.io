
import { Route, HashRouter } from "react-router-dom";
import Home from "./Views/Home";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Route path="/" exact component={Home} />
      </HashRouter>
    </div>
  );
}

export default App;
