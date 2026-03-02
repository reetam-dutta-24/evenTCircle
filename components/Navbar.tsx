import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div className=' flex justify-between p-3 items-center '>
      <div className='ml-5'>
        <h1 className='text-white'>Logo</h1>
      </div>
      <div >
        <ul className='flex gap-8'>
            <Link href="/"><li className='text-[var(--text-secondary)]'>Home</li></Link>
            <Link href="/events"><li className='text-[var(--text-secondary)]'>Events</li></Link>
            <Link href="/howitworks"><li className='text-[var(--text-secondary)]'>How It Works</li></Link>
            <Link href="/about"><li className='text-[var(--text-secondary)]'>About</li></Link>
            <Link href="/reviews"><li className='text-[var(--text-secondary)]'>Reviews</li></Link>
        </ul>
      </div>
      <div className='mr-5 flex gap-3'>
        <button className='btn-primary'>Login</button>
        <button className='btn-secondary'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
