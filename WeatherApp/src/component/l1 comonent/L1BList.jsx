import React from 'react'
import { RiWaterPercentLine } from "react-icons/ri"

const L1BList = () => {
  return (
    <div>

      <div className='bg-[#1f1e22] rounded-xl ml-5'>
        <div className='flex items-center justify-between p-3'>

          <p className='text-sm text-[#9c9898] font-bold'>Humidity</p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center p-3'>
            {/* Icon */}
            <div className='text-5xl'>
              <RiWaterPercentLine />
            </div>
            {/* TEXT */}
            <div className='m-3 mx-7'>
              <p className='text-white text-3xl font-semibold'>68%</p>
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default L1BList
