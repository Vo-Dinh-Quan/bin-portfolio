"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaPinterest,
  FaInstagram,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FloatingDock from "@/components/ui/floating-dock";
import GradientText from "@/components/ui/gradient-text";
import ShimmerButton from "@/components/ui/shimmer-button";
import TypingAnimation from "@/components/ui/typing-animation";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { useEffect, useState } from "react";

const texts = ["Software Engineer", "Web Developer", "One champ TypeScript"];

export default function Sidebar() {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/vodinhquan27/",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/vo-dinh-quan",
      label: "GitHub",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/vdq.27/",
      label: "Instagram",
    },
  ];
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 5000); // thời gian lặp lại

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="h-fit z-40">
      <div className="bg-transparent backdrop-blur-sm rounded-2xl p-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="relative">
            <CardContainer className="inter-var p-0">
              <CardBody className="w-56 h-56 rounded-full overflow-hidden relative group/card bg-gradient-to-br from-[#1C2526] to-[#0A0A0A] border-2 border-[#F0F0F0] shadow-2xl">
                <CardItem translateZ="100" className="w-full h-full">
                  <Image
                    src="/GEEK.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Profile"
                    unoptimized
                    className="rounded-full w-44 h-44"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>

          {/* Name and Title */}
          <div className="text-center space-y-2">
            <motion.h1
              className="text-2xl font-bold uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}>
              <GradientText>Vo Dinh Quan</GradientText>
            </motion.h1>
            <div className="text-lg font-light">
              <TypingAnimation
                text="Software Engineer"
                key={key}
                duration={80}
              />
            </div>
          </div>

          {/* Location */}
          <motion.div
            className="flex items-center space-x-2 text-xs text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}>
            <FaMapMarkerAlt className="w-3 h-3" />
            <span>Ho Chi Minh, Viet Nam</span>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}>
            <ShimmerButton>
              <div className="flex items-center gap-2">
                <div>
                  <FaDownload className="w-4 h-4 text-cen" />
                </div>
                <span>Download CV</span>
              </div>
            </ShimmerButton>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-[#F0F0F0] to-transparent opacity-30"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />

          {/* Follow Me Section */}
          <div className="w-full space-y-4">
            <motion.h3
              className="text-sm font-medium text-center text-[#F0F0F0]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}>
              Follow me
            </motion.h3>

            {/* Email */}
            <motion.div
              className="flex text-start space-x-2 text-xs text-gray-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}>
              <MdEmail className="w-4 h-4" />
              <span>vodinhquan2707.it@gmail.com</span>
            </motion.div>

            {/* Social Links */}
            <div className="flex justify-center space-x-3 pt-12">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1C2526] to-[#0A0A0A] flex items-center justify-center text-[#F0F0F0] hover:bg-gradient-to-br hover:from-white hover:to-gray-200 hover:text-[#0A0A0A] transition-all duration-300 border border-white/10 hover:border-white/30"
                  aria-label={social.label}>
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
