import React, { Component } from 'react';

// class FlightList extends Component {
//   constructor(props){
//     super(props);
//     this.setState({
//
//     })
//   }
//   render(){
//     return(
//       <div>
//         <div className="flight_date">
//           <h4>Date</h4>
//           { props.flights.map( (f) => <p key={f.id}>{ f.date }</p>)}
//         </div>
//         <div className="flight_number">
//           <h4>Flight</h4>
//         </div>
//         <div className="flight_from_to">
//           <h4>from-to</h4>
//         </div>
//         <div className="flight_plane">
//           <h4>Plane</h4>
//         </div>
//       </div>
//     );
//   }
// }

const FlightList = (props) => {
    return (
      <div>
        <div className="flight_date">
          <h4>Date</h4>
          { props.flights.map( (f) => <p key={f.id}>{ f.date }</p>)}
        </div>
        <div className="flight_number">
          <h4>Flight</h4>
          { props.flights.map( (f) => <p key={f.id}>{ f.flight }</p>)}
        </div>
        <div className="flight_from_to">
          <h4>from-to</h4>
          { props.flights.map( (f) => <p key={f.id}>{ f.flight_from } - { f.flight_to }</p>)}
        </div>
        <div className="flight_plane">
          <h4>Plane</h4>

        </div>
      </div>
    );

}


export default FlightList;
