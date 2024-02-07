

import './App.css'
import { Route, Routes } from 'react-router-dom'
import MusicList from './pages/MusicList';
import RequestSong from './pages/RequestSong';


function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<MusicList/>} />
        <Route path='/list' element={<MusicList/>} />
        <Route path='/request' element={<RequestSong/>}/>
      </Routes>
    </main>
  )
}

export default App;
