import AllPlayers from './components/AllPlayers'
import {Route, Routes} from 'react-router-dom';
import SinglePlayer from './components/SinglePlayer';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<AllPlayers />} />
        <Route path='/players/:playerid' element={<SinglePlayer />} />
      </Routes>
      
    </>
  )
}

export default App
