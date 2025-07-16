'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingNavProps {
  navItems: {
    name: string;
    id: string;
  }[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
}

export const FloatingNav = ({
  navItems,
  activeTab,
  setActiveTab,
  className,
}: FloatingNavProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < 50 || currentScrollY < window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black/20 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-4 items-center justify-center space-x-4',
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <button
            key={`link-${idx}`}
            onClick={() => setActiveTab(navItem.id)}
            className={cn(
              'relative text-sm font-medium uppercase tracking-wider transition-all duration-300 px-4 py-2 rounded-full',
              activeTab === navItem.id
                ? 'text-white bg-white/10'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            )}
          >
            <span className="relative z-10">{navItem.name}</span>
            {activeTab === navItem.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-full"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};