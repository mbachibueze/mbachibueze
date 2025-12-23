"use client";

import { useContext } from "react";
import { ThemeContext } from "@/src/context/themeContext";

const services = [
  {
    id: "web-dev",
    type: "Website Development",
    details:
      "Design and develop fully responsive and interactive websites tailored to your brand or business. Whether it's a landing page, personal blog, portfolio, or company site, your project will be built with clean, optimised, and scalable code using the latest web technologies.",
  },
  {
    id: "ui-ux",
    type: "UI/UX Implementations from Figma/Designs",
    details:
      "Transform static designs into pixel-perfect, interactive web interfaces. Specialised in converting Figma, Adobe XD, or Sketch designs into modern and responsive frontends, ensuring a seamless experience across all devices.",
  },
  {
    id: "api-integration",
    type: "Integration with APIs and Backends",
    details:
      "Integrate dynamic data from RESTful or GraphQL APIs, enabling real-time updates, content management, form submissions, authentication, and more. Perfect for portfolios, dashboards, or business platforms that need interactive features.",
  },
];

const Service = () => {
  const { theme } = useContext(ThemeContext);

  const description =
    theme === "dark" ? "text-[#b0b0b0]" : "text-[#4f4f4f]";

  return (
    <div className="w-[90%] lg:w-[60%] my-5">
      <h1 className="font-bold mb-2 text-xl lg:text-3xl capitalize text-center">
        What can I do
      </h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {services.map((service) => (
          <div
            key={service.id} // ✅ required key prop
            className="glass4 p-2 cursor-pointer hover:scale-[1.03] transition-all duration-300"
          >
            <h1 className="font-semibold mb-2">{service.type}</h1>
            <p className={`text-sm ${description}`}>
              {service.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
