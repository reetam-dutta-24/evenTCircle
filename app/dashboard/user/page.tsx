"use client"
import React from "react";
import sidebar from "@/components/dashboardUser/sidebar";
import navbar from "@/components/dashboardUser/navbar";
import Link from "next/link";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import { useRef } from "react";

import {
  eventDetails,
  groupRoomsData,
  usersData,
} from "@/lib/userDashboard/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
function page() {
    
  const newcomerEvents = eventDetails.filter((e) => e.isNewcomerFriendly);

  const trendingEvents = eventDetails.filter((e) => e.isTrending);

  const forYouEvents = [...eventDetails].sort(
    (a, b) => b.compatibilityScore - a.compatibilityScore,
  );

  const topRooms = [...groupRoomsData].sort(
    (a, b) => b.compatibilityScore - a.compatibilityScore,
  );

  const suggestedUsers = [...usersData].sort(
    (a, b) => b.compatibilityScore - a.compatibilityScore,
  );

  const profiledata = [
    {
      id: 1,
      emoji: "📅",
      title: "Events Attended",
      show: 4,
      color: "--purple-bright",
    },
    {
      id: 2,
      emoji: "⭐",
      title: "Points Earned",
      show: 700,
      color: "--yellow-accent",
    },
    {
      id: 3,
      emoji: "👥",
      title: "Connection Made",
      show: 2,
      color: "--pink-accent",
    },
    {
      id: 4,
      emoji: "🔥",
      title: "Current Streak",
      show: 3,
      color: "--orange-accent",
    },
    {
      id: 5,
      emoji: "⚡",
      title: "Profile Strength",
      show: "72.5%",
      color: "--text-primary",
    },
  ];
  const name = "Reetam Dutta";
  const newcomerRef = useRef(null);
const trendingRef = useRef(null);
const forYouRef = useRef(null);
const roomRef = useRef(null)
const userRef = useRef(null)
  const rightclick = (ref)=>{
    if (!ref.current) return;
    ref.current.scrollBy(
        {
            left: 400,
            behavior: "smooth"
        }
    );
}
const leftclick = (ref) =>{
    if (!ref.current) return;
        ref.current.scrollBy(
            {
                left: -400,
                behavior: "smooth"
            }
        )
    }
  
  return (
    <div className="w-full min-h-auto  flex flex-col gap-7  mt-6 overflow-y-auto">
      <div className="flex flex-col items-center">
        <div className="w-[85%] h-[25%] flex flex-col gap-1 p-6 items-center justify-center  rounded-2xl bg-gradient-to-r from-[#ee00ff] via-[#aa00ff] to-[#ee00ff]">
          <h2 className="text-white">Welcome To EventCircle, {name}! 👋</h2>
          <h5 className="text-black">
            Lets Get You Started With All The Events Reccomended to you..
          </h5>
          <div className="flex gap-20 mt-6">
            <h6 className="glass text-(--text-secondary) rounded-full p-2">
              📝 Complete your profile
            </h6>
            <h6 className="glass text-(--text-secondary) rounded-full p-2">
              👥 Join your first room
            </h6>
            <h6 className="glass text-(--text-secondary) rounded-full p-2">
              📅 Attend an event
            </h6>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-3 p-3 w-[85%]">
          {profiledata.map((x) => (
            <div
              key={x.id}
              className="glass p-4 rounded-lg flex flex-col gap-3 items-center"
            >
              <div className="flex gap-3 items-center">
                <h6>{x.emoji}</h6>
                <h6 style={{ color: `var(${x.color})` }}>{x.title}</h6>
              </div>
              <h4 style={{ color: `var(${x.color})` }}>{x.show}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="glass rounded-lg p-4 w-[85%] h-[20%] flex flex-col gap-4 justify-center  ">
          <h4 className="text-(--text-primary) ml-20 ">
            How Are You Feeling Today?
          </h4>
          <div className="flex justify-around">
            <div className="text-(--text-secondary) flex gap-10 items-center">
              <h6>Energy</h6>
              <div className="flex gap-5">
                <span className="p-2 w-20 text-center rounded-full bg-(--purple-dim)">
                  Low
                </span>
                <span className="p-2 w-20 text-center rounded-full bg-(--purple-dim)">
                  Medium
                </span>
                <span className="p-2 w-20 text-center rounded-full bg-(--purple-dim)">
                  High
                </span>
              </div>
            </div>
            <div className="text-(--text-secondary) flex gap-10 items-center">
              <h5>Social</h5>
              <div className="flex gap-5">
                <span className="p-2 w-20 text-center rounded-full bg-(--purple-dim)">
                  Explore
                </span>
                <span className="p-2 w-20 text-center rounded-full bg-(--purple-dim)">
                  Group
                </span>
                <span className="p-2 w-20 text-center rounded-full bg-(--purple-dim)">
                  Solo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-[30%] mt-5 ml-1 flex flex-col gap-4">
        <div className="flex  gap-2 items-center">
          <h3 className="ml-9">💚</h3>
          <h3 className="text-(--text-primary)  font-bold">
            Perfect For Newcomers This Week
          </h3>
          <p className="w-25 p-1 ml-7 font-bold text-(--text-primary) text-center  rounded-full bg-(--teal-accent)">Hot now</p>
          
          <Link href="newcomerEvents">
            <span className="text-(--purple-accent) bg-(--purple-dim) p-3 rounded-full ml-95">See All→</span>
          </Link>
        </div>
        <div className="flex items-center " >
            <div onClick={()=>leftclick(newcomerRef)} className="p-2 rounded-full bg-(--purple-dim) hover:cursor-pointer"><ChevronLeft color="white" size={32}/></div>
        
        <div className="overflow-x-hidden flex gap-2 " ref={newcomerRef}>
          
          <div className="flex gap-4    ">

            {newcomerEvents.map((newEvents) => (
              <div
                key={newEvents.eventID}
                className="glass hover:cursor-pointer  w-85 h-110 shrink-0 flex flex-col  p-3 rounded-lg "
              >
                <div className="relative w-full h-[75%]">
  <img
    src={newEvents.image}
    alt={newEvents.eventTitle}
    className="w-full h-full object-cover rounded-lg "
  />

  {/* Bottom-heavy gradient */}
  <div className="absolute inset-0 rounded-lg 
    bg-[linear-gradient(to_top,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.75)_25%,rgba(0,0,0,0.4)_50%,transparent_75%)]">
  </div>

  {/* Overall vignette (edges) */}
  <div className="absolute inset-0 rounded-lg 
    shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]">
  </div>
</div>
                
                <div className="relative bottom-14 flex flex-col gap-3">
                  <h4 className="text-(--text-primary) text-shadow-2xs p-1 leading-tight backdrop-blur-[4px]">
                    {newEvents.eventTitle}
                  </h4>

                  <div className="text-(--text-secondary) flex flex-col gap-2">
                    <div className="flex gap-4">
                      <span>📅 {newEvents.time}</span>
                      <span>{newEvents.date}</span>
                      <span className="absolute right-0">${newEvents.price}</span>
                    </div>
                    <div>
                      <span>📍, {newEvents.address}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center text-xs">
                    <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                      {" "}
                      {newEvents.spotsLeft} spots remaining
                    </span>

                    <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                      {newEvents.totalSpots - newEvents.spotsLeft} people going
                    </span>
                  </div>
                  <div className=" flex gap-3">
                    <span className="rounded-full p-2  bg-(--purple-dim) text-(--purple-accent)">
                      {newEvents.tags[0]}
                    </span>
                    <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                      {newEvents.tags[1]}
                    </span>
                    <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                      {newEvents.tags[2]}
                    </span>
                    <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                      {newEvents.compatibilityScore}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div onClick={()=>rightclick(newcomerRef)} className="p-2 rounded-full bg-(--purple-dim) hover:cursor-pointer"><ChevronRight color="white" size={32}/></div>
        </div>
      </div>
            <div className=" h-[30%] mt-5 ml-1 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h4 className="ml-9">🔥</h4>
          <h3 className="text-(--text-primary) font-bold">
            Trending in Bangalore
          </h3>
          <p className="w-25 p-1 ml-10 font-bold text-(--text-primary) text-center rounded-full bg-(--orange-accent)">Hot now</p>
          <Link href="/trendingevents">
            <span className="text-(--purple-accent) bg-(--purple-dim) p-3 rounded-full ml-130">See All→</span>
          </Link>
        </div>

        <div className="flex items-center">
          <div onClick={()=>leftclick(trendingRef)} className="p-2 rounded-full bg-(--purple-dim) hover:cursor-pointer">
            <ChevronLeft color="white" size={32}/>
          </div>

          <div className="overflow-x-hidden" ref={trendingRef}>
            <div className="flex gap-4">
              {trendingEvents.map((newEvents) => (
                <div
                  key={newEvents.eventID}
                  className="glass w-85 h-110 shrink-0 flex flex-col p-3 rounded-lg"
                >

                  {/* ✅ UPDATED IMAGE BLOCK */}
                  <div className="relative w-full h-[75%]">
                    <img
                      src={newEvents.image}
                      alt={newEvents.eventTitle}
                      className="w-full h-full object-cover rounded-lg"
                    />

                    <div className="absolute inset-0 rounded-lg 
                      bg-[linear-gradient(to_top,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.75)_25%,rgba(0,0,0,0.4)_50%,transparent_75%)]">
                    </div>

                    <div className="absolute inset-0 rounded-lg 
                      shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]">
                    </div>
                  </div>

                  {/* ✅ MATCHED TEXT POSITION */}
                  <div className="relative bottom-14 flex flex-col gap-3">
                    <h4 className="text-(--text-primary) text-shadow-2xs p-1 leading-tight backdrop-blur-[4px]">
                      {newEvents.eventTitle}
                    </h4>

                    <div className="text-(--text-secondary) flex flex-col gap-2">
                      <div className="flex gap-4">
                        <span>📅 {newEvents.time}</span>
                        <span>{newEvents.date}</span>
                        <span className="absolute right-0">${newEvents.price}</span>
                      </div>
                      <div>
                        <span>📍, {newEvents.address}</span>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center text-xs">
                      <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                        {newEvents.spotsLeft} spots remaining
                      </span>

                      <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                        {newEvents.totalSpots - newEvents.spotsLeft} people going
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                        {newEvents.tags[0]}
                      </span>
                      <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                        {newEvents.tags[1]}
                      </span>
                      <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                        {newEvents.tags[2]}
                      </span>
                      <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                        {newEvents.compatibilityScore}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div onClick={()=>rightclick(trendingRef)} className="p-2 rounded-full bg-(--purple-dim) hover:cursor-pointer">
            <ChevronRight color="white" size={32}/>
          </div>
        </div>
      </div>


      {/* 🎯 FOR YOU SECTION */}
      <div className=" h-[30%] mt-5 ml-1 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h4 className="ml-9">🎯</h4>
          <h3 className="text-(--text-primary) font-bold">
            Based on Your Interests
          </h3>
          <p className="w-25 p-1 ml-10 font-bold text-(--text-primary) text-center rounded-full bg-(--pink-accent)">Hot now</p>
          <Link href="/foryouevents">
            <span className="text-(--purple-accent) bg-(--purple-dim) p-3 rounded-full ml-130">See All→</span>
          </Link>
        </div>

        <div className="flex items-center">
          <div onClick={()=>leftclick(forYouRef)} className="p-2 rounded-full bg-(--purple-dim) hover:cursor-pointer">
            <ChevronLeft color="white" size={32}/>
          </div>

          <div className="overflow-x-hidden" ref={forYouRef}>
            <div className="flex gap-4">
              {forYouEvents.map((newEvents) => (
                <div
                  key={newEvents.eventID}
                  className="glass w-85 h-110 shrink-0 flex flex-col p-3 rounded-lg"
                >

                  {/* ✅ SAME IMAGE EFFECT */}
                  <div className="relative w-full h-[75%]">
                    <img
                      src={newEvents.image}
                      alt={newEvents.eventTitle}
                      className="w-full h-full object-cover rounded-lg"
                    />

                    <div className="absolute inset-0 rounded-lg 
                      bg-[linear-gradient(to_top,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.75)_25%,rgba(0,0,0,0.4)_50%,transparent_75%)]">
                    </div>

                    <div className="absolute inset-0 rounded-lg 
                      shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]">
                    </div>
                  </div>

                  {/* ✅ SAME TEXT POSITION */}
                  <div className="relative bottom-14 flex flex-col gap-3">
                    <h4 className="text-(--text-primary) text-shadow-2xs p-1 leading-tight backdrop-blur-[4px]">
                      {newEvents.eventTitle}
                    </h4>

                    <div className="text-(--text-secondary) flex flex-col gap-2">
                      <div className="flex gap-4">
                        <span>📅 {newEvents.time}</span>
                        <span>{newEvents.date}</span>
                        <span className="absolute right-0">${newEvents.price}</span>
                      </div>
                      <div>
                        <span>📍, {newEvents.address}</span>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center text-xs">
                      <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                        {newEvents.spotsLeft} spots remaining
                      </span>

                      <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                        {newEvents.totalSpots - newEvents.spotsLeft} people going
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                        {newEvents.tags[0]}
                      </span>
                      <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                        {newEvents.tags[1]}
                      </span>
                      <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                        {newEvents.tags[2]}
                      </span>
                      <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                        {newEvents.compatibilityScore}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div onClick={()=>rightclick(forYouRef)} className="p-2 rounded-full bg-(--purple-dim) hover:cursor-pointer">
            <ChevronRight color="white" size={32}/>
          </div>
        </div>
      </div>
      <div className=" h-[30%] mt-5 ml-1 flex flex-col gap-4">
  <div className="flex gap-3 items-center">
    <h4 className="ml-9">👥</h4>
    <h3 className="text-(--text-primary) font-bold">
      Top Group Rooms For You
    </h3>
    <p className="w-25 p-1 ml-10 font-bold text-(--text-primary) text-center rounded-full bg-(--purple-accent)">
      Hot now
    </p>
  </div>

  <div className="flex items-center">
    <div onClick={()=>leftclick(roomRef)} className="p-2 rounded-full bg-(--purple-dim) hover:cursor-pointer">
      <ChevronLeft color="white" size={32}/>
    </div>

    <div className="overflow-x-hidden" ref={roomRef}>
      <div className="flex gap-4">

        {topRooms.map((room) => (
          <div
            key={room.roomID}
            className="glass w-85 h-110 shrink-0 flex flex-col p-3 rounded-lg"
          >

            <div className="relative w-full h-[75%] bg-gradient-to-br from-purple-700 to-purple-900 rounded-lg flex items-center justify-center text-4xl text-white">
              🎤

              <div className="absolute inset-0 rounded-lg 
                bg-[linear-gradient(to_top,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.75)_25%,rgba(0,0,0,0.4)_50%,transparent_75%)]">
              </div>

              <div className="absolute inset-0 rounded-lg 
                shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]">
              </div>
            </div>

            <div className="relative bottom-10 flex flex-col gap-3">
              <h4 className="text-(--text-primary) text-shadow-2xs p-1 backdrop-blur-[4px]">
                {room.roomName}
              </h4>

              <div className="text-(--text-secondary) flex flex-col gap-1 text-sm">
                <span>🎵 {room.eventTitle}</span>
                <span>📍 {room.city}</span>
                <span>👥 {room.currentMembers}/{room.maxMembers} members</span>
              </div>

              <div className="flex -space-x-2">
                {room.memberGradients.map((grad, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-black"
                    style={{ background: grad }}
                  ></div>
                ))}
              </div>

              <div className="flex gap-3 items-center text-xs">
                <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                  {room.vibeCheck}
                </span>

                <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                  {room.compatibilityScore}%
                </span>
              </div>

              <button className="btn-primary mt-2">
                Join Room
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>

    <div onClick={()=>rightclick(roomRef)} className="p-2 rounded-full bg-(--purple-dim) hover:cursor-pointer">
      <ChevronRight color="white" size={32}/>
    </div>
  </div>
</div>
<div className=" h-[30%] mt-5 ml-1 flex flex-col gap-4">
  <div className="flex gap-3 items-center">
    <h4 className="ml-9">🤝</h4>
    <h3 className="text-(--text-primary) font-bold">
      People You May Know
    </h3>
    <p className="w-25 p-1 ml-10 font-bold text-(--text-primary) text-center rounded-full bg-(--pink-accent)">
      Hot now
    </p>
  </div>

  <div className="flex items-center">
    <div onClick={()=>leftclick(userRef)} className="p-2 rounded-full bg-(--purple-dim) hover:cursor-pointer">
      <ChevronLeft color="white" size={32}/>
    </div>

    <div className="overflow-x-hidden" ref={userRef}>
      <div className="flex gap-4">

        {suggestedUsers.map((user) => (
          <div
            key={user.userID}
            className="glass w-70 h-90 shrink-0 flex flex-col p-3 rounded-lg"
          >

            <div className="relative w-full h-[75%] rounded-lg flex items-center justify-center text-5xl text-white"
              style={{ background: user.gradient }}
            >
              {user.initial}

              <div className="absolute inset-0 rounded-lg 
                bg-[linear-gradient(to_top,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.75)_25%,rgba(0,0,0,0.4)_50%,transparent_75%)]">
              </div>

              <div className="absolute inset-0 rounded-lg 
                shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]">
              </div>
            </div>

            <div className="relative bottom-10 flex flex-col gap-3">
              <h4 className="text-(--text-primary) text-shadow-2xs p-1 backdrop-blur-[4px]">
                {user.name}
              </h4>

              <div className="text-(--text-secondary) text-sm flex flex-col gap-1">
                <span>📍 {user.currentCity}</span>
                <span>🎯 {user.personalityVibe}</span>
                <span>🔥 {user.arrivalStatus}</span>
              </div>

              <div className="flex gap-3 flex-wrap">
                {user.interests.slice(0,2).map((tag, i) => (
                  <span key={i} className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                    {tag}
                  </span>
                ))}
                <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                  {user.compatibilityScore}%
                </span>
              </div>

              <button className="btn-primary mt-2">
                Connect
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>

    <div onClick={()=>rightclick(userRef)} className="p-2 rounded-full bg-(--purple-dim) hover:cursor-pointer">
      <ChevronRight color="white" size={32}/>
    </div>
  </div>
</div>
   

    </div>
  );
}
export default page;
