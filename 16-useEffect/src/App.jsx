import { useState } from "react"
import React, { useEffect } from 'react'





const App = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    setA(10)
    console.log("A is changing")
  }
  function bChanging(){
    setB(20)
    console.log("B is changing")
  }
  useEffect(function(){
    console.log('use effect is running');
  },[]) 
    
  
  return(
    <div>
      <h1>A is {a}</h1>
      <h1>B ia {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>AChanging</button>
      <button onClick={()=>{
        setB(b-1)
      }}>BChanging</button>
    </div>
  )
}



// function App() {
//    const [num, setnum] = useState(0)
//    useEffect(function(){
//     console.log('use effect is running..')
//    },[])
//   return (
//     <div>
//       App
//      <h1>{num}</h1> 
//       <button onClick={()=>{
//         setnum(num+1)
//       }}>click</button>
//     </div>
//   )
// }

export default App
