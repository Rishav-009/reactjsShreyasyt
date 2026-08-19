import {React,useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
const App = () => {

  const [userData, setuserData] = useState([])
  const [index, setIndex]=useState([1])

  const getdata=async()=>{
    // console.log("data a gya mitrooo")
    // we will use axios to get api data 
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setuserData(response.data)
    console.log(response.data)
  }
  useEffect(function(){
    getdata()
  },[index])
  let printUserData = <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 '>loading...</h3>
  if(userData.length>0){
    printUserData = userData.map((elem,idx)=>{
      return <div key={idx}>
        <a href={elem.download_url} target="_blank">
          <div className='h-40 w-44 overflow-hidden rounded-xl ml-10'>
          <img className='h-full w-full object-cover' src={elem.download_url}alt=""/>
          </div>
          <h2 className='ml-10 text-white font-bold text-lg '>{elem.author}</h2>
        </a>
      </div>
    })
  }
  return (
    <div className="bg-black h-full text-white p-7">
      
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div> 
      <div className = 'flex justify-center gap-6 items-center p-4' >
        <button 
          onClick={()=>{
            if(index>1){
              setIndex(index-1)
              setuserData([])
            }
            
          }}
          className=' mt-5 py-2 px-5 bg-amber-600 font-semibold cursor-pointer active:scale-95 rounded' >
          Prev
        </button>
        <h3 className='justify-center items-center'>Page {index}</h3>
        <button 
          onClick={()=>{
            setIndex(index+1)
            setuserData([])
          }}
        className=' mt-5 py-2 px-5 bg-amber-600 font-semibold cursor-pointer active:scale-95 rounded'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App