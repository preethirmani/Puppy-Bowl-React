import { useState } from 'react';
import { createNewPlayer } from '../API/ajaxHelpers';
import { useNavigate } from 'react-router';
import '../index.css';


const NewPlayer = () => {

  const [newPlayer, setNewPlayer] = useState({
    name : '',
    breed : '',
    status : 'bench',
    imageUrl : '',
    teamId : 0
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();




  function submitHandler(e) {
    e.preventDefault();
    createNewPlayer(newPlayer);
    navigate('/');
  }
  return (
  
  <div className='form-container'>
    <h1>New Player</h1>
    <form onSubmit={submitHandler} className='newPlayer-form'>
      <label > Name   
        <input type='text' name="name" value={newPlayer.name} 
        onChange={(e) => setNewPlayer({
          ...newPlayer,
          [e.target.name]:e.target.value})}/>
      </label>
      < br />
      <label > Breed   
        <input type='text' name='breed'
         value={newPlayer.breed}
         onChange={(e) => setNewPlayer({
          ...newPlayer,
          [e.target.name]:e.target.value
         })}/>
      </label>
       < br />
      <label > Status
        <select name='status'  value={newPlayer.status}
        onChange={(e) => setNewPlayer({
            ...newPlayer,
            status:e.target.value
          })}>
          <option>Bench</option>
          <option>Field</option>
        </select> 
      
      </label>
       < br />
       <label > Image   
        <input type='text' name='imageUrl' 
        onChange={(e) => setNewPlayer({
          ...newPlayer,
          [e.target.name]:e.target.value
        })}
        value={newPlayer.imageUrl} />
      </label>
       < br />
       <label > TeamId   
        <input type='text' name="teamId" 
        value={newPlayer.teamId}
        onChange={(e) => setNewPlayer({
          ...newPlayer,
          [e.target.name]:e.target.value
        })}/>
      </label>
       < br />
       <button className='newplayer-submit'>Submit</button>
    </form>
    
  </div>
 

  )
}


export default NewPlayer;