import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { API_URL } from "../constants";

const SinglePlayer = () => {
  const [singlePlayer, setSinglePlayer ] = useState({});

  const { playerid } = useParams();
  console.log('PlayerId:', playerid);
  useEffect(() => {
   async function getPlayer() {
    try {
      const result = await fetch(`${API_URL}/${playerid}`);
      const json = await result.json();
      setSinglePlayer(json);
    } catch(error) {
      console.log(error);
    }
   }
   getPlayer();
  })
  
  return(
    <div>
      SinglePlayer
    </div>
  )
}

export default SinglePlayer;