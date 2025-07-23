import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

function Pagination({handleNext,handlePrev,pageNo}) {
  return (
    <div className='bg-gray-400 dark:bg-gray-700 p-4 mt-8 flex justify-center transition-colors duration-200'>
      <div onClick={handlePrev} className='px-8 hover:cursor-pointer hover:scale-125 duration-200 text-gray-800 dark:text-gray-200'><FaArrowAltCircleLeft size={30} /></div>
      <div className='font-bold text-2xl text-gray-800 dark:text-gray-200'>{pageNo}</div>
      <div onClick={handleNext} className='px-8 hover:cursor-pointer hover:scale-125 duration-200 text-gray-800 dark:text-gray-200'><FaArrowAltCircleRight size={30} /></div>
    </div>
  )
}

export default Pagination
