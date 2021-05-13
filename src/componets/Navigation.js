import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      |
      <Link to="Search">Search</Link>
      |
      <Link to="CreatePlane">Create Plane</Link>
      |
      <Link to="createFlight">Create Flight</Link>

    </nav>
  );
}
