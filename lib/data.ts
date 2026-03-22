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
import { Cog,Zap } from 'lucide-react';
import { title } from 'process';
export const eventsList = [
    {
        id: 1,
        name: "Arcade&GameZones",
        image: "/assets/images/arcade.png",
        description: "Join us for an unforgettable night of fun and games at our Arcade & Game Zones...",
        eventNo: 31,
        icon: Gamepad
    
    },
    {
        id: 2,
        name: "Nightlife&Clubbing",
        image: "/assets/images/nightlife.png",
        description: "Experience the vibrant energy of the city's nightlife and clubbing scene with us...",
        eventNo: 56,
        icon: PartyPopper
    },
    {
        id: 3,
        name: "Sports&Turfs",
        image: "/assets/images/sports.png",
        description: "Get ready to unleash your inner athlete and experience the thrill of sports and turfs...",
        eventNo: 42,
        icon: Trophy
    },
    {
        id: 4,
        name: "TechndHackathons",
        image: "/assets/images/tech.png",
        description: "Dive into the world of innovation and creativity with our Tech & Hackathons event!...",
        eventNo: 27,
        icon: Laptop
    },
    {
        id: 5,
        name: "Health&Wellness",
        image: "/assets/images/health.png",
        description: "Prioritize your well-being and join us for our Health & Wellness event! Whether you're...",
        eventNo: 38,
        icon: HeartPulse
    },
    {
        id: 6,
        name: "Music&Concerts",
        image: "/assets/images/music.png",
        description: "Experience the magic of music and live performances with our Music & Concerts event!...",
        eventNo: 64,
        icon: Music
    },
    {
        id: 7,
        name: "Food&Drinks",
        image: "/assets/images/food.png",
        description: "Indulge your taste buds and join us for our Food & Drinks event! Whether you're a foodie...",
        eventNo: 53,
        icon: Wine

    },
    {
        id: 8,
        name: "Arts&Culture",
        image: "/assets/images/art.png",
        description: "Immerse yourself in the world of creativity and expression with our Arts & Culture event!...",
        eventNo: 29,
        icon: Brush
    },
    {
        id: 9,
        name: "Outdoor&Adventure",
        image: "/assets/images/adventure.png",
        description: "Embrace the great outdoors and join us for our Outdoor & Adventure event! Whether you're an adrenaline...",
        eventNo: 47,
        icon: Tent

    },
    {
        id: 10,
        name: "Education&Workshops",
        image: "/assets/images/education.png",
        description: "Expand your knowledge and skills with our Education & Workshops event! Whether you're a lifelong learner,...",
        eventNo: 34,
        icon: BookOpen
    },
    {
        id: 11,
        name: "JoinPrivateEvents",
        image: "/assets/images/private.png",
        description: "Experience exclusivity and connection with our Join Private Events! Whether you're looking for intimate gatherings...",
        eventNo: 3,
        icon: Lock
    },
    {
        id: 12,
        name: "Social&Fun",
        image: "/assets/images/social.png",
        description: "Embrace the joy of socializing and fun with our Social & Fun event! Whether you're a social butterfly, a fun seeker...",
        eventNo: 61,
        icon: Users
    }
]
export const workingList = [
    {
        id: 1,
        icon: Cog,
        heading: "Set Your Interests",
        description: "Tell us what you love — from weekend hikes to live music. We'll match you with events and people who share your vibe."    
    },
    {
        id: 2,
        heading: "Join Group Rooms",
        icon: Users,
        description: "Dive into group rooms based on your interests. Chat, plan meetups, and connect with like-minded locals before you even step out."
    },
    {
    
        id: 3,
        heading: "Attend Events Together",
        icon: Zap,
        description: "Find events that match your interests, RSVP with your new friends, and experience the city together. It's not just about going out — it's about belonging."
    }

]

