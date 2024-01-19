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
  const [sucessMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();




  async function submitHandler(e) {
    e.preventDefault();
    if(!newPlayer.name || !newPlayer.breed) {
      setError('Please Enter PlayerName and Breed')
    } else {
      const response = await createNewPlayer(newPlayer);
      if(response.success){
        console.log('Response.success');
        setSuccessMessage(`Player ${newPlayer.name} created!!!`);
        clearInput();
        clearError();

      }else {
        setError('OOPs something is wrong please try again later!');
      }
    }
  }

  function clearError() {
    setError(null);
  }
  function clearInput() {
    setNewPlayer({
      name : '',
      breed : '',
      status : 'bench',
      imageUrl : '',
      teamId : 0
    })
  }
  return (
  
  <div className='form-container'>
     {error && <p className="errorMessage">{error}</p>}
    {sucessMessage && <h4 className="successMessage">{sucessMessage}</h4>}
    <h3>New Player</h3>
    <form onSubmit={submitHandler} className='newPlayer-form'>
      <label > Name   
        <input type='text' name="name" value={newPlayer.name} 
        onChange={(e) => { 
          clearError(null);
          setSuccessMessage(null);
          setNewPlayer({
          ...newPlayer,
          [e.target.name]:e.target.value})}}/>
      </label>
      < br />
      <label > Breed   
        <input type='text' name='breed'
         value={newPlayer.breed}
         onChange={(e) => {
          clearError(null);
          setSuccessMessage(null);
          setNewPlayer({
          ...newPlayer,
          [e.target.name]:e.target.value
         })}}/>
      </label>
       < br />
      <label > Status
        <select name='status'  value={newPlayer.status}
        onChange={(e) => {
          clearError(null);
          setSuccessMessage(null)
          setNewPlayer({
            ...newPlayer,
            status:e.target.value
          })}}>
          <option>bench</option>
          <option>field</option>
        </select> 
      
      </label>
       < br />
       <label > Image   
        <input type='text' name='imageUrl' 
        onChange={(e) => {
          clearError(null);
          setSuccessMessage(null);
          setNewPlayer({
          ...newPlayer,
          [e.target.name]:e.target.value
        })}}
        value={newPlayer.imageUrl} />
      </label>
       < br />
       <label > TeamId   
        <input type='text' name="teamId" 
        value={newPlayer.teamId}
        onChange={(e) => {
          clearError(null);
          setSuccessMessage(null);
          setNewPlayer({
          ...newPlayer,
          [e.target.name]:e.target.value
        })}}/>
      </label>
       < br />
       <button className='newplayer-submit'>Submit</button>
    </form>
    
  </div>
  )
}


export default NewPlayer;