import React, { Component } from "react";

export class CreateFlight extends Component {
  //TODO: bring in the planes data from the server and loop through them as values for
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
            <select>
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
