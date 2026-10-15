import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../SharedComponents/Loader/Loader";
import { motion } from "framer-motion";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/projects")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, [axiosPublic]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      } 
    }
  };

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center bg-white ">
        <Loader />
      </div>
    );
  }

  return (
    <section id="projects" className="relative bg-transparent text-gray-900 py-20 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center lg:text-left"
        >
          <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">
            My Works
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-1">
            Featured Projects
          </h2>
        </motion.div>

        {/* Grid Section */}
        {projects.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project._id}
                variants={cardVariants}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Empty State */
          <div className="theme-card text-center py-20 border-dashed rounded-2xl">
            <p className="text-gray-500 font-medium tracking-wide text-sm">
              No projects uploaded yet!
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Check back later for updates or check console for API issues.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProjects;