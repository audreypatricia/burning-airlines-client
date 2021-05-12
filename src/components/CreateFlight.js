import React, { Component } from "react";
import axios from "axios";

const SERVER_FLIGHTS_URL = "http://localhost:3000/flights.json";

export class CreateFlight extends Component {
  constructor() {
    super();
    this.state = {
      flightnumber: "",
      date: "",
      flight_from: "",
      flight_to: "",
      plane: "",
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleFlightnumber = this._handleFlightnumber.bind(this);
    this._handleCreate = this._handleCreate.bind(this);
    this._handleDeparture = this._handleDeparture.bind(this);
    this._handleArrival = this._handleArrival.bind(this);
    this._handleDate = this._handleDate.bind(this);
    this._handlePlane = this._handlePlane.bind(this);
  }

  componentDidMount() {
    //Polling:
    const fetchFligts = () => {
      axios.get(SERVER_FLIGHTS_URL).then((results) => {
        console.log(results);
        this.setState({
          flightnumber: results.data.flightnumber,
          date: results.data.date,
          flight_from: results.data.flight_from,
          flight_to: results.data.flight_to,
          plane: results.data.plane,

        });
        // setTimeout(fetchFligts, 4000); // recursion: setInterval is a luxury
      });
    };
    fetchFligts();
  }

  _handleFlightnumber(event) {
    this.setState((state) => ({ ...state, flightnumber: event.target.value }));
  }

  _handleDate(event) {
    this.setState((state) => ({ ...state, date: event.target.value }));
  }

  _handleDeparture(event) {
    this.setState((state) => ({ ...state, flight_from: event.target.value }));
  }

  _handleArrival(event) {
    this.setState((state) => ({ ...state, flight_to: event.target.value }));
  }

  _handlePlane(event) {
    this.setState((state) => ({ ...state, plane: event.target.value }));
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.setState({
      flightNumber: "",
      date: "",
      flight_from: "",
      flight_to: "",
      plane: "",
    });
  }

  _handleCreate(event) {
    const data = {
      flightnumber: this.state.flightnumber,
      date: this.state.date,
      flight_from: this.state.flight_from,
      flight_to: this.state.flight_to,
      plane: this.state.plane,

    };
    console.log(data);

    axios.post(SERVER_FLIGHTS_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  render() {
    return (
      <div>
        Create Flight
        <form onSubmit={this._handleSubmit}>
          <label>
            Flight Number
            <input
              onChange={this._handleFlightnumber}
              placeholder="Flight Number"
            />
          </label>

          <label>
            From
            <input
              onChange={this._handleDeparture}
              placeholder="Departure City"
            />
          </label>

          <label>
            To
            <input onChange={this._handleArrival} placeholder="Arrival City" />
          </label>

          <label>
            Date
            <input type="date" onChange={this._handleDate} />
          </label>

          <label>
            Plane:
            <select onChange={this._handlePlane}>
              <option value="" selected>
                -
              </option>
              <option value="A380">Airbus A380</option>
              <option selected value="A320">
                Airbus A320
              </option>
            </select>
          </label>

          <input
            onClick={this._handleCreate}
            type="submit"
            value="Create Flight"
          />
        </form>
      </div>
    );
  }
}

export default CreateFlight;
