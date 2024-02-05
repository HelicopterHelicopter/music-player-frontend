

import './App.css'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import MusicList from './pages/MusicList';


function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/list' element={<MusicList/>} />
      </Routes>
    </main>
  )
}

export default App;
