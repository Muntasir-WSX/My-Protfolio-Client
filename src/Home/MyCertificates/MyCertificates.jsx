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
        <section id="certificate" className="bg-white border-t border-gray-100 py-16 md:py-24 px-4 md:px-16 text-gray-900 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 text-center lg:text-left"
                >
                    <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">
                        Recognitions
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-1">
                        Certifications & Achievements
                    </h2>
                </motion.div>

                {/* --- Minimal Category Tabs --- */}
                <div className="mb-10">
                    <div className="flex bg-gray-100/80 p-1.5 rounded-xl border border-gray-200/80 w-full md:w-fit overflow-hidden">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveTab(cat);
                                    setShowAll(false);
                                }}
                                className={`flex-1 md:flex-none px-5 md:px-8 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                    activeTab === cat 
                                    ? 'bg-emerald-600 text-white shadow-xs' 
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="relative border-l-2 border-emerald-100 ml-2 md:ml-6 space-y-8">
                    <AnimatePresence mode='popLayout'>
                        {visibleCertificates.map((cert) => (
                            <motion.div 
                                key={cert._id} 
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                layout 
                                className="relative pl-6 md:pl-10 group"
                            >
                                {/* Dot Indicator */}
                                <div className="absolute -left-[9px] top-6 md:top-4 w-4 h-4 rounded-full bg-white border-2 border-emerald-600 group-hover:bg-emerald-600 transition-colors duration-300"></div>

                                <div className="bg-gray-50/60 border border-gray-200/80 p-5 md:p-8 rounded-2xl hover:border-emerald-600/50 hover:bg-white transition-all duration-300">
                                    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
                                        
                                        {/* Info Side */}
                                        <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col justify-between">
                                            <div className="space-y-3">
                                                <div className="flex items-start gap-3">
                                                    <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600 shrink-0 mt-0.5">
                                                        <FiAward size={20} />
                                                    </div>
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
                                                        {cert.title}
                                                    </h3>
                                                </div>
                                                
                                                <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                                                    <span className="text-emerald-700 font-semibold">{cert.organizer}</span>
                                                    <span className="hidden md:block text-gray-300">•</span>
                                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-200 rounded-full text-gray-600 text-xs font-medium">
                                                        <FiCalendar className="text-emerald-600" /> {cert.date}
                                                    </div>
                                                </div>

                                                <p className="text-gray-500 text-xs md:text-sm font-normal italic leading-relaxed pt-1">
                                                    Issued for excellence and completion in {cert.category.toLowerCase()}.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Image Preview Side */}
                                        <div 
                                            onClick={() => setSelectedImage(cert.imageUrl)}
                                            className="lg:col-span-1 order-1 lg:order-2 relative group/img overflow-hidden rounded-xl border border-gray-200 h-40 md:h-full cursor-pointer bg-gray-100"
                                        >
                                            <img 
                                                src={cert.imageUrl} 
                                                alt={cert.title} 
                                                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" 
                                            />
                                            
                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <div className="flex items-center gap-2 bg-white/90 text-gray-900 text-xs font-bold px-3.5 py-2 rounded-full shadow-md backdrop-blur-xs">
                                                    <FiSearch size={14} /> View Certificate
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Show More / Show Less Button */}
                {filteredCertificates.length > 3 && (
                    <div className="mt-8 ml-2 md:ml-6 pl-6 md:pl-10">
                        <button 
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-600 transition-all cursor-pointer shadow-xs"
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

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }} 
                            animate={{ scale: 1, opacity: 1 }} 
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full bg-white rounded-2xl p-2 shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()} 
                        >
                            <button 
                                className="absolute top-4 right-4 bg-gray-900/80 hover:bg-gray-900 text-white p-2 rounded-full transition-colors cursor-pointer z-10" 
                                onClick={() => setSelectedImage(null)}
                            >
                                <FiX size={20} />
                            </button>
                            <img src={selectedImage} className="w-full h-auto max-h-[80vh] object-contain rounded-xl" alt="Certificate Preview" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MyCertificates;