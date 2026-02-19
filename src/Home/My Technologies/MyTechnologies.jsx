import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaReact, FaNodeJs, FaFire, FaDatabase, FaPhp, FaWordpress } from 'react-icons/fa';
import { 
    SiTailwindcss, SiDaisyui, SiRadixui, SiShadcnui, 
    SiReactrouter, SiExpress, SiMongodb, SiAxios, 
    SiNextdotjs, SiReactquery, SiSupabase, SiTypescript
} from 'react-icons/si';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { RiBarChartGroupedFill } from 'react-icons/ri'; 

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

    const visibleCount = showAll ? 12 : 6;
    const visibleTech = allTech.slice(0, visibleCount);

    return (
        <section className="py-20 bg-[#0a0a0a] px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-black text-white mb-16 uppercase tracking-widest">
                    My <span className="text-orange-600 italic">Tech Stack</span>
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <AnimatePresence mode='popLayout'>
                        {visibleTech.map((tech) => (
                            <motion.div
                                key={tech.name}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="group bg-[#111111] border border-white/5 p-10 rounded-3xl flex flex-col items-center gap-4 hover:bg-white/3 hover:border-orange-600/40 transition-all cursor-default shadow-2xl"
                            >
                                <div className="text-6xl transition-transform duration-500 group-hover:rotate-360 group-hover:scale-110">
                                    {tech.icon}
                                </div>
                                <span className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More / Less Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAll(!showAll)}
                    className="mt-16 inline-flex items-center gap-3 px-10 py-4 bg-orange-600 text-white font-bold uppercase text-xs tracking-[0.3em] rounded-full hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)]"
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