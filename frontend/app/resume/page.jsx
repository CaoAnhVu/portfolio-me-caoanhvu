"use client";

import Link from "next/link";
import { FaHtml5, FaCss3, FaJs, FaReact, FaDatabase, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiGithub, SiNodedotjs, SiMysql, SiMongodb, SiVercel, SiVite, SiFigma, SiPostman } from "react-icons/si";
import { DiMsqlServer, DiDotnet } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";

// about data
const about = {
  icon: "/assets/resume/about-svgrepo-com.svg",
  title: "About Me",
  description:
    "Hi, I am a fourth-year student majoring in Software Engineering at Ho Chi Minh City University of Technology (HUTECH). My goal is to become a professional full-stack developer, and I am always eager to learn and embrace new challenges. Please review my profile whenever you have the opportunity.",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Cao Anh Vu",
    },
    {
      fieldName: "Phone:",
      fieldValue: "(+84) 333 653 263",
    },
    {
      fieldName: "Experience:",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Email:",
      fieldValue: "anhvuktnh@gmail.com",
    },
    {
      fieldName: "Nationality:",
      fieldValue: "Vietnam",
    },

    {
      fieldName: "Github:",
      fieldValue: "github.com/CaoAnhVu",
    },

    {
      fieldName: "Date of birth:",
      fieldValue: "2003-12-09",
    },
    {
      fieldName: "Language:",
      fieldValue: "Vietnamese,English",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have experience in web development. I possess strong skills in both Front-End and Back-End development, with a solid understanding of HTML, CSS, JavaScript, Java, C#, and frameworks such as ReactJs, NodeJs Springboot, .NET, ASP.NET Core MVC, and Entity Framework. I am passionate about web design and excel in both collaborative and independent work environments.",
  items: [
    {
      company: "Specialized Projects Map",
      title: "Social Media Freals Website ",
      position: "Full-Stack Developer ",
      duration: "2024/09 - 2024/12",
    },
    {
      company: "FPT Software",
      position: "Front-End Developer Intern",
      duration: "2024/09 - 2024/12",
    },
    {
      company: "course project",
      title: "Portfolio Website",
      position: "Full-Stack Developer ",
      duration: "2023/09 - 2023/11",
    },
    {
      company: "course project ",
      title: "Pulse Music Website  ",
      position: "Front-End Developer  ",
      duration: "2024/05 - 2024/07",
    },
    {
      company: "Base Project",
      title: "E-commerce Planrlover Website ",
      position: "Full-Stack Developer  ",
      duration: "2024/03 - 2024/05",
    },

    {
      company: "course project",
      title: "Dental Clinic Management Software",
      position: "Full-Stack Developer ",
      duration: "2023/09 - 2023/11",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "I am a fourth-year student majoring in Software Engineering at Ho Chi Minh City University of Technology (HUTECH).",
  items: [
    {
      instution: "Hutech University",
      degree: "Software Engineering",
      duration: "2021 - Present",
    },
    {
      instution: "Contest Organizing Committee",
      degree: "INFORMATION TECHNOLOGY TALENT SEARCH CONTEST 2024",
      image: "/assets/resume/cetificate/ITGotTalent.png",
      duration: "2024-12",
    },
    {
      instution: "Cisco Networking Academy",
      degree: "JavaScript Essentials 2 Course",
      image: "/assets/resume/cetificate/JavascriptEssentials2.png",
      duration: "2024-12",
    },
    {
      instution: "Cisco Networking Academy",
      degree: "JavaScript Essentials 1 Course",
      image: "/assets/resume/cetificate/JavascriptEssentials1.png",
      duration: "2024-12",
    },
    {
      instution: "Cisco Networking Academy",
      degree: "Networking Basics Course",
      image: "/assets/resume/cetificate/networkingbasic.png",
      duration: "2024-11",
    },
    {
      instution: "Hutech University",
      degree: "Workshop Testing & QA-Roles, Career Opportunities",
      image: "/assets/resume/cetificate/QA-Roles.png",
      duration: "2024-10",
    },
    {
      instution: "A course on AI",
      degree: "Data Visualization with R ",
      image: "/assets/resume/cetificate/DataVisualizationwithR.jpg",
      duration: "2023-12",
    },
    {
      instution: "A course on AI",
      degree: "Using R with Databases ",
      image: "/assets/resume/cetificate/UsingRwithDatabases.jpg",
      duration: "2023-12",
    },
    {
      instution: "A course on AI",
      degree: "R for Data Science",
      image: "/assets/resume/cetificate/RforDataScience.jpg",
      duration: "2023-12",
    },
    {
      instution: "A course on AI",
      degree: "Create a Voice Assistant",
      image: "/assets/resume/cetificate/CreateaVoiceAssistant.jpg",
      duration: "2023-11",
    },
    {
      instution: "A course on AI",
      degree: "Improve Customer Support With AI-powered Voice Services",
      image: "/assets/resume/cetificate/ImproveCustomerSupportwithAI-poweredVoiceServices.jpg",
      duration: "2023-11",
    },
    {
      instution: "Hutech University",
      degree: "Workshop Agile & Scrum Software Development Process",
      image: "/assets/resume/cetificate/AgileScrum.png",
      duration: "2023-10 ",
    },
    {
      instution: "Hutech University",
      degree: "Workshop Testing & QA",
      image: "/assets/resume/cetificate/TestingQA.png",
      duration: "2023-10 ",
    },
    {
      instution: "Online Courses Platform",
      degree: "Full-Stack Development Bootcamp",
      duration: "2023-09",
    },

    {
      instution: "Hutech University",
      degree: "Workshop Blockchain and Practical Applications",
      image: "/assets/resume/cetificate/Blockchain.png",
      duration: "2022-08",
    },
  ],
};

//skills data
const skills = {
  icon: "/assets/resume/skills.svg",
  title: "My Skills",
  description: "I have experience in web development. I possess strong skills in both Front-End and Back-End development.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.Js",
    },
    {
      icon: <SiNodedotjs />,
      name: "Node.Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.Js",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <BiLogoSpringBoot />,
      name: "SpringBoot",
    },

    {
      icon: <DiDotnet />,
      name: ".NET",
    },
    {
      icon: <FaDatabase />,
      name: "Database",
    },
    {
      icon: <DiMsqlServer />,
      name: "SQL Server",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiFigma />,
      name: "Figma",
    },
    {
      icon: <SiVercel />,
      name: "Vercel",
    },
    {
      icon: <SiVite />,
      name: "Vite",
    },
    {
      icon: <SiGithub />,
      name: "Github",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex  items-center justify-center xl:py-0 py-12"
    >
      <div className="container max-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience   */}
            <TabsContent value="experience" className=" w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <Image src={experience.icon} alt="" width={100} height={100} className=" max-w-[100px] object-cover mx-auto xl:mx-0  " />
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px]  text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="
                      bg-[#232329] 
                      h-[200px] py-6 px-10 
                      rounded-xl flex flex-col 
                      justify-center items-center 
                      lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <p className="text-white/60">{item.title}</p>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className=" w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <Image src={education.icon} alt="" width={100} height={100} className=" max-w-[100px] object-cover mx-auto xl:mx-0  " />
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px]  text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="
                      bg-[#232329] 
                      h-[300px]  py-6 px-10 
                      rounded-xl flex flex-col 
                      justify-center items-center 
                      lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-6">{item.degree}</h3>
                          {item.image ? <Image src={item.image} alt="" width={70} height={70} className=" object-cover  " /> : null}

                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.instution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className=" w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <Image src={skills.icon} alt="" width={150} height={150} className=" max-w-[150px] object-cover mx-auto xl:mx-0  " />
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className=" w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <Image src={about.icon} alt="" width={100} height={100} className=" max-w-[100px] object-cover mx-auto xl:mx-0  " />
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-2">
                        <span className="text-white/60 ">{item.fieldName}</span>
                        <span className="text-xl  hover:text-accent transition-all duration-300 cursor-pointer">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
