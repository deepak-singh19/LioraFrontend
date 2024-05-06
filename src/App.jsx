import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/userForm';
import Calendar from './components/calendar';
import Enroll from './components/enroll';

function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Enroll/>}/>
          <Route path='/enroll' element={<Form/>}/>
          <Route path='/schedule' element={<Calendar/>}/>

        </Routes>

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
