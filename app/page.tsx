"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Sidebar from "@/components/Sidebar";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const navItems = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutSection />;
      case "experience":
        return <ExperienceSection />;
      case "education":
        return <EducationSection />;
      case "projects":
        return <ProjectsSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F0F0F0]">
      <FloatingNav
        navItems={navItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex justify-center min-h-screen pt-24 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row max-w-7xl w-full">
          {/* Sidebar center on mobile, left on desktop */}
          <div className="w-full flex justify-center md:block md:w-1/4 md:pr-20 mb-8 md:mb-0">
            <Sidebar />
          </div>
          <main className="flex-1 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full">
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
