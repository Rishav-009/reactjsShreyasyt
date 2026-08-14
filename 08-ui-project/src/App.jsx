import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const user=[
    {
      img: ' https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHN8ZW58MHx8MHx8fDA%3D' ,
      intro:'',
      tag:'Satisfied'
    },
    {
      img: 'https://media.istockphoto.com/id/1233085632/photo/indian-young-businessman-stock-images.webp?a=1&b=1&s=612x612&w=0&k=20&c=XW3VCS5RBm4sBXDMa-lA8gTNuyqy65zDgFgJiVZ2Pes=' ,
      intro:'',
      tag:'Unreserved'
    },
    {
      img: 'https://media.istockphoto.com/id/2170334991/photo/young-indian-man-entrepreneur-presents-financial-data-with-charts-and-graphs-on-wall-tv-in.webp?a=1&b=1&s=612x612&w=0&k=20&c=pD-mf9ORs10a85P-R9r2ZH67VzL_Gk6KN_G5N_GfYzg=' ,
      intro:'',
      tag:'Satisfied'
    }
  ]
  return (
    <div> 
       <Section1 user={user}/>
       <Section2/>
    </div>
  )
}

export default App
