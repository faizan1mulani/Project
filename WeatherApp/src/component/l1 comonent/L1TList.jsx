import React from 'react'
import { MdAir } from "react-icons/md"

const L1TList = () => {
    return (
        <div>
            <div>
            <div className='flex flex-col bg-[#1f1e22] m-5 p-3 rounded-xl  '>
                <div className='flex items-center justify-between'>
                    <p className='text-sm text-[#9c9898] font-bold'>Air Quality Index</p>
                    <button className='bg-green-500 px-3 rounded-full font-semibold cursor-default hover:bg-green-600'>Good</button>
                </div>
                <div >
                    <div className='flex justify-between items-center mt-9'>
                        <div className='text-5xl'>
                            <MdAir />
                        </div>
                        <div className='text-sm text-[#9c9898]'>
                            <div>
                                <p className='text-center font-semibold'>PM < sub>2.5</sub></p>
                                <p className='text-white text-3xl font-semibold mt-3'>3.90</p>
                            </div>
                        </div>
                        <div className='text-sm text-[#9c9898]'>
                            <div>
                                <p className='text-center font-semibold'>SO<sub>2</sub></p>
                                <p className='text-white text-3xl font-semibold mt-3'>7.75</p>
                            </div>
                        </div>
                        <div className='text-sm text-[#9c9898]'>
                            <div>
                                <p className='text-center font-semibold'>NO<sub>2</sub></p>
                                <p className='text-white text-3xl font-semibold mt-3'>33.6</p>
                            </div>
                        </div>
                        <div className='text-sm text-[#9c9898]'>
                            <div>
                                <p className='text-center font-semibold'>O<sub>3</sub></p>
                                <p className='text-white text-3xl font-semibold mt-3'>3.86</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default L1TList
