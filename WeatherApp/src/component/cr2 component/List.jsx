import React from 'react'
import { TbMoonFilled } from "react-icons/tb"

const List = ({day , date , temp}) => {
  return (
    <div className='flex items-center justify-between p-4 mt-1'>
      <div className='flex items-center'>
        <span className='text-gray-300'><TbMoonFilled /></span>
        <span className='mx-2 font-medium'>{temp}&deg;</span>
      </div>

      <div> 
        <p className='font-medium'>{date}</p>
      </div>

      <div>
        <p className='font-medium'>{day}</p>
      </div>
    </div>
  )
}

export default List
