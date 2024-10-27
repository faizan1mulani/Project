import React from 'react'
import { FaCloud } from "react-icons/fa"
import { MdOutlineCalendarToday } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"

const CardR1 = () => {
  return (
    <div className='flex p-7 px-11'>
      <div className='h-60 w-60 bg-[#3f3e41] m-4 rounded-xl overflow-hidden'>
        
        {/* Time Indicator */}
        <p className='p-3 font-medium  text-xs sm:text-sm'>Now</p>
        
        {/* Temperature and Icon */}
        <div className='mx-3 flex items-center justify-between'>
          <div className='flex items-baseline mx-2'>
            <p className='text-3xl sm:text-4xl font-bold'>20&deg;</p>
            <p className='text-lg sm:text-xl font-semibold ml-1'>C</p>
          </div>
          <div className='text-4xl mx-2 sm:text-5xl text-gray-300'>
            <FaCloud />
          </div>
        </div>

        {/* Weather Description */}
        <div className='my-2 px-5 '>
          <p className='text-xs'>Broken Clouds</p>
          <hr className='w-[200px] mx-auto mt-[25px]' style={{ backgroundColor: '#3f3e41', height: '2px' }} />
        </div>

        {/* Date Section */}
        <div className='flex items-center px-5 mt-[20px] text-xs'>
          <span className='text-sm'><MdOutlineCalendarToday /></span>
          <span className='ml-2'>Saturday 26 Oct</span>
        </div>

        {/* Location Section */}
        <div className='flex items-center px-5 mt-[10px] text-xs'>
          <span className='text-sm'><FaLocationDot /></span>
          <span className='ml-2'>Pune, IN</span>
        </div>
      </div>

      

    </div>
  )
}

export default CardR1
