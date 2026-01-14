'use client'

import React, { useEffect, useState } from "react";
import AdminAuthGuard from "@/src/components/authGuard/page";
import { Timestamp } from "firebase/firestore";
import { db } from "@/src/lib/firebase";
import { collection, onSnapshot, query, orderBy, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { IoCheckmarkDone, IoCheckmarkOutline  } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";


interface Message {
  id: string;
  fullName: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: Timestamp;
}



const AdminPage = () => {

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "portfolioMessages"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, snapshot => {
      const msgs: Message[] = snapshot.docs.map(doc => {
        const data = doc.data() as Omit<Message, "id">; // type-safe cast
        return {
          id: doc.id,
          ...data
        };
      });

      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);


   const markAsRead = async (id: string, current: boolean) => {
    if (!current) {
      await updateDoc(doc(db, "portfolioMessages", id), { read: true });
    }
  };

    const deleteMessage = async (id: string) => {
    if (confirm("Delete this message?")) {
      await deleteDoc(doc(db, "portfolioMessages", id));
    }
  };

  const unreadCount = messages.filter(m => !m.read).length;


  return (
    <AdminAuthGuard>
      <main className=' pt-5   lg:pt-20 grid place-items-center gap-5 lg:w-[80%] w-[90%]  m-auto relative'>
        <h1 className="font-semibold text-lg mr-auto">Dashboard</h1>

        <div className='absolute top-5 right-0 cursor-pointer border hover:border-dashed hover:rounded-lg hover:bg-white/10 transition duration-300'>
          <div className=' p-2 rounded relative '>
            <IoIosNotificationsOutline size={22}/>

            {/* Number of Unread Messages */}
            {unreadCount > 0 && (
              <span className='text-[11px] p-1 border border-gray-800 bg-amber-800 w-4 h-4 rounded-full absolute top-1 right-1 flex items-center justify-center'>
                {unreadCount}
              </span>
            )}
          </div>
        </div>

        <button 
          className='text-xs border bg-white/10 p-2 px-6 rounded mr-auto hover:bg-black hover:text-white transition cursor-pointer'
          >Add Project
        </button>

        <h1 className="font-medium underline">Messages</h1>
         {messages.map(message => (
          <div
            key={message.id}
            className={`border glass9 w-full p-2 text-xs cursor-pointer hover:bg-white/10 transition ${!message.read ? "bg-yellow-50" : ""}`}
            onClick={() => markAsRead(message.id, message.read)}
          >
            <div className='flex justify-between'>
              <h3>{message.fullName}</h3>
              <div className='flex items-center gap-2'>
                <h3>{message.email}</h3>
                <MdOutlineDelete
                  size={16}
                  className='cursor-pointer hover:text-red-500 transition'
                  onClick={(e) => {
                    e.stopPropagation(); // prevent markAsRead trigger
                    deleteMessage(message.id);
                  }}
                />
              </div>
            </div>
            <hr className='my-1' />
            <div className='flex items-center gap-2 w-full justify-between'>
              <p className="
                text-gray-400 
                  max-h-4 
                  hover:max-h-96 
                  transition-all 
                  duration-500 
                  overflow-hidden
                ">
                {message.message}
              </p>
              <div>
                {message.read
                  ? <IoCheckmarkDone size={16} className='text-green-700'/>
                  : <IoCheckmarkOutline size={16} className='text-gray-500' />}
              </div>
            </div>
          </div>
        ))}
      </main>
    </AdminAuthGuard>
  )
}

export default AdminPage