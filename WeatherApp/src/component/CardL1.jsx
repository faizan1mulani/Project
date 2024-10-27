import React from 'react'
import L1TList from './l1 comonent/L1TList'
import L1TList1 from './l1 comonent/L1TList1'
import L1BList from './l1 comonent/L1BList'

const CardL1 = () => {
  return (
    <div className='p-7 px-11'>
      <div className='h-[26rem] w-[1100px] bg-[#3f3e41] m-4 rounded-xl p-3 pr-7'>
        <h1 className='m-4 font-bold'>Today's Highlights</h1>


        <div className='flex'>

          <div className='w-[47%]'>
            <L1TList />
          </div>

          <div className='w-[53%] '>
            <L1TList1 />
          </div>

        </div>

        
        <div className='flex w-[23.5%] bg-[#1f1e22] rounded-xl mx-5'>
        <L1BList />
        <L1BList />
        </div>
        <div className='flex w-[26.5%] bg-[#1f1e22] rounded-xl mx-5'>
        <L1BList />
        <L1BList />
        </div>

      </div>
    </div>
  )
}

export default CardL1
