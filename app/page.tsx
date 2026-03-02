import React from 'react'
import Navbar from '@/components/Navbar'
import Home from '@/components/home'
import Events from '@/components/events'
import Working from '@/components/working'
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
      <div className='h-[70vh] mt-80 border'>
        <Working/>
      </div>
      <div className='h-[100vh] border'>
        <h1>heyy</h1>
      </div>
    </div>
  )
}

export default page

