"use client"
import React, { useState } from 'react'
import { useEffect } from 'react'
import { reviewsList } from '@/lib/data'
import { ArrowLeft, ArrowRight, User2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Reviewslider from './reviewslider'
function Reviews() {
    const [currentReview, setCurrentReview] = useState([1, 2, 3])
    const [direction, setDirection] = useState(1) // 1 = right, -1 = left

    const rightcircle = () => {
        let length = reviewsList.length
        setDirection(1)
        if (currentReview[2] === length) {
            setCurrentReview([1, 2, 3])
        } else {
            setCurrentReview(currentReview.map((review) => review + 3))
        }
    }
    useEffect(() => {
    const interval = setInterval(() => {
        rightcircle()
    }, 5000)

    return () => clearInterval(interval)
}, [currentReview])

    const leftcircle = () => {
        setDirection(-1)
        if (currentReview[0] === 1) {
            setCurrentReview([reviewsList.length - 2, reviewsList.length - 1, reviewsList.length])
        } else {
            setCurrentReview(currentReview.map((review) => review - 3))
        }
    }

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 80 : -80,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -80 : 80,
            opacity: 0,
        }),
    }

    return (
        <div className='flex flex-col justify-center items-center w-full h-full p-5'>
            <div className='flex flex-col justify-center items-center gap-14 p-5 w-full h-full'>
                <h1 className='text-white'>Stories from EventCircle members</h1>
                <div className='flex scroll-auto gap-10 justify-center items-center'>

                    <div>
                        <ArrowLeft
                            onClick={leftcircle}
                            color='white'
                            size={40}
                            className='bg-[var(--purple-dim)] rounded-full p-2 cursor-pointer'
                        />
                    </div>
                    <Reviewslider/>
                    <div>
                        <ArrowRight
                            onClick={rightcircle}
                            color='white'
                            size={40}
                            className='bg-[var(--purple-dim)] rounded-full p-2 cursor-pointer'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews