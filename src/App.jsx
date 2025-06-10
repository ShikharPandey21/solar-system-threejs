import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SolarSystem from './components/SolarSystem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <SolarSystem />
    </div>
  )
}

export default App
