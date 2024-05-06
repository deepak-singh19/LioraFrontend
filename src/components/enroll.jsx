import React from 'react'
import { useNavigate } from 'react-router-dom'

const Enroll = () => {
    const navigate= useNavigate();
  return (
    <div className='flex w-full h-screen justify-center items-center bg-gradient-to-r from-red-400 to-indigo-600'>
        <button className='flex p-4 border-2 border-white rounded-md' onClick={()=>{navigate("/enroll")}}>Enroll</button>

    </div>
  )
}

export default Enroll