export const featuresList = [
    {
        id: 1,
        title: "AI-Matched Rooms",
        icon: "🎯",
        description:  "Don't show up alone. Our algorithm matches you with people who share your exact interests and personality. Join a Group Room, chat before the event, and walk in already knowing your people."
    },
    {
        id: 2,
        title: "Smart Reccomdations",
        icon: "🧠",
        description: "Our AI learns your preferences and social style to recommend events and people you'll genuinely connect with. The more you use it, the better it gets — it's like having a personal social planner in your pocket."
    },
    {
        id: 3,
        title: "Compatibility Scores",
        icon: "❤️",
        description: "See your compatibility percentage with other attendees before joining an event. It's a fun way to gauge potential connections and find your perfect social match."
    },
    {
        id: 4,
        title: "Points for Attending",
        icon: "🎉",
        description: "Earn points when you attend events with your matches. The more points you earn, the more perks and rewards you unlock — it's our way of celebrating your social adventures."
            
    },
    {
        id: 5,
        title: "Private Event Hosting",
        icon: "🔒",
        description: "Want to organize your own event? Create a private event and share it with your matches or the wider community using private room codes. It's your space to connect and have fun on your terms."
    },
    {
        id: 6,
        title: "Built for Newcomers",
        icon: "🌆",
        description: "Whether you're new to the city or just looking to expand your social circle, our platform is designed to help you find your people and experience your city in a whole new way."
    }
]

export const reviewsList = [
    {
        id: 1,
        name: "Emily R.",
        location: "Bowling Arena, Tokyo",
        review: "EventCircle transformed my social life! I moved to a new city and was struggling to meet people. The AI-matched rooms helped me find friends who share my interests, and I've attend "

    },
    {
        id: 2,
        name: "Michael S.",
        location: "Tech Conference, Tokyo",
        review: "EventCircle made it so easy to connect with like-minded professionals at the tech conference. The AI-matched rooms helped me find interesting conversations and potential collaborators. "

    },
    {
        id: 3,
        name: "Sophia L.",
        location: "Music Festival, Tokyo",
        review: "I was nervous about going to the music festival alone, but EventCircle's compatibility scores helped me find people with similar music tastes. I ended up having an incredible time with "

    },
    {
        id: 4,
        name: "David K.",
        location: "Outdoor Adventure, Tokyo",
        review: "EventCircle's smart recommendations led me to an outdoor adventure event that I would have never found on my own. I met some amazing people who share my love for hiking and nature. "
    },
    {
        id: 5,
        name: "Olivia M.",
        location: "Food & Drinks, Tokyo",
        review: "I used to struggle with finding people to go out with, but EventCircle's private event hosting feature allowed me to organize a food and drinks night with my matches. It was so much" 
    },
    {
        id: 6,
        name: "James T.",
        location: "Health & Wellness, Tokyo",
        review: "EventCircle's focus on health and wellness events helped me find a community of like-minded individuals who prioritize self-care. I've attended yoga classes and wellness workshops" 
    },
    {
        id: 7,
        name: "Ava W.",
        location: "Arts & Culture, Tokyo",
        review: "EventCircle's arts and culture events introduced me to a vibrant community of creatives in the city. I've attended gallery openings and art workshops together with my matches, and"
    },
    {
        id: 8,
        name: "Ethan B.",
        location: "Sports & Turfs, Tokyo",
        review: "EventCircle's sports and turfs events helped me find a group of active individuals who love sports as much as I do. I've attended soccer games and outdoor fitness classes together"
    },
    {
        id: 9,
        name: "Mia C.", 
        location: "Education & Workshops, Tokyo",
        review: "EventCircle's education and workshops events have been a great way for me to learn new skills and meet people with similar interests. I've attended coding workshops and language" 
    },
    {
        id: 10,
        name: "Liam D.",
        location: "Social & Fun, Tokyo",
        review: "EventCircle's social and fun events have been a blast! I've attended game nights and social mixers together with my matches, and it's been an amazing way to unwind and connect" 
    },
    {
        id: 11,
        name: "Isabella P.",
        location: "Nightlife & Clubbing, Tokyo",
        review: "EventCircle's nightlife and clubbing events helped me find a group of fun-loving individuals who enjoy the city's vibrant nightlife. I've attended club nights and bar crawls"
    },
    {
        id: 12,
        name: "Noah G.",
        location: "Arcade & Game Zones, Tokyo",
        review: "EventCircle's arcade and game zones events have been a fantastic way for me to connect with fellow gamers in the city. I've attended gaming tournaments and arcade nights together"
    }

]