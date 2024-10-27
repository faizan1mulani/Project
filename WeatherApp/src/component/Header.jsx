import React from 'react'
import { IoMdSearch } from "react-icons/io"
import { BiCurrentLocation } from "react-icons/bi"

const Header = () => {
  return (
    <div className="px-4 py-4 md:px-8 lg:px-16">
      <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
        
        {/* Logo */}
        <div className='text-2xl md:text-3xl font-bold'>
          <h1>Weather<span className='text-[#7fd3d6]'>.IO</span></h1>
        </div>

        {/* Search Input */}
        <div className='flex items-center w-full md:w-[25rem] bg-[#3f3e41] px-4 md:px-5 py-2 rounded-full'>
          <span className='text-gray-400 mr-3'><IoMdSearch /></span>
          <input 
            className='bg-transparent outline-none flex-grow text-white' 
            type="text" 
            placeholder='Search City...' 
          />
        </div>

        {/* Current Location Button */}
        <div>
          <button 
            className='flex items-center bg-[#62a3a5] rounded-full font-semibold px-4 md:px-5 py-2 hover:bg-[#499396] active:scale-95 transition transform duration-200'>
            <span className='mr-2 md:mr-3'><BiCurrentLocation /></span>
            <span className="text-sm md:text-base">Current Location</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;
