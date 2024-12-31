"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Project 1",
    description:
      "A social networking application that allows you to expand connections with people around you, friends share their memorable moments with each other through posts. More specifically, we can text each other in real time.",
    stack: [
      {
        name: "React.js",
      },
      {
        name: "Next.js",
      },
      {
        name: "Javascript",
      },
      {
        name: "Typescript",
      },
      {
        name: "Node.js",
      },
      {
        name: "Vite",
      },
      {
        name: "Express",
      },
      {
        name: "Socket.io",
      },
      {
        name: "Cloudinary",
      },
      {
        name: "api-client",
      },
      {
        name: "nodemon",
      },
      {
        name: "bcrypt",
      },
      {
        name: "express-validator",
      },
      {
        name: "jsonwebtoken",
      },
      {
        name: "multer",
      },
      {
        name: "cors",
      },
      {
        name: "dotenv",
      },
      {
        name: "mongoose",
      },
      {
        name: "react-mentions",
      },
      {
        name: "cookie-parser",
      },
      {
        name: "validator",
      },
      {
        name: "recoil",
      },
      {
        name: "Socket.io-client",
      },
      {
        name: "Charka-ui",
      },
      {
        name: "axios",
      },
      {
        name: "date-fns",
      },
      {
        name: "framer-motion",
      },
      {
        name: "draft-js",
      },
      {
        name: "react-router-dom",
      },
      {
        name: "react-markdown",
      },
      {
        name: "react-dom",
      },
      {
        name: "eslint",
      },
      {
        name: "react-router-dom",
      },
      {
        name: "react-markdown",
      },
      {
        name: "react-dom",
      },
      {
        name: "eslint",
      },
    ],
    image: "/assets/work/thumbnail1.jpg",
    live: "",
    github: "https://github.com/CaoAnhVu/social-media-freals",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Project 2",
    description:
      "Plantlover 1 website provides a comprehensive platform to explore all kinds of ornamental plants, can shop online, deliver to your door and design green living spaces. With personalized services such as designing gardens, terraces or indoor green spaces, we create unique ideas close to nature. Let's experience creative green life with Plantlover!",
    stack: [
      {
        name: "C#",
      },
      {
        name: "ASP.NET Core MVC",
      },
      {
        name: "Entity Framework Core",
      },
      {
        name: "SQL Server",
      },
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "Bootstrap 5",
      },
      {
        name: "Javascript",
      },
    ],
    image: "/assets/work/thumbnail2.jpg",
    live: "",
    github: "https://github.com/CaoAnhVu/E-commerce-Plantlover",
  },
  {
    num: "03",
    category: "Front-End",
    title: "Project 3",
    description: "Flix is ​an interface website with the theme of watching movies online, including many good movies that are constantly updated.",
    stack: [
      {
        name: "HTML 5",
      },
      {
        name: "CSS 3",
      },
      {
        name: "Javascript",
      },
      {
        name: "Bootstrap 5",
      },
    ],
    image: "/assets/work/thumbnail3.jpg",
    live: "",
    github: "https://github.com/CaoAnhVu/Flix-movie",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div class="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*  outline num*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* project stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border-b border-white/20 "></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank" className="btn btn-accent">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github} target="_blank" className="btn btn-accent">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div class="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full  cursor-pointer">
                    <div className=" h-[460px] relative group flex items-center justify-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} alt="" fill className="object-cover" />
                      </div>
                    </div>
                    {/* <Image src={item.image} alt={item.title} width={500} height={500} /> */}
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSliderBtns
                containerStyles=" flex gap-2 right-0 w-full  absolute bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 justify-between xl:w-max xl:justify-none  "
                btnStyles=" bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
