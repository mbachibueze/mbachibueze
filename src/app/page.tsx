'use client'

import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "@/src/context/themeContext";

import Hero from "../components/ui/hero";
import ProjectCardModal from "@/src/components/ui/project/projectCardModal";
import { Project, Projects } from "@/src/app/work/data/project";
import Footer from "../components/ui/footer";
import { AnimatePresence } from "framer-motion";
import Service from "../components/ui/service";
import { HeroProjectCard } from "../components/ui/project/heroProjectCard";
import { MoveRight } from 'lucide-react';
import Link from "next/link";
import Stack from "../components/ui/stack";

export default function Home() {


    const { theme } = useContext(ThemeContext);
  
    const link = theme === "dark" ? "text-[#77d6ff]" : "text-[#015c8b]";

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  

  return (
    <div className="grid place-items-center">
      <Hero />



      <div className="w-[90%] lg:w-[60%] m-auto my-5 flex flex-col  ">
        {Projects.slice(2,3).map((project) => (
          <HeroProjectCard
          key={project.id}
          project={project}
          onOpen={() => setSelectedProject(project)}
          />
        ))}
        <Link 
          href='/work'
          className={`ml-auto text-xs text-right p-2 flex items-center gap-2 hover:underline ${link}`}
          >
            <MoveRight size={15} />
            Projects
        </Link>
      </div>
      
      <Service/>

      <Stack/>

      <Footer/>

      <AnimatePresence>
        {selectedProject && (
          <ProjectCardModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
