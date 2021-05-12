import SearchFlight from "./SearchFlight";
import CreateFlight from "./CreateFlight";
import Home from "./Home";
import SelectSeat from "./SelectSeat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import CreatePlane from "./CreatePlane";
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
