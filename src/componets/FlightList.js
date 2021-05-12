
const FlightList = (props) => {
    return (
      <div>
        <div className="flight_date">
          <h4>Date</h4>
          { props.flights.map( (f) => <p key={f.id}>{ f.date }</p>)}
        </div>
        <div className="flight_number">
          <h4>Flight</h4>
          { props.flights.map( (f) => <p key={f.id}>{ f.id }</p>)}
        </div>
        <div className="flight_from_to">
          <h4>from-to</h4>
          { props.flights.map( (f) => <p key={f.id}>{ f.flight_from } - { f.flight_to }</p>)}
        </div>
        <div className="flight_plane">
          <h4>Plane</h4>
          { props.flights.map( (f) => <p key={f.id}>{ f.airplane_id }</p>)}

        </div>
      </div>
    );

}


export default FlightList;
