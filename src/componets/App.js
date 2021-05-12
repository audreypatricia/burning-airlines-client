import SearchFlight from "./SearchFlight";
import CreateFlight from "./CreateFlight";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <p> Burning Airline Reservation</p>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <SearchFlight />
          </Route>
<<<<<<< HEAD
          <Route exact path="/createFlight">
            <CreateFlight />
=======
          <Route exact path="/search">
            <CreatePlane />
>>>>>>> 4c166326b4cf8c0f76c4fffbaf18cdb716088b5b
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
