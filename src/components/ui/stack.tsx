"use client";

import { useContext } from "react";
import { ThemeContext } from "@/src/context/themeContext";


const tools = [
  {
    id: 2,
    name: "Next.js",
  },
  {
    id: 3,
    name: "React.js",
  },
  {
    id: 4,
    name: "TypeScript",
  },
  {
    id: 5,
    name: "Tailwind CSS",
  },
  {
    id: 6,
    name: "Firebase",
  },
  {
    id: 7,
    name: "Framer Motion",
  },
  {
    id: 8,
    name: "Git & GitHub",
  },
  {
    id: 9,
    name: "EmailJs",
  },
  {
    id: 10,
    name: "AOS - Animate on Scroll",
  },
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
          <div 
            key={tool.id} 
            className='text-sm glass4 px-2 cursor-pointer'>
              {tool.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stack

