import React from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';

import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Loader from '../../SharedComponents/Loader/Loader';

const MyExperience = () => {
    const axiosPublic = useAxiosPublic();

    // ডাটা ফেচ করা
    const { data: experiences = [], isLoading } = useQuery({
        queryKey: ['experience'],
        queryFn: async () => {
            const res = await axiosPublic.get('/experience');
            return res.data;
        }
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
        }
    };

    if (isLoading) return <Loader></Loader>

    return (
        <section className="py-24 bg-[#0a0a0a] px-6 md:px-16 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* --- Default Header Style --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center lg:text-left"
                >
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <span className="w-12 h-0.5 bg-orange-600"></span>
                        <h2 className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase">
                            Career Path
                        </h2>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        My <span className="text-transparent stroke-text-exp">Experience</span>
                    </h1>
                </motion.div>

                {/* Experience Cards Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp._id}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="group bg-[#111] border border-white/10 p-8 rounded-3xl relative overflow-hidden transition-all duration-300 hover:border-orange-600/30 shadow-2xl"
                        >
                            {/* Decorative Icon Background */}
                            <FiBriefcase className="absolute -right-6 -bottom-6 text-9xl text-white/5 group-hover:text-orange-600/10 transition-colors duration-500" />

                            <div className="relative z-10">
                                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-orange-500 transition-colors">
                                            {exp.role}
                                        </h3>
                                        <p className="text-orange-600 font-bold tracking-widest uppercase text-sm mt-1">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="bg-[#1a1a1a] px-4 py-2 rounded-full border border-white/5 flex items-center gap-2 text-gray-400 text-xs font-medium">
                                        <FiCalendar className="text-orange-600" />
                                        {exp.duration}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                                    <span className="flex items-center gap-1">
                                        <FiMapPin className="text-orange-600" />
                                        {exp.location || "Remote"}
                                    </span>
                                </div>

                                <p className="text-gray-400 leading-relaxed text-base md:text-lg border-l-2 border-gray-800 pl-4 group-hover:border-orange-600/50 transition-colors">
                                    {exp.description}
                                </p>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-linear-to-br from-orange-600/0 to-orange-600/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Stroke Text Style */}
            <style jsx="true">{`
                .stroke-text-exp {
                    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
                }
                @media (max-width: 768px) {
                    .stroke-text-exp {
                        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
                    }
                }
            `}</style>
        </section>
    );
};

export default MyExperience;