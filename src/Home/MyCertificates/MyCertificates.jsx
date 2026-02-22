import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiCalendar, FiX, FiSearch, FiChevronDown, FiChevronUp } from 'react-icons/fi';
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

    return (
        <section id="certificates" className="bg-[#0a0a0a] py-16 md:py-24 px-4 md:px-16 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px]"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16 text-center lg:text-left"
                >
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <span className="w-12 h-0.5 bg-orange-600"></span>
                        <h2 className="text-orange-500 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase">Recognitions</h2>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        My <span className="text-transparent stroke-text hover:stroke-orange-600 transition-all duration-300">Achievements</span>
                    </h1>
                </motion.div>

                {/* --- IMPROVED Category Tabs (Responsive) --- */}
                <div className="mb-12">
                    <div className="flex bg-[#111] p-1 md:p-1.5 rounded-xl border border-white/5 w-full md:w-fit overflow-hidden">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveTab(cat);
                                    setShowAll(false);
                                }}
                                className={`flex-1 md:flex-none px-4 md:px-8 py-3 rounded-lg text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                                    activeTab === cat 
                                    ? 'bg-orange-600 text-white shadow-[0_5px_15px_rgba(234,88,12,0.3)]' 
                                    : 'text-gray-500 hover:text-white'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="relative border-l border-gray-800 ml-2 md:ml-8 space-y-8 md:space-y-12">
                    <AnimatePresence mode='popLayout'>
                        {visibleCertificates.map((cert) => (
                            <motion.div 
                                key={cert._id} 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                layout 
                                className="relative pl-6 md:pl-12 group"
                            >
                                {/* Dot Indicator */}
                                <div className="absolute -left-2.25 top-6 md:top-2 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-orange-600 group-hover:bg-orange-600 transition-all duration-300"></div>

                                <div className="bg-[#111]/50 border border-gray-800 p-4 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm hover:border-orange-600/50 transition-all duration-500">
                                    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
                                        
                                        {/* Info Side */}
                                        <div className="lg:col-span-2 order-2 lg:order-1">
                                            <div className="flex flex-col gap-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2.5 bg-orange-600/10 rounded-lg text-orange-500 shrink-0">
                                                        <FiAward size={20} />
                                                    </div>
                                                    <h3 className="text-lg md:text-2xl font-bold text-white uppercase tracking-tight leading-tight">
                                                        {cert.title}
                                                    </h3>
                                                </div>
                                                
                                                <div className="flex flex-wrap items-center gap-3 text-sm">
                                                    <span className="text-orange-500 font-semibold">{cert.organizer}</span>
                                                    <span className="hidden md:block text-gray-700">|</span>
                                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/5 rounded-full text-gray-400 text-[10px] md:text-xs">
                                                        <FiCalendar className="text-orange-600" /> {cert.date}
                                                    </div>
                                                </div>

                                                <p className="text-gray-500 text-xs md:text-sm font-light mt-2 italic leading-relaxed">
                                                    Proudly issued for excellence in {cert.category}.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Image Side (Mobile-Focused) */}
                                        <div 
                                            onClick={() => setSelectedImage(cert.imageUrl)}
                                            className="lg:col-span-1 order-1 lg:order-2 relative group/img overflow-hidden rounded-xl border border-white/10 h-44 md:h-full cursor-pointer"
                                        >
                                            <img 
                                                src={cert.imageUrl} 
                                                alt={cert.title} 
                                                className="w-full h-full object-cover opacity-80 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-700" 
                                            />
                                            {/* Mobile Overlay Hint */}
                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent md:bg-black/40 flex items-center justify-center">
                                                <div className="flex flex-col items-center gap-2 md:translate-y-5 md:group-hover/img:translate-y-0 md:opacity-0 md:group-hover/img:opacity-100 transition-all duration-500">
                                                    <div className="p-3 bg-white text-black rounded-full"><FiSearch size={18} /></div>
                                                    <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-black/50 px-3 py-1 rounded-full backdrop-blur-md">View Certificate</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More Button */}
                {filteredCertificates.length > 3 && (
                    <div className="mt-10 md:mt-12 ml-2 md:ml-8 pl-6 md:pl-12">
                        <button 
                            onClick={() => setShowAll(!showAll)}
                            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#111] border border-gray-800 text-white font-bold uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-orange-600 transition-all shadow-lg active:scale-95 group"
                        >
                            {showAll ? (
                                <>Show Less <FiChevronUp /></>
                            ) : (
                                <>Show More ({filteredCertificates.length - 3}+) <FiChevronDown /></>
                            )}
                        </button>
                    </div>
                )}
            </div>

            {/* Fullscreen Image Modal - Handled exit and scale better */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 flex items-center justify-center p-2 md:p-4 bg-black/95 backdrop-blur-md"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()} 
                        >
                            <button className="absolute -top-14 right-0 text-white p-3 hover:text-orange-500" onClick={() => setSelectedImage(null)}>
                                <FiX size={32} />
                            </button>
                            <img src={selectedImage} className="w-full h-auto max-h-[80vh] md:max-h-[85vh] object-contain rounded-lg shadow-2xl" alt="Full View" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MyCertificates;