import React from 'react'
import Navbar from '@/components/Navbar'
import Home from '@/components/home'
const page = () => {
  return (
    <div className='min-h-screen'>
      <div className='h-[100vh]'>
        <Navbar/>
        <Home/>
      </div>
      <div className='h-[100vh]'>

      </div>
    </div>
  )
}

export default page

