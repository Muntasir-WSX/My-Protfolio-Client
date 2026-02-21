import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/projects").then((res) => setProjects(res.data));
  }, [axiosPublic]);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="relative bg-[#0a0a0a] py-24 px-6 md:px-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Updated Header Section (Left Aligned) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <span className="w-12 h-0.5 bg-orange-600"></span>
            <h2 className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase">
              My Works
            </h2>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Featured{" "}
            <span className="text-transparent stroke-text hover:stroke-orange-600 transition-all duration-300">
              projects
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700">
          {displayedProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && projects.length > 3 && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-gray-800 hover:border-orange-600 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Show More Projects</span>
              <FiPlus className="relative z-10 text-lg group-hover:rotate-90 transition-transform duration-300" />
              <div className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-0"></div>
            </button>
          </div>
        )}

        {projects.length === 0 && (
          <div className="text-center py-20 border border-dashed border-gray-800 rounded-3xl">
            <p className="text-gray-500 font-light tracking-widest uppercase">
              No projects uploaded yet, mama!
            </p>
          </div>
        )}
      </div>

      {/* Stroke Text Style */}
      <style jsx="true">{`
        .stroke-text-proj {
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
        }
        @media (max-width: 768px) {
          .stroke-text-proj {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
          }
        }
      `}</style>
    </section>
  );
};

export default MyProjects;
