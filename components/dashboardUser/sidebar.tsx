import React from 'react'
import Link from 'next/link';
import {
  Home,
  Search,
  Users,
  Calendar,
  Star,
  Grid,
  User,
  Settings,
  Users2
} from "lucide-react";
const sidebardata = [
    {
        id: 1,
        title: "Home",
        icon: <Home/>,
        link: '/dashboard/user'
    },
    {
        id:2,
        title: "Discover Events",
        icon: <Search/>,
        link: '/dashboard/user/discover'
    },
    {
        id: 3,
        title: "My Rooms",
        icon: <Users/>,
        link: '/dashboard/user/rooms'
    },
    {
        id: 4,
        title: "My Bookings",
        icon: <Calendar/>,
        link: '/dashboard/user/bookings'
    },
    {
        id: 5,
        title: "My Points",
        icon: <Star/>,
        link: '/dashboard/user/points'
    },
    {
        id: 6,
        title: "Explore Category",
        icon: <Grid/>,
        link: '/dashboard/user/explore'
    },
    {
        id: 7,
        title: "My Profile",
        icon: <User/>,
        link: '/dashboard/user/profile'
    },
    {
        id: 8,
        title: "Settings",
        icon: <Settings/>,
        link: '/dashboard/user/settings'
    }
]
function sidebar() {
  return (
    <div className='flex flex-col p-15  text-(--text-secondary) gap-20 glass h-full w-full'>
      <div>
        <h1 className='text-white'>Logo</h1>
      </div>
      <div className='flex flex-col gap-7'>
        {sidebardata.map((x)=>(
            <div key = {x.id}>
                <Link href = {x.link}>
                <div className='flex gap-5 items-center'>
                    <span>{x.icon}</span>
                    <span>{x.title}</span>
                </div>
                </Link>
                
            </div>
        ))}
      </div>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-3'>
            <Users2/>
            <h3>Reetam Dutta</h3>
        </div>
        <div>
            <p>📍 Bangalore</p>
        </div>
      </div>
    </div>
  )
}

export default sidebar
