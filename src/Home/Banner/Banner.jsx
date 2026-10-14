import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Banner = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Muntasir-WSX",
      name: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/muntasir-mahmud-aa4291278/",
      name: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/muntasir_wsx/",
      name: "Instagram",
    },
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/muntasir.mahmud.9843",
      name: "Facebook",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-transparent text-gray-900 overflow-hidden px-6 md:px-16 py-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
        {/* Left Text Content Section */}
        <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Greeting & Name */}
            <div className="space-y-2">
              <motion.p
                variants={itemVariants}
                className="text-emerald-600 font-bold tracking-widest text-sm uppercase"
              >
                Hi, there! I'm
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight"
              >
                Muntasir Mahmud
              </motion.h1>

              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-4xl font-bold text-emerald-600 mt-1"
              >
                Full Stack Developer
              </motion.h2>
            </div>

            {/* Sub-paragraphs */}
            <motion.div
              variants={itemVariants}
              className="space-y-2 text-gray-600 text-base md:text-lg font-normal max-w-xl mx-auto lg:mx-0"
            >
              <p>
                Crafting high-performance, responsive web applications with
                precision and modern technology stack.
              </p>
              <p>
                Passionate about solving complex problems, building scalable
                APIs, and turning concepts into digital reality.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2"
            >
              <ScrollLink
                to="projects"
                smooth={true}
                duration={800}
                offset={-80}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all duration-300 shadow-xs cursor-pointer group"
              >
                Explore My Works
                <FiArrowUpRight className="text-lg group-hover:rotate-45 transition-transform" />
              </ScrollLink>

              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                offset={-80}
                className="border border-gray-300 text-gray-800 hover:bg-gray-900 hover:text-white hover:border-gray-900 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center cursor-pointer shadow-2xs"
              >
                Get In Touch
              </ScrollLink>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-3 pt-4"
            >
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300 text-base shadow-2xs"
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Profile Photo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]">
            <div className="absolute inset-0 bg-emerald-100 rounded-full scale-105 transform translate-x-2 translate-y-2 -z-10"></div>
            <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-full scale-110 -z-10"></div>

            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-100">
              <img
                src="https://res.cloudinary.com/dnk0bvpym/image/upload/v1791952721/Gemini_Generated_Image_oy4kzwoy4kzwoy4k_ufb4mz.jpg"
                alt="Muntasir Mahmud"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
