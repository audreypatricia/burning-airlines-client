import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import FlightList from './FlightList';

const SERVER_FLIGHTS_URL = "http://localhost:3000/flights.json";

class SearchFlight extends Component {
  constructor(){
    super();
    this.state = {
      flights: []
    }
    this.fetchFlights = this.fetchFlights.bind(this);
  }

  fetchFlights(from, to){
      console.log(`fetching flights from ${from} to ${to}`);
      axios.get(SERVER_FLIGHTS_URL).then( (result) => {
        console.log(result.data);
        this.setState({ flights: result.data });
      });
  }

  render() {
    return(
      <div>
        Search Flight feature coming soon
        <SearchForm onSubmit={ this.fetchFlights }/>
        <FlightList flights={ this.state.flights }/>
      </div>
    );
  }
}

export default SearchFlight;
