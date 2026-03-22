
import React from 'react'
import { Cog, Users, Zap } from 'lucide-react'; // or your preferred icon library

import { workingList } from '@/lib/data';
function working() {
  return (
    <div className='p-6 flex flex-col gap-16 items-center justify-center w-full h-full  '>
        <div>
            <h1 className='text-white'>From Interests to Friendships in 3 Steps</h1>
        </div>
        <div className='flex flex-wrap gap-5'>
            {workingList.map((item)=>(
                <div key={item.id} className='glass rounded-lg p-5 w-120 h-80 flex flex-col gap-8 justify-center items-center'>
                    <div className='rounded-lg p-2 bg-[var(--purple-dim)] text-center flex gap-3'>
                        <h2 className='text-white text-xl font-bold'>{item.id}</h2>
                        <h2 className='text-white text-xl font-bold'>{item.heading}</h2>
                        <item.icon color="white" size={16}/>
                    </div>
            
                    <p className='text-(--text-secondary) text-center'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default working
