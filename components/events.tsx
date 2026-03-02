import React from 'react'
import {
    Gamepad,
    PartyPopper,
    Trophy,
    Laptop,
    HeartPulse,
    Music,
    Wine,
    Brush,
    Tent,
    BookOpen,
    Lock,
    Users
} from 'lucide-react'
const eventsList = [
    {
        id: 1,
        name: "Arcade&GameZones",
        image: "/arcade.png",
        description: "Join us for an unforgettable night of fun and games at our Arcade & Game Zones...",
        eventno: 31,
        icon: Gamepad
    
    },
    {
        id: 2,
        name: "Nightlife&Clubbing",
        image: "/nightlife.png",
        description: "Experience the vibrant energy of the city's nightlife and clubbing scene with us...",
        eventNo: 56,
        icon: PartyPopper
    },
    {
        id: 3,
        name: "Sports&Turfs",
        image: "/sports.png",
        description: "Get ready to unleash your inner athlete and experience the thrill of sports and turfs...",
        eventNo: 42,
        icon: Trophy
    },
    {
        id: 4,
        name: "TechndHackathons",
        image: "/tech.png",
        description: "Dive into the world of innovation and creativity with our Tech & Hackathons event!...",
        eventNo: 27,
        icon: Laptop
    },
    {
        id: 5,
        name: "Health&Wellness",
        image: "/health.png",
        description: "Prioritize your well-being and join us for our Health & Wellness event! Whether you're...",
        eventNo: 38,
        icon: HeartPulse
    },
    {
        id: 6,
        name: "Music&Concerts",
        image: "/music.png",
        description: "Experience the magic of music and live performances with our Music & Concerts event!...",
        eventNo: 64,
        icon: Music
    },
    {
        id: 7,
        name: "Food&Drinks",
        image: "/food.png",
        description: "Indulge your taste buds and join us for our Food & Drinks event! Whether you're a foodie...",
        eventNo: 53,
        icon: Wine

    },
    {
        id: 8,
        name: "Arts&Culture",
        image: "/arts.png",
        description: "Immerse yourself in the world of creativity and expression with our Arts & Culture event!...",
        eventNo: 29,
        icon: Brush
    },
    {
        id: 9,
        name: "Outdoor&Adventure",
        image: "/outdoor.png",
        description: "Embrace the great outdoors and join us for our Outdoor & Adventure event! Whether you're an adrenaline...",
        eventNo: 47,
        icon: Tent

    },
    {
        id: 10,
        name: "Education&Workshops",
        image: "/education.png",
        description: "Expand your knowledge and skills with our Education & Workshops event! Whether you're a lifelong learner,...",
        eventNo: 34,
        icon: BookOpen
    },
    {
        id: 11,
        name: "JoinPrivateEvents",
        image: "/private.png",
        description: "Experience exclusivity and connection with our Join Private Events! Whether you're looking for intimate gatherings...",
        eventNo: 3,
        icon: Lock
    },
    {
        id: 12,
        name: "Social&Fun",
        image: "/social.png",
        description: "Embrace the joy of socializing and fun with our Social & Fun event! Whether you're a social butterfly, a fun seeker...",
        eventNo: 61,
        icon: Users
    }
]
function events() {
  return (
    <div className='flex flex-col p-4 items-center gap-12'>
        <div>
            <h1 className='text-white'>Explore The Events Around You</h1>
        </div>
        <div className='flex flex-wrap justify-center gap-6'>
            {eventsList.map((event)=>(
                <div key = {event.id} className='glass rounded-lg p-5 w-80 h-60 flex flex-col gap-8 justify-center items-center'>
                    <div className='flex gap-7 items-center '>
                        <h5 className='text-white'>{event.name}</h5>
                        <div className='rounded-lg p-2 bg-[var(--purple-dim)] text-center'>
                            <event.icon color='purple' fontSize={16}/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 items-center'>
                        <div className='rounded-lg p-2 bg-[var(--purple-dim)]'>
                            <p className='text-purple-600'>{event.eventNo} Events</p>
                        </div>
                        <p className='text-[var(--text-secondary)] text-sm font-light'>{event.description}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default events
