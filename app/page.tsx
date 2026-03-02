import React from 'react'
import Navbar from '@/components/Navbar'
import Home from '@/components/home'
import Events from '@/components/events'
import Working from '@/components/working'
import About from '@/components/about'
const page = () => {
  return (
    <div className='min-h-screen'>
      <div className='h-[120vh]'>
        <Navbar/>
        <Home/>
      </div>
      <div className='h-[80vh]'>
        <Events/>
      </div>
      <div className='h-[80vh] mt-80  bg-[var(--purple-black)]'>
        <Working/>
      </div>
      <div className='h-[100vh] '>
        <About/>
      </div>
    </div>
  )
}

export default page

