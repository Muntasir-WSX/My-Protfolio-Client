import React from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { FiBriefcase, FiMapPin, FiCalendar } from "react-icons/fi";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../SharedComponents/Loader/Loader";

const MyExperience = () => {
  const axiosPublic = useAxiosPublic();

  const { data: experiences = [], isLoading } = useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
      const res = await axiosPublic.get("/experience");
      return res.data;
    },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  if (isLoading) return <Loader></Loader>;

  return (
    <section id="experience" className="py-20 bg-transparent border-t border-gray-100 px-6 md:px-12 text-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center lg:text-left"
        >
          <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">
            Career Path
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-1">
            Work Experience
          </h2>
        </motion.div>

        {/* Experience Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp._id}
              variants={cardVariants}
              className="theme-card p-8 rounded-2xl relative transition-colors duration-300 hover:border-emerald-600/50 hover:bg-white dark:hover:bg-gray-800"
            >
              <div className="relative z-10">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-emerald-700 font-semibold tracking-wider uppercase text-xs mt-1">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-3.5 py-1.5 rounded-full flex items-center gap-2 text-gray-600 dark:text-gray-200 text-xs font-medium">
                    <FiCalendar className="text-emerald-600" />
                    {exp.duration}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-gray-500 text-xs font-medium mb-4">
                  <span className="flex items-center gap-1">
                    <FiMapPin className="text-emerald-600" />
                    {exp.location || "Remote"}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base border-l-2 border-emerald-600/40 pl-4 font-normal">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyExperience;