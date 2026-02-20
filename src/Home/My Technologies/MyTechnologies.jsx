import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaFire, FaPhp, FaWordpress, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { 
    SiTailwindcss, SiDaisyui, SiRadixui, SiShadcnui, 
    SiReactrouter, SiExpress, SiMongodb, SiAxios, 
    SiNextdotjs, SiSupabase, SiTypescript, SiJavascript,
    SiReactquery
} from 'react-icons/si';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const MyTechnologies = () => {
    const [showAll, setShowAll] = useState(false);

    const allTech = [
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
        { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-white" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'React Router', icon: <SiReactrouter className="text-[#CA4245]" /> },
        { name: 'TanStack Query', icon: <SiReactquery className="text-[#f44150]" />  }, 
        { name: 'Firebase', icon: <FaFire className="text-[#FFCA28]" /> },
        { name: 'Radix UI', icon: <SiRadixui className="text-[#FFCA28]" /> },
        { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
        { name: 'Shadcn UI', icon: <SiShadcnui className="text-white" /> },
        { name: 'DaisyUI', icon: <SiDaisyui className="text-[#ebd727]" /> },
        { name: 'Axios', icon: <SiAxios className="text-[#5A29E4]" /> },
        { name: 'WordPress', icon: <FaWordpress className="text-[#21759B]" /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { 
            opacity: 1, scale: 1, y: 0,
            transition: { duration: 0.4, ease: "easeOut" } 
        }
    };

    const visibleTech = showAll ? allTech : allTech.slice(0, 9);

    return (
        <section className="py-24 bg-[#0a0a0a] px-6 md:px-16 overflow-hidden">
             {/* Background Glow */}
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header (Left Aligned on Desktop) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center lg:text-left"
                >
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <span className="w-12 h-0.5 bg-orange-600"></span>
                        <h2 className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase">
                            Skill Set
                        </h2>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        My <span className="text-transparent stroke-text-tech">Technologies</span>
                    </h1>
                </motion.div>

                {/* --- Grid Fixed to Center --- */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto" // mx-auto added here
                >
                    <AnimatePresence mode='popLayout'>
                        {visibleTech.map((tech) => (
                            <motion.div
                                key={tech.name}
                                layout
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                                className="group bg-[#111111] border border-white/10 p-8 md:p-10 rounded-3xl flex flex-col items-center gap-4 hover:border-orange-600/40 transition-all duration-300 shadow-2xl relative overflow-hidden"
                            >
                                <div className="text-5xl md:text-6xl transition-transform duration-500 group-hover:scale-110 relative z-10">
                                    {tech.icon}
                                </div>
                                <span className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors relative z-10 text-center">
                                    {tech.name}
                                </span>
                                <div className="absolute inset-0 bg-linear-to-br from-orange-600/0 to-orange-600/5 group-hover:to-orange-600/10 transition-colors duration-500"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Button Centered */}
                <div className="mt-16 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowAll(!showAll)}
                        className="group relative inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-gray-800 hover:border-orange-600 text-white font-bold uppercase text-xs tracking-widest rounded-full transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10">
                            {showAll ? "Show Less" : "Show More"}
                        </span>
                        {showAll ? (
                            <FiChevronUp className="relative z-10 text-xl group-hover:-translate-y-1 transition-transform" />
                        ) : (
                            <FiChevronDown className="relative z-10 text-xl group-hover:translate-y-1 transition-transform" />
                        )}
                        <div className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 z-0"></div>
                    </motion.button>
                </div>
            </div>

            <style jsx="true">{`
                .stroke-text-tech {
                    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
                }
                @media (max-width: 768px) {
                    .stroke-text-tech {
                        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
                    }
                }
            `}</style>
        </section>
    );
};

export default MyTechnologies;