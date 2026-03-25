// src/app/layout.tsx

import Sidebar from "@/components/dashboardUser/sidebar";
import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from '@/components/dashboardUser/navbar'
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EventCircle — Find Your People. Experience Your City.",
  description:
    "Join group rooms, attend events together, and make genuine connections. Built for people new to the city.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex">
        <div className="w-[18%] h-full">
            <Sidebar/>
        </div>
        <div className="w-[82%] h-full">
            <div className="h-[10%] w-full">
                <Navbar/>
            </div>
            <div className="h-[90%] w-full bg-(--purple-black) overflow-y-auto">
                {children}
            </div>

        </div>
    </div>
        
     
 
  );
}