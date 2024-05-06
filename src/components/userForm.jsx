import React, { useEffect, useState} from 'react';
import {useFormContext} from "../context/context";
import { setCalendar, getNextDay,isWeekend } from '../utils/utils';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Form = () => {

  const [loading, setLoading]= useState(false);
  const [onSubmit, setOnSubmit]= useState(false);

  const navigate = useNavigate();
  
  const {firstName, setFirstName, lastName, setLastName, location, setLocation, course, setCourse, hour, setHour, date, setDate, calendarData, setCalendarData} = useFormContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form submitted:', { firstName, lastName, location, course, hour });
    if(!hour && !course){
      alert("Please add hour and course");
    }else{
      let newDate = new Date();
    newDate=getNextDay(newDate);
    if (isWeekend(newDate)) {
      newDate = getNextDay(newDate); // Skip weekends
    }
    // console.log(newDate);
    setDate(newDate);
    const newCalendarData = setCalendar(hour, newDate);
    setCalendarData(newCalendarData);

    // console.log('Calendar data:', newCalendarData); // Log calendarData
    navigate("/schedule");
    postData();
    }
  };

  const postData= async()=>{
    await axios.post("http://localhost:3005/user/enroll",{firstName, lastName, course, calendarData, hour, location})
  }

  // useEffect(() => {
  //   if (onSubmit) {
  //     const newCalendarData = setCalendar(hour, date);
  //     setCalendarData(newCalendarData);
      
  //   }
  // }, [onSubmit]);
  
  // useEffect(() => {
  //   console.log("Updated Calendar Data:", calendarData);
  // }, [calendarData]);
  

  return (
    <div className='flex w-full h-screen justify-around items-center bg-gradient-to-r from-red-400 to-indigo-600'>
      <form onSubmit={handleSubmit} className='flex w-[60%] h-[60%] justify-around flex-col gap-4 border-2 p-5 rounded-md  bg-white'>
        <div className='flex  w-full justify-center text-xl font-bold'>Enroll</div>
      <div className='flex  w-full justify-around'>
        <label htmlFor="firstName" className='flex px-2 py-1 w-[25%] '>First Name:</label>
        <input
          className='flex px-2 py-1 border-2 border-black w-[40%]'
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className='flex  w-full justify-around'>
        <label htmlFor="lastName" className='flex px-2 py-1 w-[25%]'>Last Name:</label>
        <input
          className='flex px-2 py-1 border-2 border-black w-[40%]'
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className='flex  w-full justify-around '>
        <label htmlFor="location" className='flex px-2 py-1 w-[25%]'>Location:</label>
        <input
          className='flex px-2 py-1 border-2 border-black w-[40%]'
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className='flex  w-full justify-around '>
        <label htmlFor="course" className='flex px-2 py-1 w-[25%]'>Course:</label>
        <select id="course" value={course} className='flex px-2 py-1 border-2 border-black w-[40%]' onChange={(e) => setCourse(e.target.value)}>
          <option value="">Select a course</option>
          <option value="Java">Java</option>
        </select>
      </div>
      <div className='flex  w-full justify-around '>
        <label htmlFor="hour" className='flex px-2 py-1 w-[25%]'>Hour:</label>
        <select id="hour" value={hour} className='flex px-2 py-1 border-2 border-black w-[40%]' onChange={(e) => setHour(e.target.value)}>
        <option value="">Select hour</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
      </div>
      <div className='flex w-full justify-center items-center'>
      <button type="submit" className='w-[40%] p-2 bg-gradient-to-r from-red-400 to-indigo-600 border rounded-md'>Submit</button>
      </div>
      
    </form>
    </div>
  );
};

export default Form;
