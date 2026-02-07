import { useState } from 'react'
import Worker from './components/Worker'
import './index.css'
import Navbar from './components/navbar'
import { Route, Routes } from 'react-router-dom'
import Details from './components/details'
import Blog from './components/blog'
function App() {
 
  return (
    
      <div className='flex flex-col align-center justify-center items-center w-full h-full'>
      <Navbar />
      <Routes>
        <Route path="/" ></Route>
        <Route path='/worker' element={<Worker />}></Route>
        <Route path='/worker/details/:id' element={<Details/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
      </Routes>
      
      
      </div>
 
  )
}

export default App
