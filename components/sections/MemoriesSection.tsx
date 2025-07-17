"use client";

import { motion } from "framer-motion";
import GradientText from "@/components/ui/gradient-text";
import { FocusCards } from "@/components/ui/focus-cards";
import {
  DraggableCardContainer,
  DraggableCardBody,
} from "@/components/ui/draggable-card";
import { FaCamera, FaPenFancy } from "react-icons/fa";
import Image from "next/image";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

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

  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const blogPosts = [
    {
      id: "1",
      title: "Getting Started with React and TypeScript",
      date: "February 2025",
      excerpt:
        "A comprehensive guide to building modern web applications with React and TypeScript. Learn the fundamentals and best practices.",
      tags: ["React", "TypeScript", "Web Development"],
    },
    {
      id: "2",
      title: "Building Responsive UIs with Tailwind CSS",
      date: "January 2025",
      excerpt:
        "Discover how to create beautiful, responsive user interfaces using Tailwind CSS utility classes and modern design principles.",
      tags: ["CSS", "Tailwind", "UI/UX"],
    },
    {
      id: "3",
      title: "My Journey as a Software Engineering Student",
      date: "December 2024",
      excerpt:
        "Reflecting on my experiences, challenges, and growth as a computer science student pursuing a career in software development.",
      tags: ["Personal", "Career", "Learning"],
    },
    {
      id: "4",
      title: "Understanding Modern JavaScript Features",
      date: "November 2024",
      excerpt:
        "Exploring ES6+ features that every JavaScript developer should know, including async/await, destructuring, and modules.",
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
      className="space-y-16 my-12">
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
          <h4 className="text-lg font-medium text-gray-300 mb-6">
            Featured Moments
          </h4>
          <FocusCards cards={focusPhotos} />
        </div>

        {/* Draggable Cards */}
        <div className="mb-12 relative">
          <h4 className="text-lg font-medium text-gray-300 mb-6">
            Interactive Memory Cards (Drag & Tilt)
          </h4>
          <AnimatedTestimonials testimonials={testimonials} />
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
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
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
                    className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-2 py-1 rounded-full border border-blue-500/30">
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
