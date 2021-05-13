import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation =() => {
  return(
    <>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/search'>Search</Nav.Link>
              <Nav.Link href='/createPlane'>CreatePlane</Nav.Link>
              <Nav.Link href='/createFlight'>CreateFlight</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}

export default Navigation;
