import React from 'react'
import { featuresList } from '@/lib/data'
function features() {
  return (
    <div className='flex flex-col  p-5  w-full h-full text-white'>
      <div className='flex w-full h-full flex-col gap-12 p-3 justify-center items-center'>
        <h1>Features</h1>
        <div className='flex flex-wrap gap-10 justify-center items-center '>
        {featuresList.map((feature)=>(
            <div key = {feature.id} className='w-90 h-70 glass rounded-lg p-5 flex flex-col gap-8'>
              <div className='flex gap-3 items-center'>
                <h3>{feature.id}.</h3>
                <h3>{feature.icon}</h3>
                <h3 >{feature.title}</h3>
              </div>
              <p className='text-[var(--text-secondary)]'>{feature.description}</p>
            </div>
            
        ))}
        </div>
      </div>
    </div>
  )
}

export default features
