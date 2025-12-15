'use client';
import React from "react";

import { useState } from "react";
import ProjectCardModal from "@/src/components/ui/project/projectCardModal";
import { ProjectCard } from "@/src/components/ui/project/projectCard";
import { Project, Projects } from "@/src/app/work/data/project";
import { AnimatePresence } from "framer-motion";
import Footer from "@/src/components/ui/footer";

const Work = () => {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div>

      <main className="pt-5   lg:pt-20 grid place-items-center gap-5 lg:w-[80%] w-[90%]  m-auto">
        <h1 className="font-semibold text-lg">Projects - Mba Chibueze</h1>

        <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-5">
          {Projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
        
        <Footer />
      </main>

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
};

export default Work;
