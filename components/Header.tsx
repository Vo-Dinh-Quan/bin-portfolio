"use client";

import { motion } from "framer-motion";
import GradientText from "@/components/ui/gradient-text";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 border-b border-white/10 sm:backdrop-blur-md sm:bg-black/20">
      <nav className="max-w-7xl mx-auto px-0 sm:px-4 py-0 sm:py-2 min-h-[22px] sm:min-h-[48px]">
        <div className="flex justify-center space-x-0 sm:space-x-8 overflow-x-auto scrollbar-hide [&>button]:m-0">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-[0.6rem] sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 tab-underline relative px-[2px] sm:px-0 py-[1px] sm:py-0 ${
                activeTab === tab.id ? "active" : "hover:text-white"
              }`}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}>
              {activeTab === tab.id ? (
                <GradientText>{tab.label}</GradientText>
              ) : (
                <span className="text-[#F0F0F0]">{tab.label}</span>
              )}
            </motion.button>
          ))}
        </div>
      </nav>
    </header>
  );
}
