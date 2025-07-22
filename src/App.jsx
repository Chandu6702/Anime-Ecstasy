import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <div className="pt-24 min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white transition-colors duration-300">
        <Outlet/>
      </div>
    </>
  )
}

export default App
