import React from 'react'
import { eventsList } from '@/lib/data'

function events() {
  return (
    <div className='flex flex-col p-4 items-center justify-center gap-16'>
        <div>
            <h1 className='text-white'>Explore The Events Around You</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-14'>
            {eventsList.map((event)=>(
                <div 
                  key={event.id} 
                  className='glass glass-hover relative rounded-lg w-70  h-50 flex flex-col gap-8 overflow-auto'
                >
                    
                    {/* Image */}
                    <img 
                      src={event.image} 
                      alt={event.name} 
                      className='w-full  absolute object-contain  rounded-lg'
                    />

                    {/* 🔥 Added Bottom Dark Gradient Overlay */}
                    <div
  className="absolute inset-0 rounded-lg"
  style={{
    background: `
      linear-gradient(to top, rgba(0,0,0,0.85), transparent 40%),
      linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 60%),
      linear-gradient(to left, rgba(0,0,0,0.6), transparent 30%),
      linear-gradient(to right, rgba(0,0,0,0.6), transparent 30%)
    `
  }}
></div>

                    <div className='flex flex-col justify-center p-3 items-center gap-5 '>
                      <div className='flex gap-4 items-center relative top-35'>
                          <h4 className='text-white'>{event.name}</h4>
                          <div className='rounded-lg p-2 bg-[var(--purple-dim)] text-center'>
                              <event.icon color='purple' fontSize={16}/>
                          </div>
                      </div>

                      <div className='flex flex-col gap-3 items-center relative top-70  '>
                          <div className='rounded-lg p-2 bg-[var(--purple-dim)]'>
                              <p className='text-purple-600'>{event.eventNo} Events</p>
                          </div>
                          <p className='text-[var(--text-secondary)] text-sm font-light'>
                            {event.description}
                          </p>
                      </div>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default events
