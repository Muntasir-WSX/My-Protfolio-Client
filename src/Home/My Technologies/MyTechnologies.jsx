import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaFire, FaPhp, FaWordpress } from 'react-icons/fa';
import { 
    SiTailwindcss, SiDaisyui, SiRadixui, SiShadcnui, 
    SiReactrouter, SiExpress, SiMongodb, SiAxios, 
    SiNextdotjs, SiReactquery, SiSupabase, SiTypescript
} from 'react-icons/si';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const MyTechnologies = () => {
    const [showAll, setShowAll] = useState(false);

    const allTech = [
        { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'Express.js', icon: <SiExpress className="text-white" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Firebase', icon: <FaFire className="text-[#FFCA28]" /> },
        { name: 'WordPress', icon: <FaWordpress className="text-[#21759B]" /> },
        { name: 'PHP', icon: <FaPhp className="text-[#777BB4]" /> },
        { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
        { name: 'Shadcn UI', icon: <SiShadcnui className="text-white" /> },
        { name: 'Axios', icon: <SiAxios className="text-[#5A29E4]" /> },
        { name: 'TanStack Query', icon: <SiReactquery className="text-[#FF4154]" /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
        visible: { 
            opacity: 1, y: 0, filter: "blur(0px)",
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    const visibleCount = showAll ? 12 : 6;
    const visibleTech = allTech.slice(0, visibleCount);

    return (
        <section className="py-20 bg-[#0a0a0a] px-6">
            <div className="max-w-6xl mx-auto text-center">
                
                {/* Section Title */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        My <span className="text-orange-600">Tech Stack</span>
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent mx-auto mt-4"></div>
                </motion.div>

                {/* Tech Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                    <AnimatePresence mode='popLayout'>
                        {visibleTech.map((tech) => (
                            <motion.div
                                key={tech.name}
                                variants={itemVariants}
                                layout
                                className="group bg-[#111111] border border-white/5 p-10 rounded-3xl flex flex-col items-center gap-4 hover:bg-white/5 hover:border-orange-600/40 transition-all duration-500 cursor-default shadow-2xl relative overflow-hidden"
                            >
                                <div className="text-6xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 relative z-10">
                                    {tech.icon}
                                </div>
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors relative z-10">
                                    {tech.name}
                                </span>
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-orange-600/0 group-hover:bg-orange-600/5 transition-colors duration-500"></div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Button */}
                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(234, 88, 12, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAll(!showAll)}
                    className="mt-16 inline-flex items-center gap-3 px-10 py-4 bg-orange-600 text-white font-bold uppercase text-xs tracking-[0.3em] rounded-full transition-all"
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