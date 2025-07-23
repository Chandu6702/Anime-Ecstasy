import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar/>
        <Outlet/>
      </div>
    </ThemeProvider>
  )
}

export default App
