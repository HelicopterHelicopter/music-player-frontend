import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import axios from 'axios'
import MusicList from './pages/MusicList.tsx'
import Login from './pages/Login.tsx'
import MusicHome from './pages/MusicHome.tsx'

axios.defaults.baseURL="http://13.127.64.232:5000/api/v1";

const router = createBrowserRouter([
  {
    path:"/music-player-frontend/",
    element:<App/>,
    children:[
      {path:"/music-player-frontend/login",
      element:<Login/>
    },
    {
      path:"/music-player-frontend/list",
      element:<MusicList/>
    },
    {
      path:"/music-player-frontend/music",
      element:<MusicHome/>
    }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
