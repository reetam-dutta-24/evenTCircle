import React from 'react'

function home() {
  return (
    <div className='relative h-full w-full'>
            <div className='flex overflow-x-auto w-[100vw] '>
      <video src = '/video1.mp4' autoPlay loop muted className='h-auto w-[100vw] object-cover '></video>
      <video src = '/video7.mp4'  autoPlay loop muted className='h-auto w-[100vw] object-cover'></video>
      <video src = '/video3.mp4'  autoPlay loop muted className='h-auto w-[100vw] object-cover'></video>
      <video src = '/video6.mp4'  autoPlay loop muted className='h-auto w-[100vw] object-cover'></video>
      <video src = '/video4.mp4'  autoPlay loop muted className='h-auto w-[100vw] object-cover'></video>
      <video src = '/video5.mp4'  autoPlay loop muted className='h-auto w-[100vw] object-cover'></video>
 
      
    </div>
    <div className='absolute top-0 left-0 flex flex-col gap-3 justify-center items-center w-full h-full'>
        <h1 className='text-white'>Find Your People</h1>
        <h1 className="heading-hero bg-gradient-to-r from-[#651799] via-[#9415d4] to-[#ee00ff] bg-clip-text text-transparent">Experience Your City</h1>
        <p className='text-[var(--text-secondary)]'>Join group rooms, attend events together, and make genuine connections — not just followers</p>
        <div className='flex gap-4'>
            <button className='btn-primary'>Find Events</button>
            <button className='btn-secondary'>Host An Event</button>
        </div>
    </div>
    </div>
  )
}

export default home
