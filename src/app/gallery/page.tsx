'use client'

import GalleryVideo from "@/src/components/galleryVideo";
import Image from "next/image";
import React from "react";



const Gallery = () => {
  return <main  className="pt-5   lg:pt-20 grid place-items-center gap-5 lg:w-[80%] w-[90%]  m-auto">
    <h1 className="font-semibold text-2xl">Gallery</h1>
    <div className="w-[90%] sm:grid-cols-2 grid gap-5 py-5">
      <Image
        src="/code.svg"
        alt="code image"
        width={500}
        height={500}
        className="hover:scale-102 transition-transform duration-300 cursor-pointer rounded-2xl"
      />
      <Image
        src="/lafarge4.svg"
        alt="lafarge image 4"
        width={300}
        height={500}
        className="hover:scale-102 transition-transform duration-300 cursor-pointer rounded-2xl row-span-2 h-full w-full"
      />
      <Image
        src="/lafarge5.svg"
        alt="lafarge image 3"
        width={300}
        height={500}
        className="hover:scale-102 transition-transform duration-300 cursor-pointer rounded-2xl w-full h-full"
      />
      <Image
        src="/senator.svg"
        alt="senator image"
        width={300}
        height={500}
        className="hover:scale-102 transition-transform duration-300 cursor-pointer rounded-2xl h-fit w-full row-span-2 "
      />
      <Image
        src="/code_landscape.svg"
        alt="mba chibueze"
        width={300}
        height={500}
        className="hover:scale-102 transition-transform duration-300 cursor-pointer rounded-2xl w-full"
      />
      <Image
        src="/code56.svg"
        alt="mba chibueze coding"
        width={300}
        height={500}
        className="hover:scale-102 transition-transform duration-300 cursor-pointer rounded-2xl w-full"
      />
      <Image
        src="/lafarge3.svg"
        alt="mba chibueze coding"
        width={300}
        height={500}
        className="hover:scale-102 transition-transform duration-300 cursor-pointer rounded-2xl w-full"
      />
      <Image
        src="/fullgear.svg"
        alt="mba chibueze coding"
        width={300}
        height={500}
        className="hover:scale-102 transition-transform duration-300 cursor-pointer rounded-2xl w-full row-span-2"
      />
            <div className="row-span-2">
        <GalleryVideo src="/mainVideo.mp4"  />
      </div>
      <Image
        src="/code6.svg"
        alt="mba chibueze coding"
        width={300}
        height={500}
        className="hover:scale-102 transition-transform duration-300 cursor-pointer rounded-2xl w-full "
      />


      
    </div>
  </main>;
};

export default Gallery;
