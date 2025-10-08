import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <div className="text-{50px}">Hellow word</div>
      <Home/>
    </>
  )
}

export default App
