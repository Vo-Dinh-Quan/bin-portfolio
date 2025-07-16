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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-center space-x-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm font-medium uppercase tracking-wider transition-all duration-300 tab-underline relative ${
                activeTab === tab.id ? "active" : "hover:text-white"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}>
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
