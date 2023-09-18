import {  useEffect, useState } from 'react'
import './App.css'
import Loader from './pages/Loader/Loader'
import StartGame from './pages/GameStart/StartGame'

function App() {
  const [loading,setLoading] = useState(true)
  useEffect(() => {
     setTimeout(() => {
      setLoading(false)
     },2000)
  },[])


  return (
     <div>
      {loading ? <Loader/> : 
       <div>
      <StartGame/>
       </div>
      }
     </div>
  )
}

export default App
