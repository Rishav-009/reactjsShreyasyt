import React from 'react'

const App = () => {
  // localStorage.setItem('user','Rishav')
  // const user = localStorage.getItem("user")
  
  // console.log(user)

  const user={
    username:'Rishav',
    age:21,
    dept:'DCET'
  }
  localStorage.setItem('user',JSON.stringify(user))
  return (
    <div>
      APP
    </div>
  )
}

export default App
