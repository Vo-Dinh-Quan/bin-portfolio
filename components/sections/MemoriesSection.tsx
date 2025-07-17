"use client";

import { motion } from "framer-motion";
import GradientText from "@/components/ui/gradient-text";
import { FocusCards } from "@/components/ui/focus-cards";
import { DraggableCardContainer, DraggableCardBody } from "@/components/ui/draggable-card";
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

  const memoryCards = [
    {
      title: "First React Project",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "University Days",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=400",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Hackathon Victory",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Code Review Session",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=400",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Team Collaboration",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Learning Journey",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Coding Sessions",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
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
        <div className="mb-12 relative">
          <h4 className="text-lg font-medium text-gray-300 mb-6">Interactive Memory Cards (Drag & Tilt)</h4>
          <DraggableCardContainer className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10">
            <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-xl font-bold text-gray-400 md:text-2xl z-0">
              Drag the cards around and watch them tilt!
            </p>
            {memoryCards.map((item, index) => (
              <DraggableCardBody key={index} className={item.className}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none relative z-10 h-48 w-48 md:h-64 md:w-64 object-cover rounded-xl"
                />
                <h3 className="mt-3 text-center text-sm md:text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer>
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