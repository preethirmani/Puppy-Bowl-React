import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { searchPlayer } from '../API/ajaxHelpers';
import '../index.css';

const Navigation = ({allPlayers, setSearchedPlayers}) => {
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState('');

  const handleSubmit = (e) => {
    console.log('handleSubmit called!');
    console.log('PlayerName afterSubmit', playerName);
    searchPlayer();
    clearSearchInput();
  }

  function searchPlayer() {
    const players = allPlayers.filter(player => {
      return player.name.toLowerCase() === playerName.toLowerCase();
    });
    console.log(players);
    setSearchedPlayers(players);
    navigate(`/search`);
  }

  function clearSearchInput(){
    setPlayerName('');
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
              onChange={(e) => {
                console.log('playername onChange',e.target.value);
                setPlayerName(e.target.value)}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name='search'
              value={playerName}
            />
            <Button variant="outline-success" onClick={handleSubmit}>Search</Button>
          </Form>
        </Container>
  </Navbar>
  </>
  )
}

export default Navigation;

