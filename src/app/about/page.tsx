"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { ThemeContext } from "@/src/context/themeContext";
import Image from "next/image";
import { Earth, CalendarDays, ChevronRight } from "lucide-react";
import { Mail } from "lucide-react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa6";
import Footer from "@/src/components/ui/footer";
import SignInModal from "@/src/components/ui/signInModal";

const contacts = [
  {
    href: "https://github.com/mbachibueze",
    icon: FaGithub,
    name: "GitHub",
  },
  {
    href: "https://twitter.com/mba_chibuezez",
    icon: FaXTwitter,
    name: "X Twitter",
  },
  {
    href: "https://www.linkedin.com/in/mba-chibueze-8118a9252",
    icon: FaLinkedinIn,
    name: "LinkedIn",
  },
  {
    href: "https://wa.me/+2347012108363",
    icon: FaWhatsapp,
    name: "Whatsapp",
  },
  {
    href: "mailto:mbachibueze27@gmail.com",
    icon: Mail,
    name: "Email",
  },
];

const About = () => {
  const { theme } = useContext(ThemeContext);

  const english = theme === "dark" ? "bg-black" : "bg-white";
  const header = theme === "dark" ? "text-white" : "text-black";

  const [showSignIn, setShowSignIn] = useState(false)

  const handleSignInClick = () => {
    setShowSignIn(true);
  }


   /* eslint-disable react/no-unescaped-entities */
  return (
    <main className="pt-5 lg:pt-25 grid place-items-center gap-5 ">

      {showSignIn && (
        <SignInModal onClose={() => setShowSignIn(false)} />
      )}

      {/* Avatar & Location */}
      <div className="flex flex-col items-center gap-3">
        <Image
          src="/about.svg"
          alt="Mba Chibueze"
          width={150}
          height={200}
          className="rounded-full border border-white/30"
        />

        <p className="flex items-center gap-2 text-sm">
          <Earth size={15} className="text-[#2fc1ff]" />
          Africa / Abuja
        </p>

        <p
          className={`
            border border-white/30
            px-4 py-1 rounded text-xs
            ${english}
          `}
        >
          English
        </p>
      </div>

      {/* Schedule CTA */}
      <button
        className="
          flex glass items-center gap-2 text-sm border p-1 pl-3 rounded-full w-fit
        "
      >
        <CalendarDays size={18} className="text-[#0088d0]" />
        Schedule a call
        <Link href="https://cal.com/mba-chibueze/briefing" target="_blank">
          <ChevronRight
            size={30}
            className="p-1 border border-[#049ee24d] rounded-full "
          />
        </Link>
      </button>

      {/* Name & Title */}
      <div className="text-center">
        <h1
          className="
              font-bold text-4xl
              [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]
              dark:[text-shadow:0_1px_2px_rgba(0,0,0,0.6)]
            "
        >
          Mba Chibueze
        </h1>
        <h2 className="text-2xl text-neutral-600 dark:text-neutral-400">
          Mechanical & Software Engineer
        </h2>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3">
        {contacts.map(({ href, icon: Icon, name }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-2
              hover:bg-[#6d6d6d]/40
              transition-colors
              border border-[#454545]/25
              rounded-full p-2 lg:p-1 lg:px-3
            "
          >
            {/* Pass the className directly */}
            <Icon size={15} />
            <span className="hidden lg:inline text-sm ">
              {name}
            </span>
          </Link>
        ))}
      </div>

      {/* Bio */}
      <div className="font-medium lg:w-[70%] w-[90%] text-sm leading-relaxed text-[#6d6d6d] [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:my-3 [&_h5]:text-lg [&_h5]:font-semibold [&_h5]:my-3">
        
        My name is Mba Chibueze but my friends call me Oba. A multidisciplinary
        engineer with foundations in Mechanical Engineering and a growing
        footprint in Software Engineering, driven by curiosity, precision, and a
        deep passion for building systems that work—whether mechanical
        structures or digital products. My journey sits at the intersection of
        material science, <span onDoubleClick={handleSignInClick}>industrial operations</span> , and modern frontend
        development, giving my approach a rare blend of analytical depth and
        creative execution.

        <h2 className={`${header} mt-5 font-semibold text-xl `}>Studies</h2>
        <h2 className={`${header} font-medium sm:text-lg`}>
          Micheal Okpara University of Agriculture, Umudike
        </h2>
        B.Eng Mechanical Engineering <br />
        <h2 className={`${header} font-medium sm:text-lg`}>
          Tech
        </h2>
          Self Taught

        <h3 className={`${header}`}>Mechanical Engineering Background</h3>
        My engineering path began in material science, where I explored the
        effect of fiber orientation on the tensile strength, hardness, and
        impact resistance of epoxy-based composites. This research strengthened
        my understanding of how microstructural decisions influence real-world
        performance—teaching the importance of experimentation, optimization,
        and the relationship between design choices and material behavior. This
        transitioned seamlessly into field experience during my time at LaFarge
        Mfamosing Plant, where I worked with the maintenance and reliability
        teams. I was involved in testing and evaluating industrial shafts across
        the entire processing line—from the crusher to the loading bay,
        including conveyors, kiln assemblies, bucket lifts, and heavy-duty
        rotating machinery. This experience sharpened my mechanical intuition,
        exposed me to large-scale engineering environments, and cultivated a
        mindset geared toward reliability, system integrity, and preventive
        maintenance.
        <h3 className={`${header}`}>Transition Into Tech</h3>
        Over time, my engineering mindset expanded into software—particularly
        frontend engineering, where problem-solving, structure, and precision
        aligned naturally with technology. Today, I build high-performance
        digital products rooted in clean architecture, accessibility, and
        seamless user experience.
        <h5 className={`${header}`}>My stack includes:</h5>
        <ul className="ml-5">
          <li>• Next.js, TypeScript</li>
          <li>• API integrations & data handling</li>
          <li>• Firebase</li>
          <li>
            • Responsive UI engineering across devices—including
            smartwatch-level constraints
          </li>
          <li>• Performance-first, scalable frontend architecture</li>
          <li>• Git, GitHub, Vercel</li>
        </ul>
        This gives me the ability to design and build interfaces that are not
        only visually appealing but also technically optimized and maintainable.
        <h3 className={`${header}`}>Philosophy & Work Approach</h3>
        My engineering identity—both mechanical and software—is built around a
        few core beliefs:
        <ul className=" [&_span]:font-medium ml-5">
          <li>
            • <span>Systems must be understood before they're built.</span>
            <br /> Whether mechanical components or UI components, good
            engineering starts with clarity.
          </li>
          <li>
            • <span>Details determine reliability.</span> <br /> A misplaced
            fiber angle can affect tensile strength; an unhandled state can
            break an interface. Precision matters everywhere.
          </li>
          <li>
            • <span>Learning is continuous.</span> <br /> The transition from
            mechanical engineering to software engineering was not a pivot—it
            was an expansion. Curiosity remains my strongest tool.
          </li>
          <li>
            •
            <span>
              Solutions should be simple, scalable, and human-centered.
            </span>
            <br /> Engineering is not just science; it's service.
          </li>
        </ul>

      </div>
      <Footer />
    </main>
  );
};

export default About;
