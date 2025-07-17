"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  id: string;
}

interface ResizableNavbarProps {
  navItems: NavItem[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
}

export const ResizableNavbar: React.FC<ResizableNavbarProps> = ({
  navItems,
  activeTab,
  setActiveTab,
  className,
}) => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
  };

  if (isMobile) {
    return (
      <div className={cn("fixed top-4 left-4 right-4 z-50", className)}>
        <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-white font-medium">
              {navItems.find(item => item.id === activeTab)?.name}
            </span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={cn(
                  "block h-0.5 w-6 bg-white transition-all duration-300",
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                )} />
                <span className={cn(
                  "block h-0.5 w-6 bg-white mt-1 transition-all duration-300",
                  isMenuOpen ? "opacity-0" : ""
                )} />
                <span className={cn(
                  "block h-0.5 w-6 bg-white mt-1 transition-all duration-300",
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                )} />
              </div>
            </button>
          </div>
          
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 space-y-2"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg transition-all duration-200",
                      activeTab === item.id
                        ? "bg-white/20 text-white"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    )}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("fixed top-8 left-1/2 transform -translate-x-1/2 z-50", className)}>
      <motion.div
        className="bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-2"
        layout
      >
        <div className="flex items-center space-x-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              onMouseEnter={() => setHoveredTab(item.id)}
              onMouseLeave={() => setHoveredTab(null)}
              className={cn(
                "relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                activeTab === item.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {(activeTab === item.id || hoveredTab === item.id) && (
                <motion.div
                  className="absolute inset-0 bg-white/10 rounded-xl"
                  layoutId={activeTab === item.id ? "activeTab" : "hoveredTab"}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};