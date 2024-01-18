import { API_URL } from "../constants";

export const fetchAllPlayers = async () => {
  console.log('FetchAllPlayers');
  try{
    const result = await fetch(API_URL);
    const json = await result.json();
    return json.data.players;
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

