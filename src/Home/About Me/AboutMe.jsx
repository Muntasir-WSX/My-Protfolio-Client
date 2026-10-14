import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-white text-gray-900 px-6 md:px-16 overflow-hidden border-t border-gray-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="mb-10 text-center lg:text-left">
          <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">
            Get To Know Me
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-1">
            About Me
          </h2>
        </motion.div>

        {/* Minimal Bio Card */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-50/60 border border-gray-200/80 p-8 md:p-12 rounded-2xl shadow-xs space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-normal"
        >
          <p>
            Hello! I am <span className="text-emerald-700 font-bold">Muntasir Mahmud</span>, a 
            passionate <span className="text-emerald-700 font-bold">Full-Stack Developer</span> and a Computer Science & Engineering student at 
            <span className="text-gray-900 font-bold"> International Islamic University Chittagong (IIUC)</span>.
          </p>

          <p>
            I specialize in engineering full-stack web applications using <span className="text-emerald-700 font-bold">Next.js</span>, <span className="text-emerald-700 font-bold">TypeScript</span>, and <span className="text-emerald-700 font-bold">PostgreSQL</span> with <span className="text-emerald-700 font-bold">Prisma ORM</span>. To deliver high-performance and scalable systems, I integrate <span className="text-emerald-700 font-bold">Redis</span> for caching and leverage <span className="text-emerald-700 font-bold">Docker</span> for seamless containerization and deployment.
          </p>

          <p>
            While my web development foundation was built upon the <span className="text-emerald-700 font-medium">MERN stack</span> (MongoDB, Express.js, React, Node.js), I have evolved into architecting production-ready backend workflows and optimized databases that meet modern industry standards.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;