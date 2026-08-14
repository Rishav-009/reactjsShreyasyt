import React from 'react'

const RightCardContent = (props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-80 p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-14 w-14 flex justify-center items-center'>1</h2>
            <div>
                <p className='text-lg font-bold mt-40  text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora ea, cumque atque maiores nulla?
                </p>
            </div>
            <div className='flex justify-between'>
                <button className='font-medium text-white bg-blue-600 px-8 py-3 rounded-full'> {props.tag} </button>
                <button className='font-medium text-white bg-blue-600 px-5 py-3 rounded-full'><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
  )
}

export default RightCardContent
