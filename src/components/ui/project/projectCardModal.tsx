'use client'

import React, { useEffect } from 'react'
import { useContext } from "react";
import { ThemeContext } from "@/src/context/themeContext";
import { CircleX, ExternalLink } from "lucide-react";
import { Project } from "@/src/app/work/data/project";
import { motion } from "framer-motion";



type ProjectCardModalProps = {
  project: Project;
  onClose: () => void;
}

const ProjectCardModal: React.FC<ProjectCardModalProps> = ({project, onClose}) => {

  const { theme } = useContext(ThemeContext);
  const description = theme === "dark" ? "text-[#b0b0b0]" : "text-[#4f4f4f]";
  const bg = theme === "dark" ? "bg-[#274f63]" : "bg-[#d8f1f5]";

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50"
    >
      <div 
        
        className='fixed z-40 bg-black/90 h-full w-full grid place-items-center p-5 '>

          <div 
            onClick={onClose}
            className='absolute top-5 right-5 cursor-pointer text-gray-400'>
            <CircleX/>
          </div>

          <div className={` ${bg} w-full lg:w-[40%] max-h-[70vh]   sm:w-[80%] p-2 rounded-lg border border-[#05304c4d] flex flex-col  [&_h1]:font-semibold [&_p]:text-sm [&_p]:${description} `}>
            <div className='overflow-y-auto custom-scrollbar'>
              <h1 className={`font-semibold text-lg mb-5 $`}>{project.title}</h1>

              {/* <h1>About</h1> */}
              <p className={`${description}`}>
                {project.longDescription}
              </p>

              
              <p className={`${description}`}>{project.challenges}</p>

              <p className={`${description}`}>{project.solutions}</p>


              <div className='my-2'>
                {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="glass5 p-1 px-2 text-xs border mr-2 mb-2 inline-block"
                    >
                      {tech}
                    </span>
                  ))}
              </div>

              <div className='w-full relative flex items-center justify-between mt-auto'>
                <div></div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline cursor-pointer text-sm flex items-center gap-1 "
                >
                  <span>Live</span> <ExternalLink size={13} />
                </a>
              </div>

            </div>
          </div>

      </div>
    </motion.div>
  )
}

export default ProjectCardModal