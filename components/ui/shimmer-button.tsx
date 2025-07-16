'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ShimmerButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function ShimmerButton({ children, onClick, className = '' }: ShimmerButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden bg-white text-black px-6 py-2 rounded-full font-medium transition-all duration-300 ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}