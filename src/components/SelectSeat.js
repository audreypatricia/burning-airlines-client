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

      console.log(result); //2

      return(

        <div className="planeMap">
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
    axios.get(`https://burningairline.herokuapp.com/flights/${this.props.match.params.id}.json`).then( (result) => {
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

    console.log(copySeatSelection);
    this.setState({
      seat_selection: copySeatSelection,
    })
    console.log(copySeatSelection);
    // console.log(JSON.stringify(this.state.seat_selection)); //1
    // setTimeout( function(){ }, 3000);
    axios.put(`https://burningairline.herokuapp.com/flights/${this.props.match.params.id}.json`, {
      seat_selection: JSON.stringify(copySeatSelection),
    }).then((result) => {
      console.log(result); // 3
    });
    console.log(JSON.stringify(this.state.seat_selection));

  }

  render() {
    let planeMap;
    let planeInfo;
    if(this.state.dataPresent === true){
      planeMap = <PlaneMap onClick={(i) => this._handleClick(i) } rows={this.state.flight.airplane.row} columns={ this.state.flight.airplane.column} seatSelection={this.state.seat_selection}/>;
      planeInfo = <h2>{this.state.flight.date}, Flight {this.state.flight.id}, from ({this.state.flight.flight_from}) to ({this.state.flight.flight_to}) </h2>
    } else {
      planeMap = <h3> Plane map not ready, please click button above so we remember the details of the plane you selected </h3>;
      planeInfo = "";
    }

    return(
      <div className="seatSelection">

        <h2> Hello from the select seat page for plane id: {this.props.match.params.id} </h2>
        <button className="remember_flight" onClick={this._fetchFlightData}> Confirm flight </button>
        {planeInfo}
        {planeMap}



      </div>
    );
  }
}





export default SelectSeat;
