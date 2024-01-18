import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { API_URL } from "../constants";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { fetchSinglePlayer } from '../API/ajaxHelpers';

const SinglePlayer = () => {
  const [ playerInfo, setPlayerInfo] = useState({});
  const { playerid } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
   async function getPlayer() {
    const data = await fetchSinglePlayer(playerid);
    setPlayerInfo(data);
   }
   getPlayer();
   
  },[])
  
  return(
    <div className='container-singlePlayer'>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" 
      src={playerInfo.imageUrl} />
      <Card.Body>
        <Card.Title>{playerInfo.name}</Card.Title>
        <Card.Text> 
          Breed : {playerInfo.breed}
        </Card.Text>
         <Card.Text> 
          Status : {playerInfo.status}
        </Card.Text>
        <Card.Text>
          TeamId : {playerInfo.teamId}
        </Card.Text>
        <Card.Text>
          Cohort : {playerInfo.cohortId}
        </Card.Text>
        <Button variant="primary" 
        onClick={(e) => navigate(`/`) }>
          Go Back</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default SinglePlayer;