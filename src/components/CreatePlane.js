import React, { Component } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
const SERVER_AIRPLANE_URL = "https://burningairline.herokuapp.com/airplanes.json";

class CreatePlane extends Component {
  constructor() {
    super();
    this.state = {
      airplanes: [
        {
          name: "",
          row: 0,
          column: 0,
        },
      ],
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
          airplanes: results.data,
        });
        // setTimeout(fetchAirplanes, 4000); // recursion: setInterval is a luxury

        setTimeout(fetchAirplanes, 1000); // recursion: setInterval is a luxury
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
      airplanes: [],
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
      <div className="form-group">
        <form onSubmit={this._handleSubmit}>
          <h1> New Airplane</h1>
          <h3>Plane name</h3>
          <input
            className="form-control"
            onChange={this._handleName}
            value={this.state.name}
            placeholder="plane name"
          />

          <h3>Row</h3>
          <input
            className="form-control"
            onChange={this._handleRow}
            value={this.state.row}
            type="number"
            placeholder="rows"
          />

          <h3>Column</h3>
          <input
            className="form-control"
            onChange={this._handleColumn}
            value={this.state.column}
            type="number"
            placeholder="columns"
          />
          <input
            className="form-control"
            id="submit"
            onClick={this._handleCreate}
            type="submit"
            value="Create Airplane"
          />
        </form>
        <AirplaneList airplanes={this.state.airplanes} />
      </div>
    );
  }
}

const AirplaneList = (props) => {
  return (
    <div>
      {props.airplanes.map((a) => (
        <p className="airplanes" key={a.id}>
          Airplane name:{a.name}, Rows: {a.row}, Columns: {a.column}
        </p>
      ))}
    </div>
  );
};

export default CreatePlane;
