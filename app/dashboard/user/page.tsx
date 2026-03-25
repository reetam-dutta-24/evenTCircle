import React from "react";
import sidebar from "@/components/dashboardUser/sidebar";
import navbar from "@/components/dashboardUser/navbar";
import Link from "next/link";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import {
  eventDetails,
  groupRoomsData,
  usersData,
} from "@/lib/userDashboard/data";
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
              className="glass p-5 rounded-lg flex flex-col gap-3 items-center"
            >
              <div className="flex gap-3 items-center">
                <h5>{x.emoji}</h5>
                <h5 style={{ color: `var(${x.color})` }}>{x.title}</h5>
              </div>
              <h3 style={{ color: `var(${x.color})` }}>{x.show}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="glass rounded-lg p-4 w-[85%] h-[20%] flex flex-col gap-4 justify-center  ">
          <h3 className="text-(--text-primary) ml-20 ">
            How Are You Feeling Today?
          </h3>
          <div className="flex justify-around">
            <div className="text-(--text-secondary) flex gap-10 items-center">
              <h5>Energy</h5>
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

      <div className=" h-[30%] mt-5 ml-10 flex flex-col gap-6">
        <div className="flex gap-3">
          <h4>💚</h4>
          <h3 className="text-(--text-primary)">
            Perfect For Newcomers This Week
          </h3>
          <Link href="newcomerEvents">
            <span>See All→</span>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-4    ">
            {newcomerEvents.map((newEvents) => (
              <div
                key={newEvents.eventID}
                className="glass w-100 h-120 shrink-0 flex flex-col  p-3 rounded-lg"
              >
                <div>
                  <img
                    src={newEvents.image}
                    alt={newEvents.eventTitle}
                    className="w-[100%] h-[75%] object-cover contrast-100"
                  />
                </div>
                <div className="relative bottom-12 flex flex-col gap-3">
                  <h4 className="text-(--text-primary) leading-tight">
                    {newEvents.eventTitle}
                  </h4>

                  <div className="text-(--text-secondary) flex flex-col gap-2">
                    <div className="flex gap-4">
                      <span>📅 {newEvents.time}</span>
                      <span>{newEvents.date}</span>
                      <span className="ml-40">${newEvents.price}</span>
                    </div>
                    <div>
                      <span>📍, {newEvents.address}</span>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center text-2xs">
                    <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                      {" "}
                      {newEvents.spotsLeft} spots remaining
                    </span>

                    <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                      {newEvents.totalSpots - newEvents.spotsLeft} people going
                    </span>
                  </div>
                  <div className="mt-1 flex justify-around">
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
      </div>
      <div className=" h-[30%] mt-5 ml-10 flex flex-col gap-6">
        <div className="flex gap-3">
          <h4>🔥</h4>
          <h3 className="text-(--text-primary)">
            Trending in Bangalore
          </h3>
          <Link href="/trendingevents">
            <span>See All→</span>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-4    ">
            {trendingEvents.map((newEvents) => (
              <div
                key={newEvents.eventID}
                className="glass w-100 h-120 shrink-0 flex flex-col  p-3 rounded-lg"
              >
                <div>
                  <img
                    src={newEvents.image}
                    alt={newEvents.eventTitle}
                    className="w-[100%] h-[75%] object-cover contrast-200"
                  />
                </div>
                <div className="relative bottom-12 flex flex-col gap-3">
                  <h4 className="text-(--text-primary) leading-tight">
                    {newEvents.eventTitle}
                  </h4>

                  <div className="text-(--text-secondary) flex flex-col gap-2">
                    <div className="flex gap-4">
                      <span>📅 {newEvents.time}</span>
                      <span>{newEvents.date}</span>
                      <span className="ml-40">${newEvents.price}</span>
                    </div>
                    <div>
                      <span>📍, {newEvents.address}</span>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center text-2xs">
                    <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                      {" "}
                      {newEvents.spotsLeft} spots remaining
                    </span>

                    <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                      {newEvents.totalSpots - newEvents.spotsLeft} people going
                    </span>
                  </div>
                  <div className="mt-1 flex justify-around">
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
      </div>
      <div className=" h-[30%] mt-5 ml-10 flex flex-col gap-6">
        <div className="flex gap-3">
          <h4>🎯</h4>
          <h3 className="text-(--text-primary)">
            Based on Your Interests
          </h3>
          <Link href="/foryouevents">
            <span>See All→</span>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <div className="flex gap-4    ">
            {forYouEvents.map((newEvents) => (
              <div
                key={newEvents.eventID}
                className="glass w-100 h-120 shrink-0 flex flex-col  p-3 rounded-lg"
              >
                <div>
                  <img
                    src={newEvents.image}
                    alt={newEvents.eventTitle}
                    className="w-[100%] h-[75%] object-cover contrast-200"
                  />
                </div>
                <div className="relative bottom-12 flex flex-col gap-3">
                  <h4 className="text-(--text-primary) leading-tight">
                    {newEvents.eventTitle}
                  </h4>

                  <div className="text-(--text-secondary) flex flex-col gap-2">
                    <div className="flex gap-4">
                      <span>📅 {newEvents.time}</span>
                      <span>{newEvents.date}</span>
                      <span className="ml-40">${newEvents.price}</span>
                    </div>
                    <div>
                      <span>📍, {newEvents.address}</span>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center text-2xs">
                    <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                      {" "}
                      {newEvents.spotsLeft} spots remaining
                    </span>

                    <span className="rounded-full p-2 bg-(--purple-dim) text-(--purple-accent)">
                      {newEvents.totalSpots - newEvents.spotsLeft} people going
                    </span>
                  </div>
                  <div className="mt-1 flex justify-around">
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
      </div>
    </div>
  );
}
export default page;
