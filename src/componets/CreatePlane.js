import React, { Component } from "react";
import axios from "axios";

const SERVER_AIRPLANE_URL = "http://localhost:3000/airplanes.json";

class CreatePlane extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      row: 0,
      column: 0,
    };
    this._handleName = this._handleName.bind(this);
    this._handleRow = this._handleRow.bind(this);
    this._handleColumn = this._handleColumn.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleCreate = this._handleCreate.bind(this);
  }

  componentDidMount() {
    //Polling:
    const fetchAirplanes = () => {
      axios.get(SERVER_AIRPLANE_URL).then((results) => {
        console.log(results);
        console.log(results);
        this.setState({
          name: results.data.name,
          row: results.data.row,
          column: results.data.column,
        });
        // setTimeout(fetchAirplanes, 4000); // recursion: setInterval is a luxury
      });
    };
    fetchAirplanes();
  }

  _handleName(event) {
    this.setState((state) => ({ ...state, name: event.target.value }));
  }

  _handleRow(event) {
    this.setState((state) => ({ ...state, row: event.target.value }));
  }

  _handleColumn(event) {
    this.setState((state) => ({ ...state, column: event.target.value }));
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.setState({
      name: "",
      row: 0,
      column: 0,
    });
  }

  _handleCreate(event) {
    const data = {
      name: this.state.name,
      row: this.state.row,
      column: this.state.column,
    };
    console.log(data);

    axios.post(SERVER_AIRPLANE_URL, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <h1> New Airplane</h1>
          <h3>Plane name</h3>
          <input onChange={this._handleName} placeholder="plane name" />

          <h3>Row</h3>
          <input onChange={this._handleRow} type="number" placeholder="rows" />

          <h3>Column</h3>
          <input
            onChange={this._handleColumn}
            type="number"
            placeholder="columns"
          />
          <input
            onClick={this._handleCreate}
            type="submit"
            value="Create Airplane"
          />
        </form>
      </div>
    );
  }
}
export default CreatePlane;
