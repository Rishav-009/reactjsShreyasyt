import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black  text-white '>
      <form className='flex justify-between p-10 items-start' >
          <div className="flex  flex-col w-1/2 gap-5 p-10 ">
            <input  type='text' 
            placeholder='Enter task'
            className='px-5 py-2 w-full font-medium border-2 rounded'
            />
            <textarea type='text'
              placeholder='Enter Details' 
              className='px-5 py-2 w-full font-medium border-2 rounded h-30'
            />
            <button className='cursor-pointer bg-white w-full text-black px-5 py-2 rounded' >
              Add Notes
            </button>
          </div>
          <img className='h-52 rotate-y-180' src="https://imgs.search.brave.com/yYZbe2je2gGM2utwDlhxniTUrTSF8JaBGSeGMcF6_8s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDkv/NTc4LzE1NS9zbWFs/bC9hLWJsYWNrLWFu/ZC13aGl0ZS1kcmF3/aW5nLW9mLWEtbWFu/LXdyaXRpbmctcG5n/LnBuZw" alt="" />
      </form>
    </div>
  )
}

export default App
