import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  //2 methods to call api 
  //1st is with fetch 
   // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // const data = await response.json()
    // console.log(data)
  // }
  //  2ND ONE IS WITH   AXIOS

  // const getData = async()=>{
  //   const response =  await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response.data)
  // }

  // using api calling with destructing

  const getData= async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setdata(response.data)
    console.log(response.data)
  }
  const [data, setdata] = useState([])
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>Hello ,{idx},{elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App
