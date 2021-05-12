import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
<<<<<<< HEAD
      <Link to='Search'>Search</Link>
      <Link to='CreatePlane'>CreatePlane</Link>
=======
      <Link to="Search">Search</Link>
      <Link to="createFlight">CreatFlight</Link>
>>>>>>> c10b2f86065c8e38bf19b642926543873a6fa435
    </nav>
  );
}
