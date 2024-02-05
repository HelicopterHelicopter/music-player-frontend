

import './App.css'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import MusicList from './pages/MusicList';
import RequestSong from './pages/RequestSong';


function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/list' element={<MusicList/>} />
        <Route path='/request' element={<RequestSong/>}/>
      </Routes>
    </main>
  )
}

export default App;
