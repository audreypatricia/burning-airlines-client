import SearchFlight from "./SearchFlight";
import CreateFlight from "./CreateFlight";
import Home from "./Home";
import SelectSeat from "./SelectSeat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import CreatePlane from "./CreatePlane";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <p> Burning Airline Reservation</p>
        <Switch>
          <div>
            <Route exact path="/">
              <Home />
            </Route>
          </div>
          <div>
            <Route exact path="/search">
              <SearchFlight />
            </Route>
          </div>

          <Route path="/search/:id" component={SelectSeat} />

          <Route exact path="/createFlight">
            <CreateFlight />
          </Route>

          <Route exact path="/createPlane">
            <CreatePlane />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
