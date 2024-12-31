"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "I possess strong skills in both Front-End and Back-End development.I create responsive and dynamic websites using the latest technologies and best practices.",
    href: "/services/web-development",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing interfaces that enhance user experience across devices.",
    href: "/services/ui-ux-design",
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Creating unique and memorable logos that represent your brand's identity effectively.",
    href: "/services/logo-design",
  },
  {
    num: "04",
    title: "Branding",
    description: "Building cohesive and impactful brand strategies to elevate your business identity.",
    href: "/services/branding",
  },
];

import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.4,
              delay: 2.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]  "
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="
              flex-1 flex flex-col 
              gap-6 justify-center 
              group cursor-pointer"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center ">
                  <div
                    className="
                  text-5xl font-extrabold 
                  text-outline text-transparent
                   group-hover:text-outline-hover 
                   transition-all duration-500 "
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] bg-white
                   rounded-full flex justify-center items-center
                    group-hover:bg-accent hover:-rotate-45 
                    transition-all duration-500"
                  >
                    <BsArrowDownRight className="text-primary text-3xl transition-all duration-500" />
                  </Link>
                </div>

                {/* title */}
                <h2
                  className="
                text-[42px] font-bold 
                leading-none text-white
                 group-hover:text-accent 
                 transition-all duration-500"
                >
                  {service.title}
                </h2>

                {/* description */}
                <p className="text-white/60">{service.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
