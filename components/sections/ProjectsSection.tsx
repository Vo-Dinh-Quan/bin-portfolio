"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/project-card";
import GradientText from "@/components/ui/gradient-text";

export default function ProjectsSection() {
  const projects = [
    {
      title: "ScoreMe.io",
      description:
        "AI-powered product scoring tool: evaluate, share, compare — no spreadsheets.",
      technologies: ["React", "Firebase", "OpenAI", "Netlify"],
      link: "#",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "SwiftProduct.io",
      description:
        "AI assistant that drafts PRDs, user stories, and diagrams from designs.",
      technologies: ["React", "Firebase", "Visual AI", "Netlify"],
      link: "#",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "MailyWizard.com",
      description:
        "AI email generator (HTML & text) with multi-language support — Product Hunt Top 20.",
      technologies: ["React", "Firebase", "OpenAI", "Netlify"],
      link: "#",
      image:
        "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
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
      className="space-y-12 my-12">
      {/* Section Title */}
      <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">
        <GradientText>Projects</GradientText>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            image={project.image}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
