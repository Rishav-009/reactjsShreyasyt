import React from 'react'
import 'remixicon/fonts/remixicon.css'
import Rightcard from './Rightcard'

const RightContent = (props) => {
  return (
    <div id='right' className="h-full overflow-x-auto flex flex-nowrap gap-10 p-6 w-2/3">
      {props.user.map(function(elem){
        return <Rightcard img={elem.img} tag={elem.tag} />
      })}
      
    </div>
  )
}

export default RightContent