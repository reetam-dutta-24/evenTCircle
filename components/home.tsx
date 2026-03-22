"use client"
import React from 'react'
import { useState } from 'react'
function home() {
  const videos = [
    '/video1.mp4',
    '/video3.mp4',
    '/video4.mp4',
    '/video5.mp4',
    '/video6.mp4',
    '/video7.mp4',
  ]
  const [currentVideo, setCurrentVideo] = useState(videos[0])
  const videoSlider = ()=>{
    const currentIndex = videos.indexOf(currentVideo)
    const nextIndex = (currentIndex+1)%videos.length
    setCurrentVideo(videos[nextIndex])
  }

  return (
    <div className='relative h-full w-full  '>
            <div className=' dark-theme blur-sm flex overflow-x-auto w-[100vw]  inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 ' >
      <video src = {currentVideo} autoPlay onEnded={videoSlider} muted className='h-auto w-[100vw] object-cover transition-smooth' onClick={videoSlider}></video>
 
      
    </div>
    <div className='absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full gap-3'>
        <h1 className='text-white heading-hero'>Find Your People</h1>
        <h1 className="relative top-[-60] heading-hero bg-gradient-to-r from-[#ee00ff] via-[#aa00ff] to-[#ee00ff] bg-clip-text text-transparent">Experience Your City</h1>
        <h5 className='text-[var(--text-secondary)] relative top-[-70]'>Join group rooms, attend events together, and make genuine connections — not just followers</h5>
        <div className='flex gap-4 relative top-[-60]'>
            <button className='btn-primary'>Find Events</button>
            <button className='btn-secondary'>Host An Event</button>
        </div>
    </div>
    </div>
  )
}

export default home
