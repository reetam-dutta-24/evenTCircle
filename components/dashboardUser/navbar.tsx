import { MessageCircle, Search, User2 } from 'lucide-react'
import React from 'react'

function navbar() {
  return (
    <div className='flex text-white items-center justify-center gap-40 p-5  w-[80%] bg-(--bg-best) w-full h-full'>
      <div>
        <h2>Home Section</h2>
      </div>
      <div className='border border-fuchsia-600 rounded-2xl flex gap-3 p-3 items-center'>
        <Search/>
        <input className= 'w-100 rounded-lg' type = "text"  placeholder='Search events,rooms,people..' ></input>
  
      </div>
      <div className='flex gap-5'>
     
            <MessageCircle/>
            <User2/>
      
        
      </div>
      
    </div>
  )
}

export default navbar
