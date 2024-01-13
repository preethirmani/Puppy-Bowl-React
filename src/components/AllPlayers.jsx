import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../index.css'
import { Link } from "react-router-dom";

const API = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-pt-sf-b-peethi/players`;

const AllPlayers = () => {
  const [allPups, setAllPups] = useState([]);
  useEffect(() => {
    async function getAllPlayers() {
      try{
        const data = await fetch(API);
        const json = await data.json();
       // console.log(json.data.players);
        setAllPups(json.data.players);
        console.log(allPups);
      } catch(error) {
        console.log(error);
      }
    }
    getAllPlayers();
  },[])
  return(
  
    
    <div className="container">
      {
        allPups.map(pup => {
          return(
            <div className="player-card"> 
             <div className="player-div"> 
                <img className='player-image' src={pup.imageUrl}/>
              </div>
              <div className="player-info"> 
              <h4>{pup.name}</h4>
              <div>
                <strong>Breed: </strong>
                {pup.breed}
              </div>
              <div>
                <strong>Status: </strong>
                {pup.status}
              </div>
              <a><Link>Delete</Link></a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default AllPlayers;