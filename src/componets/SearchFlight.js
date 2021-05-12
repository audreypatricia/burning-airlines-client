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
        console.log(result.data[0].airplane.name);
        let filteredResults = [];
        for(let i = 0; i < result.data.length; i++){
          if(result.data[i].flight_from.toLowerCase() === from.toLowerCase() && result.data[i].flight_to.toLowerCase() === to.toLowerCase() ){
            filteredResults.push(result.data[i]);
          }
        }
        this.setState({ flights: filteredResults });
      });
  }

  render() {
    return(
      <div>
        <SearchForm onSubmit={ this.fetchFlights }/>
        <FlightList flights={ this.state.flights }/>
      </div>
    );
  }
}

export default SearchFlight;
