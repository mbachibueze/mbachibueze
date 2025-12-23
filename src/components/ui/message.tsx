'use client'

import { useContext } from "react";
import { ThemeContext } from "@/src/context/themeContext";


const Message = () => {

  const { theme } = useContext(ThemeContext);
  const bg = theme === "dark" ? "bg-black border border-gray-700 " : "bg-gray-300 hover:bg-gray-500 hover:text-white ";

  return (
    <div
     className='w-[90%] lg:w-[60%] my-5 mt-10 flex flex-col '
    >
      <div
        className='  p-5 py-8 w-full'
      >
        <h1 className='text-center text-2xl font-bold mb-4'>Contact Me</h1>
        <div className='grid gap-4 lg:grid-cols-2 grid-cols-1 [&_input]:outline-none [&_input]:shadow-md [&_input]:p-3 [&_input]:rounded-md [&_input]:w-full text-start'>
          <div className='flex flex-col  h-full gap-4 mb-4 lg:mb-0'>
            <input 
              type="text" 
              placeholder='FullName'
              className='glass8 '
              />
            <input 
              type="email" 
              placeholder='Email' 
              className='glass8 '
              />
          </div>
          <div className="flex flex-col ">
            <textarea 
              placeholder='Message' 
              className='min-h-[200px] glass8 outline-none w-full p-3'/>
              <button  
                className={`${bg}  hover:border-green-700 hover:border-dashed hover:rounded-xl p-2 px-5 mt-3  text-sm cursor-pointer transition-all duration-500  w-fit ml-auto lg:ml-0`}
                >
                  Send Message 
                </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message