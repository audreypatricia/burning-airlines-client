import React, { Component } from 'react';
import axios from 'axios';

// const SERVER_URL_FLIGHT = "http://localhost:3000/flights/"
function SeatSquare(props) {
    return (
      <button
        className="square"
        onClick={ props.onClick }
      >
        {props.value}
      </button>
    );
}

class PlaneMap extends Component {

    renderSeat(i){
      return (
        <SeatSquare
          value={this.props.seatSelection[i]}
          onClick = {() => this.props.onClick(i)} // TODO  create onMapClick in parent
        />
      )
    }

    render(){
      const rows = this.props.rows;
      const columns = this.props.columns;

      let totalSeats = rows * columns;
      let array = [];
      for(let i = 0; i < totalSeats; i++){
        array.push(this.renderSeat(i));
      }

      let result = new Array(Math.ceil(array.length / columns))
      .fill()
      .map(_ => array.splice(0, columns))

      console.log(result);

      return(

        <div>
          { result.map( (s) => <div>{s}<br/></div>)}
        </div>
      );
    }
}

class SelectSeat extends Component {
  constructor() {
    super();
    this.state = {
      flight: {},
      seat_selection: [],
      dataPresent: false,
    }
    this._fetchFlightData = this._fetchFlightData.bind(this);
  }

  _fetchFlightData() {
    axios.get(`http://localhost:3000/flights/${this.props.match.params.id}.json`).then( (result) => {
      console.log(result.data.airplane);

      const totalSquares = result.data.airplane.row * result.data.airplane.column;
      console.log(totalSquares);

      this.setState({
        flight: result.data,
        seat_selection: (result.data.seat_selection === null ? new Array(totalSquares).fill(null,0,totalSquares + 1): JSON.parse(result.data.seat_selection) ),
        dataPresent: true,
      })
      console.log(this.state.flight.airplane.row);
    });
  }

  _handleClick(i) {
    const current = this.state.seat_selection;
    const copySeatSelection = current.slice();
    const name = prompt("Enter name", " ");
    console.log(name);
    copySeatSelection[i] = name;
    console.log(i);
    this.setState({
      seat_selection: copySeatSelection,
    })
    console.log(JSON.stringify(this.state.seat_selection));

    // TODO: send a put request to update data
    axios.put(`http://localhost:3000/flights/${this.props.match.params.id}.json`, {
      seat_selection: JSON.stringify(this.state.seat_selection), // do i need to join array into text?
    }).then((result) => {
      console.log(result);
    });

  }

  render() {
    let planeMap;
    if(this.state.dataPresent === true){
      planeMap = <PlaneMap onClick={(i) => this._handleClick(i) } rows={this.state.flight.airplane.row} columns={ this.state.flight.airplane.column} seatSelection={this.state.seat_selection}/>;
    } else {
      planeMap = <p> Plane map not ready </p>;
    }

    return(
      <div>

        <p> Hello from the select seat page {this.props.match.params.id} </p>
        <button onClick={this._fetchFlightData}> Confirm flight </button>
        {planeMap}

      </div>
    );
  }
}





export default SelectSeat;
