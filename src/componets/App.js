import SearchFlight from './SearchFlight';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <div className="App">
      <Navigation />
        <p> Burning Airline Reservation</p>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/search'>
            <SearchFlight />
          </Route>
        </Switch >
      </div>
    </Router>
  );
}

export default App;
