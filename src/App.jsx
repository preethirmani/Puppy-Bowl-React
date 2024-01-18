import {Routes, Route} from 'react-router-dom';
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer';
import Navigation from './components/Navigation';
import NewPlayer from './components/NewPlayer';




function App() {


  return (
    <>
    
      <Navigation />
        <Routes>
          <Route path='/' element={<AllPlayers />} />
          <Route path='/players/:playerid' element={<SinglePlayer />} />
          <Route path='/newPlayer' element={<NewPlayer />} />
        </Routes>
    
      
    </>
  )
}

export default App
