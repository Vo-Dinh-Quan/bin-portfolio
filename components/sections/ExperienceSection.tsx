"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";
import GradientText from "@/components/ui/gradient-text";
import { FaBriefcase } from "react-icons/fa";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Product Manager & Product Owner",
      company: "Growe",
      location: "Remote",
      period: "Feb 2024 – Present",
      companyUrl: "https://growe.com",
      icon: <FaBriefcase className="w-6 h-6 text-white" />,
      achievements: [
        "Own multi-brand Back Office (10+ brands) – roadmap, infra, releases",
        "Integrated ID-passport validation & alerting, merging existing users",
        "Launched experiments improving engagement + registration conversion",
        "Negotiated email/SMS provider revamp → marketing cost ↓ 10%",
      ],
    },
    {
      title: "Product Manager",
      company: "Growe",
      location: "Remote",
      period: "Jun 2023 – Feb 2024",
      companyUrl: "https://growe.com",
      icon: <FaBriefcase className="w-6 h-6 text-white" />,
      achievements: [
        "Authored BRD / PRD / User Stories for new features (0→1)",
        "Custom feature ↑ customer LTV 5%",
        "Personalised homepage ↑ engagement 15%; cross-sell ↑ MTPU & GGR",
        "Produced hi-fi wireframes + A/B mock-ups for UX team",
      ],
    },
    {
      title: "Content Product Manager",
      company: "Growe",
      location: "Remote",
      period: "Jul 2022 – Jun 2023",
      companyUrl: "https://growe.com",
      icon: <FaBriefcase className="w-6 h-6 text-white" />,
      achievements: [
        "Drove content personalisation using A/B & multivariate testing",
        "Tooling: Postman, Swagger, Firebase, Figma, Strapi, Locize",
        "Monitored content efficacy with GA & Tableau dashboards",
        "Collaborated through Jira, Confluence, Asana across teams",
      ],
    },
    {
      title: "Customer Success Manager",
      company: "DevPort",
      location: "Remote",
      period: "May 2022 – May 2023",
      companyUrl: "#",
      icon: <FaBriefcase className="w-6 h-6 text-white" />,
      achievements: [
        "Resolved chat/ticket issues, deep-dive payment & log analysis",
        "Maintained CMS content via Figma, Photoshop; trained new hires",
        "Created step-by-step Confluence guides & ClickUp bug reports",
        "Integrated payment solutions and improved support workflows",
      ],
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
        <GradientText>Experience</GradientText>
      </motion.h2>

      <Timeline data={experiences} />
    </motion.div>
  );
}
