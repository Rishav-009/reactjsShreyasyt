import {React,useState} from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])

  const SubmitHandler = (e)=>{
    e.preventDefault()
    console.log(title,details);
    const copytask=[...task]
    copytask.push({title,details})
    settask(copytask)
    console.log(task)
    settitle('')
    setdetails('')
  }
  const deleteNode =(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1);
    settask(copyTask)
  }
  return (
    <div className='h-screen bg-black lg:flex text-white '>
      <form onSubmit={(e)=>{
        SubmitHandler(e)
      }} className='flex lg:w-1/2 flex-col  p-10 items-start gap-5 ' >
          <input  type='text' 
          placeholder='Enter task'
          className='px-5 py-2 w-full font-medium border-2 rounded'
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
          />
          <textarea type='text'
            placeholder='Enter Details' 
            className='px-5 py-2 w-full font-medium border-2 rounded h-30'
            value={details}
            onChange={(e)=>{
              setdetails(e.target.value)
            }}
          />
          <button className='cursor-pointer bg-white w-full text-black px-5 py-2 rounded' >
            Add Notes
          </button>
          
      </form>
      <div className=' lg:w-1/2  p-10 lg:border-l-2'>
        <h1 className='text-xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto scrollbar-none'>
            {task.map(function(elem, idx) {
              return (
                <div key={idx}>
                    <div className="h-52 w-40 bg-cover rounded-xl bg-white py-8 px-4 bg-[url('https://imgs.search.brave.com/c-bsX0TaSAmWk53Y-j7cUzkeyNefGr0Oi5kqXxHacOg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTQvTm90/ZWJvb2stUGFwZXIt/Tm8tQmFja2dyb3Vu/ZC10aHVtYi53ZWJw')]">
                      <h3 className="leading-tight text-black font-bold">
                        {elem.title}
                      </h3>

                      <p className="leading-tight text-gray-500 font-medium mt-4">
                        {elem.details}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        deleteNode(idx)
                      }}
                      className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
                    >
                      Delete
                    </button>
                  </div>
                )
              })}
        </div>
        
      </div>

    </div>
  )
}

export default App
