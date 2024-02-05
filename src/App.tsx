

import './App.css'
import { Link, Outlet } from 'react-router-dom'


function App() {

  return (
    <main>
      <nav>
        <Link to="/music-player-frontend/Login">Login</Link>
        {" | "}
        <Link to="/music-player-frontend/list">List</Link>
      </nav>
      <Outlet/>
    </main>
  )
}

export default App;
