import { API_URL } from "../constants";

let allPlayers = [];

export const fetchAllPlayers = async () => {
  console.log('FetchAllPlayers');
  try{
    const result = await fetch(API_URL);
    const json = await result.json();
    allPlayers = json.data.players;
    return json.data.players;
  }catch(error) {
    console.log(error);
  }
}

export const deletePlayer = async (id) => {
  try{
    const response = await fetch(`${API_URL}/${id}`, 
    {
      method: 'DELETE',

    });
    const result = await response.json();
    console.log('Result',result);
    return result;
  }catch(error) {
    console.log(error);
  }
}

export const fetchSinglePlayer = async (id) => {
  try{
    const result = await fetch(`${API_URL}/${id}`);
    const json = await result.json();
    console.log('fetchSinglePlayer::',json.data.player);
    return json.data.player;
  }catch(error) {
    console.log(error);
  }
}

export const createNewPlayer = async(newPlayer) => {
  try{
    console.log('NewPlayer:', newPlayer);
    const response = await fetch(`${API_URL}`, 
    {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        name : newPlayer.name,
        breed : newPlayer.breed,
        status : newPlayer.status,
        imageUrl : newPlayer.imageUrl,
        teamId : newPlayer.teamId

      }),
    });
    const result = await response.json();
    console.log('Result::',result);
    return result;

  }catch(error) {
    console.log(error);
    return error;
  }
}

export const searchPlayer = (playerName) => {
  
  const player = allPlayers.find((player) => {
 
     return player.name === playerName
  })
  
  return player.id;
  
}
