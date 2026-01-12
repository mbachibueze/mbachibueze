'use client'

import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { ThemeContext } from "@/src/context/themeContext";
import { CircleX, EyeClosed, Eye } from "lucide-react";

type SignInModalProps = {
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({onClose}) => {


  const { theme } = useContext(ThemeContext);
  const bg = theme === "dark" ? "bg-[#274f63] text-[#b0b0b0]" : "bg-[#d8f1f5] text-[#4f4f4f]";

  const username = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
  const password = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const router = useRouter();

  const [inputPassword, setPassword] = useState('')
  const [inputUsername, setUsername] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  const handleSignInClick = () => {
    if(inputUsername === username && inputPassword === password) {
      setMessage("Signed in successfully")
      onClose();
      router.push('/admin');
    } else {
      setErrorMessage("Invalid credentials")
    }
  }


  return (
    <div className='fixed inset-0 z-50'>

      <div 
        className='fixed z-40 bg-black/90 h-full w-full grid place-items-center p-5 text-white'>

          <div 
            onClick={onClose}
            className='absolute top-5 right-5 cursor-pointer text-gray-400'>
            <CircleX/>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault()
              handleSignInClick()
            }}
            className={`${bg} rounded-lg flex flex-col items-center sm:gap-3 gap-5 sm:p-5 p-10 text-center [&_input]:glass2 [&_input]:outline-none [&_input]:rounded  [&_input]:p-2 [&_input]:text-sm  [&_input]:px-2 [&_input]:w-[250px] `}>
            <h1 className='capitalize font-semibold'>Admin login</h1>

            <input 
              type="email" 
              className='bg-black/20 w-full'
              value={inputUsername}
              onChange={(e) => setUsername(e.target.value)}
            />

            <div className="flex items-center bg-black/20 rounded pr-2 gap-2 w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                className="bg-transparent flex-1"
                value={inputPassword}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className=' absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full'>
                {showPassword ? (
                  <EyeClosed
                    size={15}
                    className="cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Eye
                    size={15}
                    className="cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>

            <div>
              {message && <p className='text-green-500 text-sm'>{message}</p>}
              {errorMessage && <p className='text-red-500 text-sm'>{errorMessage}</p>}
            </div>


            <button 
              type='submit'
              className='border border-gray-500 hover:border-dashed hover:border-green-700 hover:rounded-lg hover:bg-black/50  cursor-pointer w-fit px-8 p-1 text-sm transition-all duration-300'>
                Sign In 
                
            </button>

          </form>

      </div>

    </div>
  )
}

export default SignInModal