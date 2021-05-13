import React, { Component } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';

const SERVER_FLIGHTS_URL = "https://burningairline.herokuapp.com/flights.json";

export class CreateFlight extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      flight_from: "",
      flight_to: "",
      plane: "",
    };
    this._handleSubmit = this._handleSubmit.bind(this);
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
      <div className="form-group">
        Create Flight
        <form onSubmit={this._handleSubmit}>
          <label>
            From
            <input
              className="form-control"
              onChange={this._handleDeparture}
              placeholder="Departure City"
            />
          </label>

          <label>
            To
            <input className="form-control" onChange={this._handleArrival} placeholder="Arrival City" />
          </label>

          <label>
            Date
            <input className="form-control" type="date" onChange={this._handleDate} />
          </label>

          <label>
            Plane:
            <select onChange={this._handlePlane}>
              <option value="" selected>
                -
              </option>
              <option value="BA100">BA100</option>
              <option value="BA282">BA282</option>
              <option value="BA780">BA780</option>
              <option value="BA622">BA622</option>
            </select>
          </label>

          <input
            className="form-control"
            id="submit"
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
