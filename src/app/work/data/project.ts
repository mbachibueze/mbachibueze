export type Project = {
  id: string;
  imageSrc: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  challenges?: string;
  solutions?: string;
  techStack: string[];
  link: string;
}

export const Projects: Project[] = [
  {
    id: "brela",
    imageSrc: "/brela.png",
    title: "Brela - An Agency Website Clone",
    shortDescription:
      "A clone of Brela Agency website built with Next.js and Tailwind CSS. It features a responsive design, smooth animations, and interactive elements to showcase the agency's services and portfolio effectively.",
    longDescription: `Brela is a clone of the Brela Agency website, meticulously crafted using Next.js and Tailwind CSS. The project emphasizes a responsive design that adapts seamlessly across various devices, ensuring an optimal user experience. It incorporates smooth animations and interactive elements to effectively showcase the agency's services and portfolio. The website aims to replicate the original's aesthetic and functionality while providing insights into modern web development practices.`,
    techStack: ["Next.js", "Typescript", "Tailwind", "Framer Motion"],
    link: "https://brela.vercel.app/",
  },
  {
    id: "techCrib",
    imageSrc: "/techCrib.png",
    title: "TechCrib – Modern Agency Website",
    shortDescription:
      "A modern agency website built with Next.js and Tailwind CSS featuring smooth animations, responsive layouts, dynamic service sections, and a polished user experience across all devices.",
    longDescription: `TechCrib is a modern digital agency website designed to highlight services, projects, and brand identity with a clean and premium UI. Built using Next.js, TypeScript, Tailwind CSS, and Framer Motion, the site focuses on performance, fast transitions, and a visually engaging layout. It features reusable components, dynamic content sections, responsive grids, and a structured workflow that mirrors real-world agency website standards. The design emphasizes clarity, minimalism, and multi-device accessibility.`,
    techStack: ["Next.js", "Typescript", "Tailwind"],
    link: "https://techcrib.vercel.app/",
  },
      {
    id: "caretrack5",
    imageSrc: "/caretrack.png",
    title: "CareTrack – Vaccination  Tracker",
    shortDescription:
      "A responsive healthcare web platform built with Next.js and Tailwind CSS that helps parents track immunisation schedules, connect with doctors, book appointments, and manage child health records with reminders and interactive features.",
    longDescription: `CareTrack is a comprehensive healthcare and vaccination tracking platform built using Next.js and Tailwind CSS. It empowers parents and caregivers to easily schedule vaccination appointments, track immunisation history, and access healthcare services online. The app features a responsive design with smooth animations and intuitive UI, enabling users to connect with certified doctors, manage child health records, receive reminders for upcoming vaccines, and stay informed about essential paediatric care. CareTrack demonstrates modern web development practices while offering a user-centric healthcare experience.`,
    
    techStack: ["Next.js", "Typescript", "Firebase", "Framer Motion", "EmailJs", "Tailwind"],
    link: "https://caretrack-25.vercel.app/",
  },
]