'use client'

import { toast } from "sonner"
import { useContext, useState } from "react";
import { ThemeContext } from "@/src/context/themeContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/src/lib/firebase";



const Message = () => {

  const { theme } = useContext(ThemeContext);
  const bg = theme === "dark" ? "bg-black border border-gray-700 " : "bg-gray-300 hover:bg-gray-500 hover:text-white ";

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.fullName || !message.email || !message.message) {
      toast.error('Please fill in all fields');
      return;
    }

    try{
      setLoading(true);

      const messagesCollection = collection(db, 'portfolioMessages');

      await addDoc(messagesCollection, {
        fullName: message.fullName,
        email: message.email,
        message: message.message,
        createdAt: serverTimestamp(),
        read: false
      });

      setMessage({
        fullName: '',
        email: '',
        message: ''
      });

      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message: ', error);
      toast.error('Error sending message. Please try again later.');
    } finally {
      setLoading(false);
    }
    
  }

  return (
    <div
     className='w-[90%] lg:w-[60%] my-5 mt-10 flex flex-col '
    >
      <div
        className='   w-full'
      >
        <h1 className='text-center text-2xl font-bold mb-4'>Contact Me</h1>
        <form 
          onSubmit={handleSubmit}
          className='grid gap-4 lg:grid-cols-2 grid-cols-1 [&_input]:outline-none [&_input]:shadow-md [&_input]:p-3 [&_input]:rounded-md [&_input]:w-full text-start'>
          <div className='flex flex-col  h-full gap-4 mb-4 lg:mb-0'>
            <input 
              onChange={handleChange}
              name="fullName"
              type="text" 
              value={message.fullName}
              placeholder='FullName'
              className='glass8 '
              />
            <input 
              onChange={handleChange}
              name="email"
              type="email" 
              value={message.email}
              placeholder='Email' 
              className='glass8 '
              />
          </div>
          <div className="flex flex-col ">
            <textarea 
              onChange={handleChange}
              name="message"
              value={message.message} 
              placeholder='Message' 
              className='min-h-[200px] glass8 outline-none w-full p-3'/>

              
              <button  
                type="submit"
                disabled={loading}
                className={`${bg}  hover:border-green-700 hover:border-dashed hover:rounded-xl p-2 px-5 mt-3  text-sm cursor-pointer transition-all duration-500  w-fit ml-auto lg:ml-0`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Message