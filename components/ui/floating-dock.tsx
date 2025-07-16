'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingDockProps {
  children: ReactNode;
  className?: string;
}

export default function FloatingDock({ children, className = '' }: FloatingDockProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`backdrop-blur-md bg-black/20 border border-white/10 rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}