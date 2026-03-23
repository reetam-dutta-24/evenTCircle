// src/app/layout.tsx

import type { Metadata } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";

import Leftauth from "@/components/authentication/leftauth";
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
    
    
        <div className="flex ">
          <div className="w-[35vw] h-[100vh] flex flex-col gap-8">
            <h3 className="text-white">EventCircle</h3>
            <Leftauth />
          </div>
          <div>
            {children}
          </div>
        </div>
    
    
  );
}
