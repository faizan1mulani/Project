import React from 'react'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5"

const L1TList1 = () => {
    return (
        <div>
            <div>
                <div className='flex flex-col bg-[#1f1e22] m-5 p-3 rounded-xl'>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-[#9c9898] font-bold'>Sunrise & Sunset</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center justify center p-3'>
                            {/* ICON */}
                            <div className='text-5xl'>
                                <IoSunnyOutline />
                            </div>
                            {/* TEXT */}
                            <div className='m-3 mx-7'>
                                <div>
                                    <p className='text-sm text-[#9c9898] font-bold'>Sunrise</p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-3xl font-bold'>5:30 AM</p>
                                </div>      
                            </div>
                        </div>

                        <div className='flex items-center justify center p-3'>
                            {/* ICON */}
                            <div className='text-5xl'>
                                <IoMoonOutline />
                            </div>
                            {/* TEXT */}
                            <div className='m-3 mx-7'>
                                <div>
                                    <p className='text-sm text-[#9c9898] font-bold'>Sunrise</p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-3xl font-bold'>5:30 AM</p>
                                </div>      
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default L1TList1
