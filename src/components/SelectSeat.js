import React, { Component } from 'react';
import axios from 'axios';

// const SERVER_URL_FLIGHT = "http://localhost:3000/flights/"

class SelectSeat extends Component {
  constructor() {
    super();
    this._fetchFlightData = this._fetchFlightData.bind(this);
  }

  _fetchFlightData() {
    axios.get(`http://localhost:3000/flights/${this.props.match.params.id}.json`).then( (result) => {
      console.log(result.data);
    });
  }

  render() {
    return(
      <div>

        <p> Hello from the select seat page {this.props.match.params.id} </p>
        <button onClick={this._fetchFlightData}> Confirm flight </button>

      </div>
    );
  }
}

export default SelectSeat;
