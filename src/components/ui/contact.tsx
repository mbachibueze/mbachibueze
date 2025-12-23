"use client";

import { useContext } from "react";
import { ThemeContext } from "@/src/context/themeContext";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ChevronRight } from "lucide-react";


const Contact = () => {

  
  const { theme } = useContext(ThemeContext);
  const description = theme === "dark" ? "text-[#b0b0b0]" : "text-[#4f4f4f]";


  return (
    <div  className="w-[90%] lg:w-[60%] my-5 mt-10 flex flex-col items-center" > 
      <div className='glass4 p-5 py-8'>
        <h1 className="font-semibold text-center text-2xl sm:text-4xl lg:text-7xl">Need a custom solution for your business?</h1>
        <p className={` text-lg lg:text-xl text-center ${description} my-5`}>
          Let's collaborate and turn your vision into reality. Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect
        </p>
          {/* <Link href="https://cal.com/mba-chibueze/briefing" target="_blank">
            <button
              className="
                flex items-center gap-3 glass2 rounded-full text-sm p-1 pl-3 cursor-pointer group transition-all duration-300 hover:bg-[#ffffff26]
                w-fit mx-auto mt-5
              "
            >
              <CalendarDays size={18}  />

              <p className="whitespace-nowrap ">Schedule a call</p>
              

              <ChevronRight
                size={25}
                className="p-1 border border-[#049ee24d] rounded-full "
              />
            </button>
          </Link> */}

          <Link
            href="https://cal.com/mba-chibueze/briefing"
            target="_blank"
            className="flex items-center gap-3 glass2 rounded-full  p-1 pl-3 cursor-pointer group transition-all duration-300 hover:bg-[#ffffff26]
            w-fit mx-auto mt-5"
          >
            <CalendarDays size={18}  />

            <p className="whitespace-nowrap ">Schedule a Meeting</p>

            {/* Chevron container */}
            <div className="overflow-hidden w-0 group-hover:w-5 transition-all duration-300">
              <ChevronRight size={15} />
            </div>

          </Link>
      </div>
    </div>
  )
}

export default Contact