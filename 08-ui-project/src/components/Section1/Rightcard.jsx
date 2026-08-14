import React from 'react'
import RightCardContent from './RightCardContent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-80 shrink-0  rounded-4xl relative overflow-hidden '>
        <img className='h-full object-cover rounded-2xl '  src={props.img} alt="" />
        <RightCardContent  tag={props.tag}/>
      
    </div>
  )
}

export default Rightcard
