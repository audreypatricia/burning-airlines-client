import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
<<<<<<< HEAD
      <Link to='Search'>Search</Link>
      <Link to='Search.:id'>Select Seat</Link>
=======

      <Link to="Search">Search</Link>
      <Link to="CreatePlane">CreatePlane</Link>
      <Link to="createFlight">CreatFlight</Link>
>>>>>>> 62003b6e25dc29a137eef12565b0a932abe00ef1
    </nav>
  );
}
