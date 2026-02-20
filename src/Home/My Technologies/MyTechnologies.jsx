import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaFire, FaPhp, FaWordpress, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { 
    SiTailwindcss, SiDaisyui, SiRadixui, SiShadcnui, 
    SiReactrouter, SiExpress, SiMongodb, SiAxios, 
    SiNextdotjs, SiSupabase, SiTypescript, SiJavascript
} from 'react-icons/si';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const TanStackQueryIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-[#FF4154] w-[1em] h-[1em]">
        <path d="M11.996 0a12 12 0 1 0 12 12A12.003 12.003 0 0 0 11.996 0zm0 21.82A9.82 9.82 0 1 1 21.82 12a9.823 9.823 0 0 1-9.824 9.82zM7.18 10.96a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72zm9.64 0a1.36 1.36 0 1 0 0-2.72 1.36 1.36 0 0 0 0 2.72zm-4.82 6.55c2.45 0 4.54-1.58 5.3-3.79H6.7c.76 2.21 2.85 3.79 5.3 3.79z"/>
    </svg>
);

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
        { name: 'TanStack Query', icon: <TanStackQueryIcon /> }, 
        { name: 'Firebase', icon: <FaFire className="text-[#FFCA28]" /> },
        { name: 'Radix UI', icon: <SiRadixui className="text-[#FFCA28]" /> },
        { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
        { name: 'Shadcn UI', icon: <SiShadcnui className="text-white" /> },
        { name: 'DaisyUI', icon: <SiDaisyui className="text-[#1AD1A5]" /> },
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
        <section className="py-20 bg-[#0a0a0a] px-6">
            <div className="max-w-6xl mx-auto text-center">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        My <span className="text-orange-600">Tech Stack</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-4"></div>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
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
                                className="group bg-[#111111] border border-white/10 p-10 rounded-3xl flex flex-col items-center gap-4 hover:border-orange-600/40 transition-all duration-300 shadow-2xl relative overflow-hidden"
                            >
                                <div className="text-6xl transition-transform duration-500 group-hover:scale-110 relative z-10">
                                    {tech.icon}
                                </div>
                                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors relative z-10">
                                    {tech.name}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/5 group-hover:to-orange-600/10 transition-colors duration-500"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAll(!showAll)}
                    className="mt-16 inline-flex items-center gap-3 px-10 py-4 bg-orange-600 text-white font-bold uppercase text-xs tracking-[0.3em] rounded-full transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)]"
                >
                    {showAll ? (
                        <>Show Less <FiChevronUp className="text-xl" /></>
                    ) : (
                        <>Show More <FiChevronDown className="text-xl" /></>
                    )}
                </motion.button>
            </div>
        </section>
    );
};

export default MyTechnologies;