"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jolo Honrado",
    },
    {
      fieldName: "Age",
      fieldValue: "23yrs Old",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+63) 969 176 7489",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ year",
    },
    {
      fieldName: "Email",
      fieldValue: "joshuahonrado25@gmail.com",
    },
  ]
}

//experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items: [
    {
      company: "DocOnChain",
      position: "Frontend Developer / UI&UX Designer",
      duration: "January - June",
    },
    {
      company: "Trend Micro",
      position: "Software Developer for Cloud Infra",
      duration: "August 2022 - April 2023",
    },
    {
      company: "Beacon Solutions Inc.",
      position: "Cloud Engineer",
      duration: "August 2023 - Current",
    },
  ]
}

//education
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  items: [
    {
      institution: "Technological Institute of the Philippines Manila",
      degree: "Bachelor of Science in Computer Science",
      duration: "2018 - 2022",
    },
  ]
}

//skills
const skills = {
  /* icon: '/assets/resume/cap.svg', */ //insert icon here
  title: 'My Skills',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJS",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue="experience" 
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content here */}
          <div className="min-h-[70vh] w-full">
            {/*experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li 
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/*education */}
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            {/*skills */}
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            {/*about */}
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
