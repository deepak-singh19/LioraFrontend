import React from 'react';
import profileAvatar from "../assets/profileAvatar.svg"
import {useFormContext} from "../context/context";

const UserProfile = () => {
    const {firstName,  lastName, location} = useFormContext();
 
  return (
    <div className='flex w-[80%] h-[24%] border-2 border-black p-4 bg-gradient-to-r from-red-400 to-indigo-600'>
    
        <div className='w-[70%] h-full justify-around  items-center '>
            <div className='flex  w-full  '>
                <span className='flex px-2 py-1 text-white md:text-lg text-sm font-bold w-[25%]'>Name</span>
                <span className='flex px-2 py-1 text-white md:text-lg text-sm  font-bold w-[25%]'>{firstName}{" "}{lastName}</span>
            </div>
            <div className='flex  w-full  '>
                <span className='flex px-2 py-1 text-white md:text-lg text-sm  font-bold w-[25%]'>Location</span>
                <span className='flex px-2 py-1 text-white md:text-lg  text-sm  font-bold w-[25%]'>{location}</span>
            </div>


        </div>
    </div>
  )
}

export default UserProfile