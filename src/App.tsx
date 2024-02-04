
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import MusicHome from './pages/MusicHome'
import MusicList from './pages/MusicList'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/music' element={<MusicHome/>}/>
        <Route path='/list' element={<MusicList/>}/>
      </Routes>
    </main>
  )
}

export default App;
