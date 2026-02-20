import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-[#1a1a2e] border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-orange-600/50 transition-all duration-500">
      
      {/* 📸 Image Container with Auto-Scroll */}
      <div className="relative h-64 overflow-hidden cursor-pointer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-top transition-all duration-[3000ms] ease-linear transform group-hover:translate-y-[-70%]"
          style={{ objectFit: 'cover' }}
        />
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
      </div>

      {/* 📝 Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* 🛠 Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-300 uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 🔗 Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <a 
            href={project.liveLink} 
            className="text-center py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-sm hover:scale-105 transition-transform"
          >
            Live Demo
          </a>
          <button className="py-2 border border-white/10 text-white rounded-lg text-sm hover:bg-white/5 transition-all">
            Details
          </button>
          <a 
            href={project.serverCode} 
            className="text-center py-2 bg-gray-800 text-white rounded-lg text-xs hover:bg-gray-700 transition-all"
          >
            Server Code
          </a>
          <a 
            href={project.clientCode} 
            className="text-center py-2 bg-gray-800 text-white rounded-lg text-xs hover:bg-gray-700 transition-all"
          >
            Client Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;