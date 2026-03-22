import React from 'react'
import Navbar from '@/components/Navbar'
import Home from '@/components/home'
import Events from '@/components/events'
import Working from '@/components/working'
import About from '@/components/about'
import Features from '@/components/features'
import Reviews from '@/components/reviews'
const page = () => {
  return (
    <main className='min-h-screen'>
      <header className='h-[11vh]'>
        <Navbar />
        
      </header>
      <section className='h-[109vh]' id = "home">
        <Home/>
      </section>
      <section className='h-[80vh]' id = "events">
        <Events/>
      </section>
      <section className='h-[80vh] mt-80  bg-[var(--purple-black)]' id = "howitworks" >
        <Working/>
      </section>
        <section className='h-[90vh] ' id = "about">
          <About/>
        </section>
        <section className='h-[100vh] bg-[var(--purple-dim)] ' id = "features">
          <Features/>
        </section>
        <section className='h-[80vh] bg-[var(--purple-back)]' id = "reviews">
          <Reviews/>
        </section>
    </main>
  )
}

export default page

