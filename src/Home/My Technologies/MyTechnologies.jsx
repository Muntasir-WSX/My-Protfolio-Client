import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFire, FaPhp, FaWordpress, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { 
    SiTailwindcss, SiDaisyui, SiRadixui, SiShadcnui, 
    SiReactrouter, SiExpress, SiMongodb, SiAxios, 
    SiNextdotjs, SiSupabase, SiTypescript, SiJavascript,
    SiReactquery
} from 'react-icons/si';

const MyTechnologies = () => {
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
        { name: 'PHP', icon: <FaPhp className="text-[#21759B]" /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.5 } 
        }
    };

    return (
        <section className="py-20 bg-[#0a0a0a] px-4 md:px-16 relative overflow-hidden">
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-600/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-20 text-center lg:text-left"
                >
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <span className="w-10 md:w-12 h-0.5 bg-orange-600"></span>
                        <h2 className="text-orange-500 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase">
                            Skill Set
                        </h2>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        My <span className="text-transparent stroke-text hover:stroke-orange-600 transition-all duration-300">Stack</span>
                    </h1>
                </motion.div>

                {/* --- Grid Section --- */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
                >
                    {allTech.map((tech) => (
                        <motion.div
                            key={tech.name}
                            variants={itemVariants}
                            // 'group' class ta hover handle korar jonno use hobe
                            className="group bg-[#111] border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-orange-600/30 transition-all duration-500 relative"
                        >
                            {/* --- ICON SPINNER ON HOVER --- */}
                            <motion.div 
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="text-4xl md:text-5xl z-10 origin-center"
                            >
                                {tech.icon}
                            </motion.div>

                            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors z-10 text-center">
                                {tech.name}
                            </span>
                            
                            {/* Hover Subtle Glow */}
                            <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-[0.03] transition-opacity rounded-2xl"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx="true">{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
                }
                @media (min-width: 768px) {
                    .stroke-text { -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4); }
                }
                .stroke-text:hover {
                    -webkit-text-stroke: 1.5px #ea580c;
                }
            `}</style>
        </section>
    );
};

export default MyTechnologies;