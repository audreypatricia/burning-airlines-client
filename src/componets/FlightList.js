import React, { Component } from 'react';
// import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import SelectSeat from './SelectSeat';
import { BrowserRouter as Router, Switch } from "react-router-dom";

class FlightList extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  // componentDidMount(){
  //   const { match: { params } } = this.props;
  //
  //   axios.get(`http://localhost:3000/search/${params.id}`).then(({ data: flight}) => {
  //     console.log('flight', flight);
  //
  //     this.setState({ flight });
  //   });
  // }

  render() {
    return (
      <div>
        <div className="flight_date">
          <h4>Date</h4>
          { this.props.flights.map( (f) => <p key={f.id}>{ f.date }</p>)}
        </div>
        <div className="flight_number">
          <h4>Flight</h4>
            { this.props.flights.map( (f) => <Link to={'search/' + f.id} key={f.id}>{f.id}</Link> )}
        </div>
        <div className="flight_from_to">
          <h4>from-to</h4>
          { this.props.flights.map( (f) => <p key={f.id}>{ f.flight_from } - { f.flight_to }</p>)}
        </div>
        <div className="flight_plane">
          <h4>Plane</h4>
          { this.props.flights.map( (f) => <p key={f.id}>{ f.airplane.name }</p>)}

        </div>
      </div>
    );

  }

}


export default FlightList;
