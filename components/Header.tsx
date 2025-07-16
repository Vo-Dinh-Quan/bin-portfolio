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

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-tabs">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`header-tab ${activeTab === tab.id ? "active" : ""}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-current={activeTab === tab.id ? "page" : undefined}>
              {activeTab === tab.id ? (
                <GradientText>{tab.label}</GradientText>
              ) : (
                <span>{tab.label}</span>
              )}
              {activeTab === tab.id && (
                <motion.div
                  className="header-tab-underline"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </nav>
    </header>
  );
}
