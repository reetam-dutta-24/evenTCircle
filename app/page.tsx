import React from 'react'
import Navbar from '@/components/landing/Navbar'
import Home from '@/components/landing/home'
import Events from '@/components/landing/events'
import Working from '@/components/landing/working'
import About from '@/components/landing/about'
import Features from '@/components/landing/features'
import Reviews from '@/components/landing/reviews'
import Footer from '@/components/landing/footer'
import Getstarted from '@/components/landing/getstarted'
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
        <section className='h-[50vh] bg-[var(--purple-accent)]'>
          <Getstarted/>
        </section>
        <footer className='h-[50vh] bg-[var(--purple-back)]'>
          <Footer/>
        </footer>
    </main>
  )
}

export default page

