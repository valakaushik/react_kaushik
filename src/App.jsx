import { useState } from 'react'
import Commande from './commande/Commande'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  return ( 
    <>
    <h2>{count} Point</h2>
     <Commande />
     <button onMouseEnter={()=>setCount(count+50)} onMouseLeave={()=>setCount(count-60)}>click me</button>
    </>
  )
} 

export default App
