"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaFigma,
  FaGithub,
  FaNode,
  FaJava,
  FaHtml5,
  FaLinux,
  FaGitlab,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiTableau,
  SiPostman,
  SiNotion,
  SiClickup,
  SiJira,
  SiOpenai,
  SiNextdotjs,
  SiTypescript,
  SiNextui,
  SiShadcnui,
  SiOracle,
  SiMongodb,
  SiReactquery,
  SiRefine,
} from "react-icons/si";
import { PiFileCppFill } from "react-icons/pi";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { DiMsqlServer } from "react-icons/di";
import GradientText from "@/components/ui/gradient-text";
import { AiOutlineAntDesign } from "react-icons/ai";

export default function AboutSection() {
  const skills = [
    "Skilled in software development processes with Agile expertise",
    "Strong teamwork and collaboration in diverse environments",
    "Eager to learn and adapt with a proactive approach",
    "Effective problem-solving and logical thinking for complex issues",
    "Basic English communication and technical reading",
    "Mastery of Git for seamless team version control",
    "Familiar with DevOps practices (CI/CD pipelines)",
    "Strong attention to code quality and best practices (e.g., clean code)",
    "Experienced with database design and optimization (SQL/NoSQL)",
  ];

  const techStack = [
    { name: "HTML5/CSS3", icon: FaHtml5 },
    { name: "TypeScript", icon: SiTypescript },
    { name: "C++", icon: PiFileCppFill },
    { name: "ReactJS", icon: FaReact },
    { name: "NextJS", icon: SiNextdotjs },
    { name: "Refine", icon: SiRefine },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Shadcn UI", icon: SiShadcnui },
    { name: "Ant Design", icon: AiOutlineAntDesign },
    { name: "TanStack Query", icon: SiReactquery },
    { name: "Zustand", icon: SiNotion },
    { name: "NodeJS (Express)", icon: FaNode },
    { name: "MongoDB", icon: SiMongodb },
    { name: "SQL Server", icon: DiMsqlServer },
    { name: "Oracle", icon: SiOracle },
    { name: "Figma", icon: FaFigma },
    { name: "Github", icon: FaGithub },
    { name: "Gitlab", icon: FaGitlab },
    { name: "Linux", icon: FaLinux },
    { name: "Postman", icon: SiPostman },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="about"
      className="space-y-12 my-12">
      {/* Section Title */}
      <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">
        <GradientText>About Me</GradientText>
      </motion.h2>

      {/* Introduction */}
      <motion.div variants={itemVariants} className="mb-12">
        <p className="text-lg text-[#F0F0F0] leading-relaxed text-justify">
          As a dedicated 3rd-year Information Systems student, I am passionately
          pursuing a career as a Fullstack TypeScript Developer, with a strong
          foundation in frontend development using ReactJS and NextJS. My
          journey involves crafting dynamic, user-centric applications while
          expanding my expertise into backend technologies. Currently, I’m
          focused on mastering Next.js, Node.js, and Microservices Architecture,
          eagerly exploring their ecosystems and applying them to real-world
          projects to sharpen my web development skills. I am actively seeking a
          web development internship where I can deepen my practical knowledge,
          collaborate with experienced professionals, and deliver value to the
          company. This opportunity will allow me to learn from seasoned
          mentors, grow my skill set, and contribute meaningfully to innovative
          projects.
        </p>
      </motion.div>

      {/* Professional Skills */}
      <motion.div variants={itemVariants} className="mb-12">
        <h3 className="text-2xl font-semibold mb-6">
          <GradientText>Professional Skills</GradientText>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start space-x-2">
              <motion.div
                className="w-2 h-2 bg-gradient-to-r from-white to-gray-400 rounded-full mt-2 flex-shrink-0"
                whileHover={{ scale: 1.5 }}
              />
              <span className="text-sm text-[#F0F0F0] leading-relaxed">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-semibold mb-6">
          <GradientText>Stack</GradientText>
        </h3>
        <div className="grid grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                y: -5,
              }}
              className="flex flex-col items-center space-y-3 p-4 rounded-lg bg-transparent hover:bg-white/5 transition-all duration-300 cursor-pointer">
              <tech.icon className="w-10 h-10 text-[#F0F0F0]" />
              <span className="text-sm text-[#F0F0F0] text-center font-light">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
