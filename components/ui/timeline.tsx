'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TimelineEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  icon?: React.ReactNode;
  companyUrl?: string;
}

interface TimelineProps {
  data: TimelineEntry[];
}

export const Timeline = ({ data }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white/20 via-white/40 to-white/20" />
      
      <div className="space-y-12">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative flex items-start space-x-6"
          >
            {/* Timeline dot */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 border border-white/20 rounded-full backdrop-blur-sm"
            >
              {item.icon || (
                <div className="w-6 h-6 bg-gradient-to-br from-white to-gray-300 rounded-full" />
              )}
            </motion.div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {item.company}
                      </a>
                    ) : (
                      <span className="text-lg text-gray-300">{item.company}</span>
                    )}
                    <span className="text-sm text-gray-500">({item.location})</span>
                  </div>
                </div>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full border border-white/10 mt-2 lg:mt-0 inline-block"
                >
                  {item.period}
                </motion.span>
              </div>

              <ul className="space-y-2">
                {item.achievements.map((achievement, achIndex) => (
                  <motion.li
                    key={achIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (achIndex * 0.1) }}
                    className="flex items-start space-x-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className="w-2 h-2 bg-gradient-to-r from-white to-gray-400 rounded-full mt-2 flex-shrink-0"
                    />
                    <span className="text-sm text-gray-300 leading-relaxed">
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};