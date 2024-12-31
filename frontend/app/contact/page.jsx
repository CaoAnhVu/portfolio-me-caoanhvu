"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Description } from "@radix-ui/react-dialog";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+84) 333 653 263",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "anhvuktnh@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "District 9, Ho Chi Minh City, Vietnam",
  },
];

import { motion } from "framer-motion";

const Page = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }} className="py-6 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-2xl">
              <h3 className="text-4xl  text-accent">Let's work together</h3>
              <p className="text-white/60 ">I provide comprehensive information technology solutions, from web development to UX/UI design. Let's create innovative and effective products together!</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="fe">Frontend Development</SelectItem>
                    <SelectItem value="be">Backend Development</SelectItem>
                    <SelectItem value="mob">Mobile Development</SelectItem>
                    <SelectItem value="cst">UX/UI Design</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                    <SelectItem value="ds">Data Science</SelectItem>
                    <SelectItem value="ai">Artificial Intelligence</SelectItem>
                    <SelectItem value="devops">DevOps</SelectItem>
                    <SelectItem value="cloud">Cloud Computing</SelectItem>
                    <SelectItem value="ml">Machine Learning</SelectItem>
                    <SelectItem value="blockchain">Blockchain Development</SelectItem>
                    <SelectItem value="iot">Internet of Things (IoT)</SelectItem>
                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                    <SelectItem value="arvr">Augmented Reality/Virtual Reality (AR/VR)</SelectItem>
                    <SelectItem value="mkt">Digital Marketing</SelectItem>
                    <SelectItem value="cns">Consulting</SelectItem>
                    <SelectItem value="cnt">Content Creation</SelectItem>
                    <SelectItem value="seo">SEO Services</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className="h-[200px] bg-primary" placeholder="Type your message here..." />
              {/* btn */}
              <Button size="md" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center  xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className=" w-[52px] h-[72px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent flex items-center justify-center rounded-md  ">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-base">{item.title}</p>
                      <h3 className="text-xl ">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
