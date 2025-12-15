"use client";

import React from "react";
import { Mail } from "lucide-react";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const contacts = [
  { href: "https://github.com/mbachibueze", icon: FaGithub },
  { href: "https://twitter.com/mba_chibuezez", icon: FaXTwitter },
  {
    href: "https://www.linkedin.com/in/mba-chibueze-8118a9252",
    icon: FaLinkedinIn,
  },
  { href: "mailto:mbachibueze27@gmail.com", icon: Mail },
];

const Footer = () => {
  return (
    <main className="bg-transparent grid place-items-center pb-25 lg:pb-0 lg:w-[70%] w-[90%]">
      <div
        className="
          flex flex-col lg:flex-row items-center gap-3
          lg:justify-between lg:w-full
          transition-colors
        "
      >
        <div className="text-sm flex items-center gap-1">
          <span className="text-[#6d6d6d]">© 2025</span>
          <span>/ Mba Chibueze</span>
        </div>

        <div className="flex gap-3">
          {contacts.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                hover:opacity-70
                transition-opacity
              "
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Footer;
