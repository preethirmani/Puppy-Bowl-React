import { useState, useEffect } from "react";
import '../index.css'
import { Link, useNavigate } from "react-router-dom";
import { fetchAllPlayers, deletePlayer } from "../API/ajaxHelpers";


const AllPlayers = () => {

  const [players, setPlayers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayers(){
      const data = await  fetchAllPlayers();
      console.log(data);
      setPlayers(data);
      console.log(players);
    } 
    getPlayers();

  },[])

    async function handleDelete(playerId) {
      await deletePlayer(playerId); 
      window.location.reload();
    }
  return(
    <div className="container">
      {
        players.map(player => {
          return(
            <div className="player-card" key={player.id}> 
             <div className="player-div"> 
                <img className='player-image' src={player.imageUrl}
                 onClick={() => navigate(`/players/${player.id}`) }/>
              </div>
              <div className="player-info"> 
              <h4>{player.name}</h4>
              <div>
                <strong>Breed: </strong>
                {player.breed}
              </div>
              <div>
                <strong>Status: </strong>
                {player.status}
              </div>
              <Link onClick={(e) => handleDelete(player.id)}
              >
                Delete</Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default AllPlayers;