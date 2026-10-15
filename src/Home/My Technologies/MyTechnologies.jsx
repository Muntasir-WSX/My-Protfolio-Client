import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaFire, FaHtml5, FaCss3Alt, FaDocker } from 'react-icons/fa';
import { 
    SiTailwindcss, SiDaisyui, SiRadixui, SiShadcnui, 
    SiReactrouter, SiExpress, SiMongodb, SiAxios, 
    SiNextdotjs, SiSupabase, SiTypescript, SiJavascript,
    SiReactquery, SiPrisma, SiPostgresql, SiRedis,
    SiZod, SiThreedotjs, SiLangchain, SiOllama, SiVite, SiFramer,
    SiPostman,
    SiBeekeeperstudio
} from 'react-icons/si';

const MyTechnologies = () => {
    // Categorized Skill Sets
    const skillCategories = [
        {
            title: "Frontend Engineering",
            skills: [
                { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
                { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900" /> },
                { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
                { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
                { name: 'TanStack Query', icon: <SiReactquery className="text-[#FF4154]" /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: 'Vite', icon: <SiVite className="text-[#646CFF]" /> },
                { name: 'Three.js', icon: <SiThreedotjs className="text-gray-900" /> },
                { name: 'Framer Motion', icon: <SiFramer className="text-[#0055FF]" /> },
                { name: 'Shadcn UI', icon: <SiShadcnui className="text-gray-900" /> },
                { name: 'DaisyUI', icon: <SiDaisyui className="text-[#1AD1A5]" /> },
                { name: 'Radix UI', icon: <SiRadixui className="text-[#161618]" /> },
                { name: 'React Router', icon: <SiReactrouter className="text-[#CA4245]" /> },
                { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
                { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
            ]
        },
        {
            title: "Backend & AI Systems",
            skills: [
                { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
                { name: 'Express.js', icon: <SiExpress className="text-gray-900" /> },
                { name: 'RAG & AI Agents', icon: <SiLangchain className="text-[#1C3C3C]" /> },
                { name: 'Ollama (Local LLM)', icon: <SiOllama className="text-gray-900" /> },
                { name: 'Redis Caching', icon: <SiRedis className="text-[#DC382D]" /> },
                { name: 'Zod Validation', icon: <SiZod className="text-[#3E67B1]" /> },
                { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
                { name: 'Firebase Auth', icon: <FaFire className="text-[#FFCA28]" /> },
                { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
                { name: 'Axios API', icon: <SiAxios className="text-[#5A29E4]" /> },
            ]
        },
        {
            title: "Database & ORM",
            skills: [
                { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
                { name: 'Prisma ORM', icon: <SiPrisma className="text-[#2D3748]" /> },
                { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
                { name: 'Postman', icon: <SiPostman className="text-[#FFCA28]" /> },
                { name: " BeeKeeper Studio", icon: <SiBeekeeperstudio className="text-yellow-500" /> }

            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 12 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" } 
        }
    };

    return (
        <section id="skills" className="py-20 bg-transparent border-t border-gray-100 px-6 md:px-12 text-gray-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center lg:text-left"
                >
                    <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">
                        Technical Expertise
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-1">
                        Skills & Technologies
                    </h2>
                </motion.div>

                {/* 3 Column Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="theme-card p-6 rounded-2xl space-y-6">
                            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-emerald-600 pl-3">
                                {category.title}
                            </h3>

                            <motion.div 
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3"
                            >
                                {category.skills.map((tech) => (
                                    <motion.div
                                        key={tech.name}
                                        variants={itemVariants}
                                        className="group theme-card p-3.5 rounded-xl flex items-center gap-3 hover:border-emerald-600/50 hover:shadow-xs transition-all duration-300"
                                    >
                                        <div className="text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110">
                                            {tech.icon}
                                        </div>

                                        <span className="text-gray-700  text-xs font-semibold group-hover:text-emerald-700 transition-colors truncate">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyTechnologies;