// import {React,useState} from 'react'

// const App = () => {
//   const [num, setnum] = useState(0)
//   const btnclicked= ()=> {
//     setnum(num+1)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={btnclicked}>Increase</button>
//     </div>
//   )
// }
import React from 'react'
import { useState } from 'react'
const App = () => {
  const [num, setnum] = useState({user:'sarthak',age:20})
  const btnclicked = ()=>{
    const newNum = {...num}
    newNum.user = 'Rishav'
    newNum.age = 21
    setnum(newNum)
  }
  return (
    <div>
      <h3>My name is {num.user} <br /> And my age is {num.age} years old</h3>
      <button onClick={btnclicked}> Correct </button>
    </div>
  )
}

export default App


