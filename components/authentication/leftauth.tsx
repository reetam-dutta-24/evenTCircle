"use client"
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { featuresdata } from '@/lib/data'
const imagedata = [
    '/assets/images/arcade.png',
    '/assets/images/adventure.png',
    '/assets/images/nightlife.png',
    '/assets/images/music.png',
    '/assets/images/tech.png'
]


const imagelabels = ['Arcade', 'Adventure', 'Nightlife', 'Music', 'Tech']

const Leftauth = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(0)

    useEffect(() => {
        const slider = setInterval(() => {
            setPrevIndex(currentIndex)
            setCurrentIndex((prev) => (prev + 1) % imagedata.length)
        }, 4000)
        return () => clearInterval(slider)
    }, [currentIndex])

    return (
        <div className='flex flex-col justify-center text-center items-center gap-10 p-8'>           
               
            <div>
                <h1 className='leading-tight bg-gradient-to-r from-[#ee00ff] via-[#aa00ff] to-[#ee00ff] bg-clip-text text-transparent '>Meet And Connect With People</h1>
            </div>
            <div>
                <p className='text-[var(--text-secondary)]'>Join group rooms, attend events together, and make genuine connections — not just followers.</p>
            </div>

            {/* Image Container */}
            <div className='relative w-80 h-60 rounded-2xl overflow-hidden'>

                {/* Background blur layer — previous image stays visible blurred */}
                <motion.img
                    key={`bg-${currentIndex}`}
                    src={imagedata[currentIndex]}
                    className='absolute inset-0 w-full h-full object-cover scale-110 blur-sm'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                />

                {/* Main image — clean fade + subtle scale */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={imagedata[currentIndex]}
                        className='absolute inset-0 w-full h-full object-cover rounded-2xl'
                        initial={{
                            opacity: 0,
                            scale: 1.08,
                            filter: 'blur(8px) brightness(0.7)'
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            filter: 'blur(0px) brightness(1)'
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.96,
                            filter: 'blur(4px) brightness(0.6)'
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.43, 0.13, 0.23, 0.96]
                        }}
                    />
                </AnimatePresence>

                {/* Bottom gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-2xl z-10 pointer-events-none' />

                {/* Image label — fades in with image */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`label-${currentIndex}`}
                        className='absolute bottom-4 left-4 z-20'
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                    >
                        <span className='text-white text-sm font-semibold tracking-widest uppercase opacity-90'>
                            {imagelabels[currentIndex]}
                        </span>
                    </motion.div>
                </AnimatePresence>

                {/* Dot indicators */}
                <div className='absolute bottom-4 right-4 flex gap-1.5 z-20'>
                    {imagedata.map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                width: currentIndex === i ? 20 : 6,
                                opacity: currentIndex === i ? 1 : 0.35,
                                backgroundColor: currentIndex === i ? '#ffffff' : '#ffffff'
                            }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className='h-1.5 rounded-full cursor-pointer'
                            onClick={() => {
                                setPrevIndex(currentIndex)
                                setCurrentIndex(i)
                            }}
                        />
                    ))}
                </div>

            </div>
            <ul className="
  [&>*:nth-child(3n+1)]:text-pink-500 [&>*:nth-child(3n+1)]:shadow-[0_0_10px_#ec4899]

  [&>*:nth-child(3n+2)]:text-purple-500 [&>*:nth-child(3n+2)]:shadow-[0_0_10px_#a855f7]

  [&>*:nth-child(3n+3)]:text-fuchsia-500 [&>*:nth-child(3n+3)]:shadow-[0_0_10px_#d946ef]
 flex flex-wrap gap-5">
  {featuresdata.map((x, i) => (
    <li key={i} className="p-2 border rounded-3xl">
      {x}
    </li>
  ))}
</ul>

        </div>
    )
}

export default Leftauth