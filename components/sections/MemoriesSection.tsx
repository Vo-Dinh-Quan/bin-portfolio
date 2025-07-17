"use client";

import { motion } from "framer-motion";
import GradientText from "@/components/ui/gradient-text";
import { FocusCards } from "@/components/ui/focus-cards";
import { DraggableCards } from "@/components/ui/draggable-cards";
import { FaCamera, FaPenFancy } from "react-icons/fa";

export default function MemoriesSection() {
  // Sample photo data - replace with your actual photos
  const focusPhotos = [
    {
      title: "Coding Journey",
      src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Team Collaboration",
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Learning Moments",
      src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const draggablePhotos = [
    {
      id: "1",
      title: "First React Project",
      src: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "My journey into React development started here",
    },
    {
      id: "2",
      title: "University Days",
      src: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Memorable moments from university life",
    },
    {
      id: "3",
      title: "Hackathon Victory",
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Winning my first hackathon competition",
    },
    {
      id: "4",
      title: "Code Review Session",
      src: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Learning from senior developers",
    },
  ];

  const blogPosts = [
    {
      id: "1",
      title: "Getting Started with React and TypeScript",
      date: "February 2025",
      excerpt: "A comprehensive guide to building modern web applications with React and TypeScript. Learn the fundamentals and best practices.",
      tags: ["React", "TypeScript", "Web Development"],
    },
    {
      id: "2",
      title: "Building Responsive UIs with Tailwind CSS",
      date: "January 2025",
      excerpt: "Discover how to create beautiful, responsive user interfaces using Tailwind CSS utility classes and modern design principles.",
      tags: ["CSS", "Tailwind", "UI/UX"],
    },
    {
      id: "3",
      title: "My Journey as a Software Engineering Student",
      date: "December 2024",
      excerpt: "Reflecting on my experiences, challenges, and growth as a computer science student pursuing a career in software development.",
      tags: ["Personal", "Career", "Learning"],
    },
    {
      id: "4",
      title: "Understanding Modern JavaScript Features",
      date: "November 2024",
      excerpt: "Exploring ES6+ features that every JavaScript developer should know, including async/await, destructuring, and modules.",
      tags: ["JavaScript", "ES6", "Programming"],
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
      id="memories"
      className="space-y-16 my-12"
    >
      {/* Section Title */}
      <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8">
        <GradientText>My Memories</GradientText>
      </motion.h2>

      {/* Photo Gallery Section */}
      <motion.div variants={itemVariants} className="space-y-8">
        <h3 className="text-2xl font-semibold mb-6 flex items-center space-x-3">
          <FaCamera className="w-6 h-6 text-blue-400" />
          <GradientText>Photo Gallery</GradientText>
        </h3>
        
        {/* Focus Cards */}
        <div className="mb-12">
          <h4 className="text-lg font-medium text-gray-300 mb-6">Featured Moments</h4>
          <FocusCards cards={focusPhotos} />
        </div>

        {/* Draggable Cards */}
        <div className="mb-12">
          <h4 className="text-lg font-medium text-gray-300 mb-6">Memory Collection (Drag to Reorder)</h4>
          <DraggableCards cards={draggablePhotos} />
        </div>
      </motion.div>

      {/* Blog Posts Section */}
      <motion.div variants={itemVariants} className="space-y-8">
        <h3 className="text-2xl font-semibold mb-6 flex items-center space-x-3">
          <FaPenFancy className="w-6 h-6 text-purple-400" />
          <GradientText>Blog Posts</GradientText>
        </h3>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h4 className="text-xl font-semibold text-white mb-2 md:mb-0">
                  {post.title}
                </h4>
                <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                  {post.date}
                </span>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-2 py-1 rounded-full border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}