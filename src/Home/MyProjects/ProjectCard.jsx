import React from "react";
import { FiArrowUpRight, FiGithub, FiServer } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-[#111111]/50 border border-gray-800/50 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-orange-600/30 transition-all duration-500">
      {/* 📸 Image Container with Banner-like Shadow */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-top transition-all duration-[8s] ease-linear transform group-hover:translate-y-[calc(-100%+240px)]"
          style={{ objectFit: "cover" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* 📝 Content Section */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-black text-white uppercase tracking-tighter group-hover:text-orange-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-xs mt-2 leading-relaxed line-clamp-2 font-light">
            {project.description}
          </p>
        </div>

        {/* 🛠 Tech Stack Tags (Minimalist) */}
        <div className="flex flex-wrap gap-2">
          {project.tags &&
            project.tags.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] text-gray-400 uppercase tracking-widest font-medium"
              >
                {tech}
              </span>
            ))}
        </div>

        {/* 🔗 Action Buttons (Banner Style) */}
        <div className="pt-2 space-y-3">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300"
          >
            Live Demo <FiArrowUpRight />
          </a>

          <div className="grid grid-cols-2 gap-3">
            <a
              href={project.clientCode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 border border-gray-800 text-gray-400 hover:bg-white hover:text-black rounded-full text-[10px] uppercase font-bold transition-all"
            >
              Client <FiGithub />
            </a>
            <a
              href={project.serverCode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 border border-gray-800 text-gray-400 hover:bg-white hover:text-black rounded-full text-[10px] uppercase font-bold transition-all"
            >
              Server <FiServer />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
