"use client";

import { useContext } from "react";
import { ThemeContext } from "@/src/context/themeContext";


const tools = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Tailwind CSS",
  "Firebase",
  "Framer Motion",
  "Git & GitHub",
  "EmailJs",
  "AOS - Animate on Scroll",
]


const Stack = () => {

  const { theme } = useContext(ThemeContext);
  const description = theme === "dark" ? "text-[#b0b0b0]" : "text-[#4f4f4f]";

  return (
    <div  className="w-[90%] lg:w-[60%] my-5">
      <h1 className="font-bold mb-2 text-xl lg:text-3xl capitalize text-center">Skills & Tools </h1> 
      <p className={`text-sm text-center ${description}`}>The set of technologies and tools leveraged to build efficient, high-performing, and user-focused applications</p>
      <div className='flex  items-center justify-between text-center gap-2 flex-wrap my-2'>
        {tools.map((tool) => (
          <span className='text-sm glass4 px-2'>{tool}</span>
        ))}
      </div>
    </div>
  )
}

export default Stack