import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faEye } from "@fortawesome/free-solid-svg-icons";
export default function Bai1() {
  return (
    <>
      <div className='bg-gray-200 w-[25pc] h-[98px] rounded mt-[20px] ml-[20px]'>
        <div className='ml-[20px]'>
           <p className='text-blue-400 '>Lable</p>
        <input type='text' placeholder='Search...' className='rounded border border-blue-700 w-[350px] h-[30px] absolute ' />
        <FontAwesomeIcon className='w-[20px] relative ml-[320px] mb-[9px] text-gray-400 mt-[7px]' icon={faEye}></FontAwesomeIcon>
        </div>
        <p className='text-gray-500 ml-[18px]'>Helper Text</p>
       
      </div>
    </>
  )
}
