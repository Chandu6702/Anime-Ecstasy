import ReactDOM from 'react-dom/client'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import WatchList from './components/WatchList/WatchList.jsx'
import Anime from './components/Anime/Anime.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}> 
    <Route path='' element={<Anime/>}></Route>
    <Route path='/watchlist' element={<WatchList/>}></Route>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)


