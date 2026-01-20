"use client";

import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CircleUserRound,
  GalleryVerticalEnd,
  House,
  Sun,
  TableCellsSplit,
  Moon,
} from "lucide-react";
import { ThemeContext } from "@/src/context/themeContext";

const links = [
  { href: "/", label: "Home", icon: House },
  { href: "/about", label: "About", icon: CircleUserRound },
  { href: "/work", label: "Work", icon: TableCellsSplit },
  { href: "/gallery", label: "Gallery", icon: GalleryVerticalEnd, prefetch: true },
];

const Navigation = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  // Clock state
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const navBg = theme === "dark" ? "bg-black" : "bg-white";
  

  return (
    <main
      className={`flex justify-around md:justify-between p-2 items-center text-sm fixed w-full bottom-6 md:top-3 md:bottom-auto z-50`}
    >
      <p className="hidden md:block">Africa/Port Harcourt</p>

      <nav
        className={`p-1 glass2  rounded-full flex items-center gap-1 
        [&_a]:hover:bg-[#5d5d5d9e] 
        [&_a]:hover:border-[#5d5d5d] 
        [&_a]:p-2
        [&_a]:px- 
        [&_a]:rounded-full 
        [&_a]:flex 
        [&_a]:items-center 
        [&_a]:text-xs 
        [&_a]:gap-3 cursor-pointer
        [&_p]:hidden md:[&_p]:block
        ${navBg} `}
      >
        {/* Home */}
        {links.slice(0, 1).map(({ href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`${isActive(href) ? "glass3 px-5 border border-[#5d5d5d]" : ""}`}
            prefetch={true}
          >
            <Icon size={13} />
          </Link>
        ))}

        <aside className="h-6 w-px bg-[#454545]"></aside>

        {/* Remaining links */}
        {links.slice(1).map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`${isActive(href) ? "glass3 " : ""}`}
          >
            <Icon size={13} />
            <p>{label}</p>
          </Link>
        ))}

        <aside className="h-6 w-px bg-[#454545]"></aside>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className=" p-2 rounded-full glass3 cursor-pointer "
        >
          {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
        </button>
      </nav>

      {/* Live Time */}
      <p className="hidden md:block  w-22">{time}</p>
    </main>
  );
};

export default Navigation;
