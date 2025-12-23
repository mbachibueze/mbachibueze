import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";





const Hero = () => {



  return (
    <main className="grid place-items-center">
      <div className="lg:h-[80vh] h-[60vh] py-10 lg:pt-15   grid place-items-center  text-center">
        <div className=" flex flex-col items-center gap-7  lg:w-[50%] ">

          <Link 
          href="https://caretrack-25.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center p-1 px-4 rounded-full border w-fit text-sm glass cursor-pointer">
            <p className="font-bold">CareTrack</p>
            <aside className="h-4 w-px bg-[#049ee24d]"></aside>
            <p className=" text-shadow-2xs  text-[#006ca8] font-medium">
              Featured work
            </p>
          </Link>

          <h1
            className="
              capitalize text-4xl lg:text-7xl font-semibold 
            "
          >
            Welcome to my personal archive.
          </h1>

          <p className="text-[#6d6d6d] px-10  text-center lg:text-lg md:text-base text-sm">
            Mechanical Engineer turned Frontend Engineer, building clean,
            scalable digital experiences. Passionate about UI/UX,
            high-performance web apps, and the intersection of engineering,
            design, and AI.
          </p>

          <Link
            href="/about"
            className="flex items-center gap-3 glass2 rounded-full text-sm p-1 cursor-pointer group transition-all duration-300 hover:bg-[#ffffff26]"
          >
            <Image
              src="/favicon.svg"
              alt="My Image"
              width={27}
              height={27}
              className="mx-auto rounded-full border border-[#ffffff4d]"
            />
            <p className="whitespace-nowrap text-sm">About - Mba Chibueze</p>

            {/* Chevron container */}
            <div className="overflow-hidden w-0 group-hover:w-5 transition-all duration-300">
              <ChevronRight size={15} />
            </div>
          </Link>

          
        </div>
      </div>
    </main>
  );
};

export default Hero;
