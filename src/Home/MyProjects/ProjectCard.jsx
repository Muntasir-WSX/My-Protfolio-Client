import React from "react";
import { FiArrowUpRight, FiGithub, FiServer, FiInfo } from "react-icons/fi";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  return (
    <div className="group theme-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-emerald-600/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xs flex flex-col h-full">
      
      {/* 📸 Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900/20 via-transparent to-transparent opacity-40 pointer-events-none"></div>
      </div>

      {/* 📝 Content Section */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-2 font-normal">
            {project.description}
          </p>
        </div>

        {/* 🛠 Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags &&
            project.tags.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-[10px] text-gray-700 dark:text-gray-200 font-semibold tracking-wider uppercase shadow-2xs"
              >
                {tech}
              </span>
            ))}
        </div>

        {/* 🔗 Action Buttons */}
        <div className="pt-3 space-y-2.5 mt-auto">
          {/* Details Button */}
          <Link
            to={`/project/${project._id}`}
            className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xs cursor-pointer"
          >
            View Details <FiInfo size={16} />
          </Link>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 rounded-xl text-[11px] uppercase font-semibold transition-all duration-300 cursor-pointer shadow-2xs"
            >
              Live Demo <FiArrowUpRight size={14} />
            </a>

            {project.clientCode && (
              <a
                href={project.clientCode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 rounded-xl text-[11px] uppercase font-semibold transition-all duration-300 cursor-pointer shadow-2xs"
              >
                Client Repo <FiGithub size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;