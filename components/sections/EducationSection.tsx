"use client";

import { motion } from "framer-motion";
import GradientText from "@/components/ui/gradient-text";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import { SiUdemy, SiLinkedin, SiCoursera } from "react-icons/si";

export default function EducationSection() {
  const education = {
    degree: "Bachelor's Degree, Information Systems",
    institution:
      "University of Information Technology - Vietnam National University, Ho Chi Minh City",
    period: "2022 – 2026",
  };

  const certifications = [
    {
      title: "React Basics - Meta",
      provider: "Coursera",
      date: "Feb 2025",
      icon: <SiCoursera className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Advanced React - Meta",
      provider: "Coursera",
      date: "Feb 2025",
      icon: <SiCoursera className="w-5 h-5 text-blue-500" />,
    },
    {
      title: "Developing Back-End Apps with Node.js and Express - IBM",
      provider: "Coursera",
      date: "Feb 2025",
      icon: <SiLinkedin className="w-5 h-5 text-blue-500" />,
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
        <GradientText>Education</GradientText>
      </motion.h2>

      {/* Degree Section */}
      <motion.div variants={itemVariants} className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 flex items-center space-x-3">
          <FaGraduationCap className="w-6 h-6 text-blue-400" />
          <GradientText>Degree</GradientText>
        </h3>
        <div className="space-y-3 ml-9">
          <h4 className="text-xl font-medium text-[#F0F0F0]">
            {education.institution}
          </h4>
          <p className="text-base text-gray-400 font-light">
            {education.degree}
          </p>
          <motion.span
            className="text-sm text-gray-500 bg-white/5 px-4 py-2 rounded-full inline-block border border-white/10"
            whileHover={{ scale: 1.05 }}>
            {education.period}
          </motion.span>
        </div>
      </motion.div>

      {/* Certifications Section */}
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-semibold mb-6 flex items-center space-x-3">
          <FaCertificate className="w-6 h-6 text-yellow-400" />
          <GradientText>Certifications</GradientText>
        </h3>
        <div className="space-y-6 ml-9">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-start space-x-4 p-4 bg-transparent hover:bg-white/5 rounded-lg transition-all duration-300">
              <div className="flex-shrink-0 mt-1">{cert.icon}</div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-[#F0F0F0] mb-1">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-400">{cert.provider}</p>
              </div>
              <div className="flex-shrink-0">
                <motion.span
                  className="text-sm text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10"
                  whileHover={{ scale: 1.05 }}>
                  {cert.date}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
