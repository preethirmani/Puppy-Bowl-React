import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import '../index.css';

const Navigation = () => {
  const navigate = useNavigate();
  const [searchPup, setSearchPup] = useState({
    search : ''
  }
  );

  const handleSubmit = (e) => {
    console.log('here');
    navigate(``)
  }

  const handleChange = (e) => {
      e.preventDefault();
      console.log(e.target.value);
      setSearchPup({
      ...searchPup, 
      [e.target.name] : e.target.value
   });
  }
  return(
  <>
  <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <LinkContainer to='/'>
             <Navbar.Brand >Puppy Bowl</Navbar.Brand>
          </LinkContainer>
         
          <Nav className="me-auto">
            <LinkContainer to='/'>
               <Nav.Link >Home</Nav.Link>
            </LinkContainer>
          </Nav>

          <Nav className="new-player-menu">
            <LinkContainer to='/newPlayer'>
              <Nav.Link>NewPlayer</Nav.Link>
            </LinkContainer>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              id='search-input'
              onChange={handleChange}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name='search'
              value={searchPup.search}
            />
            <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
          </Form>
        </Container>
  </Navbar>
  </>
  )
}

export default Navigation;

