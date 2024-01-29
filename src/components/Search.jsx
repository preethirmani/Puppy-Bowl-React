const Search = ({searchedPlayers}) => {
  console.log('From Search::', searchedPlayers)
  return(
    <>
    {searchedPlayers.length === 0 ? 
    <div>Sorry No players available...</div> 
    :
       <div className="container">
      {

        searchedPlayers.map(player => {
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
              
              </div>
            </div>
          )
        })
      }
    </div>
}

    </>
  )
}
export default Search;

