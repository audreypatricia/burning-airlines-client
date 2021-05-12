import React, { Component } from "react";

export class CreateFlight extends Component {
    constructor() {
        super();
        this.state = {
        flightnumber: '',
        date: '',
        departure: '',
        arrival: '',
        plane: ''
      };
      this._handleChange = this._handleChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(event){
        event.preventDefault();
        this.props.onSubmit( this.state)
        this.setState({
        flightNumber: '',
        date: '',
        departure: '',
        arrival: '',
        plane: ''
      })
    }

    _handleChange(event) {
      let value = event.target.value;
      this.setState({[event.target.name]: value
    });
    console.log({[event.target.name]: value
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
              type="number"
              name="flightnumber"
              placeholder="Flight Number"
            />
          </label>

          <label>
            From
            <input type="text" name="departure" placeholder="Departure City" />
          </label>

          <label>
            To
            <input type="text" name="arrival" placeholder="Arrival City" />
          </label>

          <label>
            Date
            <input type="date" name="date" />
          </label>

          <label>
            Plane:
            <select name="plane">
              <option value="" selected>
                -
              </option>
              <option value="A380">Airbus A380</option>
              <option selected value="A320">
                Airbus A320
              </option>
            </select>
          </label>

          <button>Create Flight</button>
        </form>
      </div>
    );
  }
}

export default CreateFlight;
