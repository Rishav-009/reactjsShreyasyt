import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
const Page1Content = (props) => {
  return (
    <div className='py-3 h-[90vh] flex  items-center gap-10 px-18'>
      <LeftContent />
      <RightContent user={props.user} />
    </div>
  )
}

export default Page1Content
