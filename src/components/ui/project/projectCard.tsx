"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/src/context/themeContext";

import { ExternalLink } from "lucide-react";
import { Project } from "@/src/app/work/data/project";



type ProjectCardProps = {
  project: Project;
  onOpen: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({project, onOpen}) => {
  const { theme } = useContext(ThemeContext);

  const link = theme === "dark" ? "text-[#77d6ff]" : "text-[#015c8b]";
  const description = theme === "dark" ? "text-[#b0b0b0]" : "text-[#4f4f4f]";

  return (
    <main className="w-full p-2 glass4 flex flex-col">

        <div className="relative w-full h-45 sm:h-78 lg:h-45 rounded-lg  overflow-hidden ">
          <Image
            src={project.imageSrc}
            alt={project.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <h1 className="my-2 font-semibold text-lg">
          {project.title}
        </h1>

        <p className={`text-sm ${description}`}>
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="mt-2 flex flex-wrap">
          {project.techStack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="glass5 p-1 px-2 text-xs border mr-2 mb-2 inline-block"
            >
              {tech}
            </span>
          ))}

          {project.techStack.length > 5 && (
            <span className="glass5 p-1 px-2 text-xs border mr-2 mb-2 inline-block opacity-80">
              +{project.techStack.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className={`text-sm mt-auto    flex gap-10  justify-between items-center ${link} `}>

          <span 
            onClick={onOpen}
            className="hover:text-white cursor-pointer flex items-center gap-1">
              View Details 
          </span>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer  flex items-center gap-1 hover:text-white"
          >
            <span>Live</span> <ExternalLink size={13} />
          </a>
        </div>
      </main>
  );
};



