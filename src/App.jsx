import {Routes, Route} from 'react-router-dom';
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer';
import Navigation from './components/Navigation';
import NewPlayer from './components/NewPlayer';
import { useState } from 'react';
import Search from './components/Search';




 function App() {
   const [allPlayers, setAllPlayers] = useState([]);
  const [searchedPlayers, setSearchedPlayers] = useState([]);


  return (
    <>
    
      <Navigation allPlayers={allPlayers} setSearchedPlayers={setSearchedPlayers}/>
        <Routes>
          <Route path='/' element={<AllPlayers setAllPlayers={setAllPlayers}/>} />
          <Route path='/players/:playerid' element={<SinglePlayer />} />
          <Route path='/newPlayer' element={<NewPlayer />} />
          <Route path='/search' element={<Search searchedPlayers={searchedPlayers} />} />

        </Routes>
    
      
    </>
  )
}

export default App
