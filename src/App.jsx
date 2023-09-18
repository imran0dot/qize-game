import { useEffect, useState } from 'react'
import './App.css'
import Loader from './pages/Loader/Loader'
import { Outlet } from 'react-router-dom'

function App() {
   const [loading, setLoading] = useState(true)
   useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 2000)
   }, [])


   return (
      <div className='lg:w-7/12 mx-auto bg-[#107FC9] p-10'>
         {loading ? <Loader /> :
            <div>
               <Outlet />
            </div>
         }
      </div>
   )
}

export default App
