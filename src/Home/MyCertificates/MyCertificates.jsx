import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiCalendar, FiX, FiSearch, FiChevronDown, FiChevronUp, FiStar } from 'react-icons/fi';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Loader from '../../SharedComponents/Loader/Loader';

const MyCertificates = () => {
    const axiosPublic = useAxiosPublic();
    const [activeTab, setActiveTab] = useState('Competition');
    const [selectedImage, setSelectedImage] = useState(null);
    const [showAll, setShowAll] = useState(false); 

    const categories = ['Competition', 'Webinar', 'Course'];

    const { data: certificates = [], isLoading } = useQuery({
        queryKey: ['certificates'],
        queryFn: async () => {
            const res = await axiosPublic.get('/certificates');
            return res.data.sort((a, b) => (a.order || 0) - (b.order || 0));
        }
    });
    const filteredCertificates = certificates.filter(
        (cert) => cert.category?.trim().toLowerCase() === activeTab.toLowerCase()
    );
    const visibleCertificates = showAll ? filteredCertificates : filteredCertificates.slice(0, 3);

    if (isLoading) return <Loader />

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="certificates" className="bg-[#0a0a0a] py-20 px-6 md:px-16 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px]"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center lg:text-left"
                >
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <span className="w-12 h-0.5 bg-orange-600"></span>
                        <h2 className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase">Recognitions</h2>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        My <span className="text-transparent stroke-text hover:stroke-orange-600 transition-all duration-300">Achievements</span>
                    </h1>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex justify-start mb-12 overflow-x-auto pb-4 no-scrollbar">
                    <div className="flex bg-[#111] p-1.5 rounded-xl border border-white/5">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveTab(cat);
                                    setShowAll(false);
                                }}
                                className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                                    activeTab === cat ? 'bg-orange-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline Section */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden" animate="visible"
                    key={activeTab + showAll} 
                    className="relative border-l border-gray-800 ml-4 md:ml-8 space-y-12"
                >
                    <AnimatePresence mode='popLayout'>
                        {visibleCertificates.map((cert) => (
                            <motion.div key={cert._id} variants={itemVariants} layout className="relative pl-8 md:pl-12 group">
                                <div className="absolute -left-2.25 top-2 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-orange-600 group-hover:bg-orange-600 transition-all duration-300 shadow-[0_0_10px_rgba(234,88,12,0.5)]"></div>

                                <div className="bg-[#111]/50 border border-gray-800 p-6 md:p-8 rounded-2xl backdrop-blur-sm hover:border-orange-600/50 transition-all duration-500 grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-orange-600/10 rounded-lg text-orange-500"><FiAward size={24} /></div>
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-tight">{cert.title}</h3>
                                                    <p className="text-orange-500 font-medium tracking-wide">{cert.organizer}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 px-4 py-1.5 bg-[#1a1a1a] border border-gray-700 rounded-full text-gray-400 text-xs w-fit">
                                                <FiCalendar className="text-orange-600" /> {cert.date}
                                            </div>
                                        </div>
                                        <p className="text-gray-500 text-sm font-light mt-2 italic leading-relaxed">
                                            * Proudly issued by {cert.organizer} for outstanding performance in the {cert.category} category.
                                        </p>
                                    </div>

                                    {/* Image Side */}
                                    <div 
                                        onClick={() => setSelectedImage(cert.imageUrl)}
                                        className="relative group/img overflow-hidden rounded-xl border border-white/5 h-48 lg:h-full min-h-37.5 cursor-pointer"
                                    >
                                        <img src={cert.imageUrl} alt={cert.title} className="w-full h-full object-cover opacity-60 group-hover/img:opacity-100 group-hover/img:scale-110 transition-all duration-700" />
                                        <div className="absolute inset-0 bg-black/40 group-hover/img:bg-orange-600/20 transition-all duration-500 flex items-center justify-center">
                                            <div className="flex flex-col items-center gap-2 translate-y-5 group-hover/img:translate-y-0 opacity-0 group-hover/img:opacity-100 transition-all duration-500">
                                                <div className="p-3 bg-white text-black rounded-full shadow-2xl"><FiSearch size={20} /></div>
                                                <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">View</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Show More / Show Less Button */}
                {filteredCertificates.length > 3 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-12 ml-4 md:ml-8 pl-8 md:pl-12"
                    >
                        <button 
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center gap-3 px-8 py-4 bg-[#111] border border-gray-800 text-white font-bold uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-orange-600 hover:border-orange-600 transition-all shadow-lg active:scale-95 group"
                        >
                            {showAll ? (
                                <>Show Less <FiChevronUp className="group-hover:-translate-y-1 transition-transform" /></>
                            ) : (
                                <>Show More ({filteredCertificates.length - 3}+) <FiChevronDown className="group-hover:translate-y-1 transition-transform" /></>
                            )}
                        </button>
                    </motion.div>
                )}

                {/* No Data Message */}
                {filteredCertificates.length === 0 && (
                    <div className="ml-12 py-10 text-gray-600 font-bold uppercase tracking-[0.2em] text-sm italic">
                        No {activeTab} records added yet...
                    </div>
                )}
            </div>
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full h-auto"
                            onClick={(e) => e.stopPropagation()} 
                        >
                            <button className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors p-2 bg-white/5 rounded-full" onClick={() => setSelectedImage(null)}>
                                <FiX size={30} />
                            </button>
                            <img src={selectedImage} className="w-full h-auto max-h-[85vh] object-contain rounded-lg border border-white/10 shadow-2xl" alt="Full View" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MyCertificates;