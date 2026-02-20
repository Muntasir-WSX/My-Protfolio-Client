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
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
        visible: { 
            opacity: 1, 
            x: 0, 
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-[#0a0a0a] min-h-screen py-20 px-6 md:px-16 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] -translate-y-1/2"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header Section */}
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
                                        My <span className="text-transparent stroke-text-exp">Education</span>
                                    </h1>
                                </motion.div>

                {/* Timeline Section */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative border-l border-gray-800 ml-4 md:ml-8 space-y-12"
                >
                    {education.map((item, index) => (
                        <motion.div 
                            key={item._id} 
                            variants={itemVariants}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Timeline Bullet */}
                            <div className="absolute -left-2.25 top-2 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-orange-600 group-hover:bg-orange-600 transition-all duration-300 shadow-[0_0_10px_rgba(234,88,12,0.5)]"></div>

                            <div className="bg-[#111]/50 border border-gray-800 p-6 md:p-8 rounded-2xl backdrop-blur-sm hover:border-orange-600/50 transition-all duration-500">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-orange-600/10 rounded-lg text-orange-500">
                                            <FiBookOpen size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">{item.degree}</h3>
                                            <p className="text-orange-500 font-medium tracking-wide">{item.institution}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-1.5 bg-[#1a1a1a] border border-gray-700 rounded-full text-gray-400 text-sm">
                                        <FiCalendar className="text-orange-600" />
                                        {item.year}
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed font-light mb-6 max-w-3xl">
                                    {item.description}
                                </p>

                                {item.cgpa && (
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600/5 border border-orange-600/20 rounded-xl">
                                        <FiStar className="text-orange-500 fill-orange-500" />
                                        <span className="text-gray-200 font-bold uppercase text-xs tracking-widest">Result: {item.cgpa}</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style jsx="true">{`
                .stroke-text-edu {
                    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
                }
                @media (max-width: 768px) {
                    .stroke-text-edu {
                        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
                    }
                }
            `}</style>
        </section>
    );
};

export default MyEducation;