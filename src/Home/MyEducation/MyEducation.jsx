import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiStar } from 'react-icons/fi';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const MyEducation = () => {
    const [education, setEducation] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get("/education")
            .then(res => setEducation(res.data))
            .catch(err => console.error(err));
    }, [axiosPublic]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section id="education" className="bg-transparent border-t border-gray-100 py-20 px-6 md:px-16 text-gray-900 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center lg:text-left"
                >
                    <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">
                        Career Path
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-1">
                        Educational Background
                    </h2>
                </motion.div>

                {/* Timeline Section */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative border-l-2 border-emerald-100 ml-4 md:ml-6 space-y-8"
                >
                    {education.map((item) => (
                        <motion.div 
                            key={item._id} 
                            variants={itemVariants}
                            className="relative pl-6 md:pl-10 group"
                        >
                            {/* Minimal Timeline Bullet */}
                            <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-white border-2 border-emerald-600 group-hover:bg-emerald-600 transition-colors duration-300"></div>

                            {/* Minimal Education Card */}
                            <div className="bg-gray-50/60 border border-gray-200/80 p-6 md:p-8 rounded-2xl hover:border-emerald-600/50 hover:bg-white transition-all duration-300 shadow-xs">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                                            <FiBookOpen size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900">{item.degree}</h3>
                                            <p className="text-emerald-700 font-semibold text-sm">{item.institution}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600 text-xs font-medium w-fit">
                                        <FiCalendar className="text-emerald-600" />
                                        {item.year}
                                    </div>
                                </div>

                                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal mb-4">
                                    {item.description}
                                </p>

                                {item.cgpa && (
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50/80 border border-emerald-200/60 rounded-lg">
                                        <FiStar className="text-emerald-600 fill-emerald-600 text-xs" />
                                        <span className="text-gray-800 font-bold text-xs">CGPA / Result: {item.cgpa}</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MyEducation;