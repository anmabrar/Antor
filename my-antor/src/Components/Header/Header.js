import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const{user,logOut} = useAuth();
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className="fs-3 text fw-bolder" to="/home">Antor</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
      <Nav.Link as={NavLink} to="/psychiatrists">Psychiatrists</Nav.Link>
    </Nav>
    <Nav className="d-flex align-items-center">
      <span className="text-light px-3">{user.displayName} </span>
    { 
      user.email ?
        <button className="btn btn-primary my-1" onClick={logOut} >Logout</button>
      :
      <Nav.Link as={NavLink} to="/login">
        <button className="btn btn-primary " onClick={logOut} >Login</button>
        </Nav.Link>
    }
   
    <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
       
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;