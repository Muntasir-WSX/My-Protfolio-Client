import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { FiMail, FiPhone, FiMessageSquare, FiChevronLeft, FiChevronRight, FiClock } from 'react-icons/fi';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Loader from '../SharedComponents/Loader/Loader';

const ClientMessages = () => {
    const axiosPublic = useAxiosPublic();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8; 
    const { data: countData } = useQuery({
        queryKey: ['messagesCount'],
        queryFn: async () => {
            const res = await axiosPublic.get('/messagesCount');
            return res.data;
        }
    });

    
    const { data: messages = [], isLoading } = useQuery({
        queryKey: ['messages', currentPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/messages?page=${currentPage}&size=${itemsPerPage}`);
            return res.data;
        }
    });

    const totalMessages = countData?.count || 0;
    const numberOfPages = Math.ceil(totalMessages / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    if (isLoading) return <Loader />;

    return (
        <div className="bg-white min-h-screen p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="max-w-6xl mx-auto">
                {/* Header Style matching ManageCertificates */}
                <header className="mb-10 text-center">
                    <div className="flex justify-center mb-2">
                        <FiMessageSquare className="text-4xl text-orange-600" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Inbound Queries</h2>
                    <p className="text-gray-500 text-sm mt-2">Manage and respond to your client communications</p>
                </header>

                {/* Messages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {messages.map((msg) => (
                        <div key={msg._id} className="group bg-gray-50 border border-gray-100 p-6 rounded-2xl hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-black text-gray-900 uppercase tracking-tight text-lg">{msg.name}</h3>
                                    <div className="flex flex-col gap-1 mt-2">
                                        <a href={`mailto:${msg.email}`} className="flex items-center gap-2 text-xs text-gray-500 hover:text-orange-600 transition-colors">
                                            <FiMail className="text-orange-600" /> {msg.email}
                                        </a>
                                        <a href={`tel:${msg.phone}`} className="flex items-center gap-2 text-xs text-gray-500 hover:text-orange-600 transition-colors">
                                            <FiPhone className="text-orange-600" /> {msg.phone}
                                        </a>
                                    </div>
                                </div>
                                <div className="text-[10px] font-bold text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-100 flex items-center gap-1 uppercase">
                                    <FiClock /> {msg.date?.split(',')[0]}
                                </div>
                            </div>
                            
                            <div className="bg-white border border-gray-100 p-4 rounded-xl relative">
                                <p className="text-gray-600 text-sm leading-relaxed italic">
                                    "{msg.message}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {messages.length === 0 && (
                    <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                        <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">No messages found in the database</p>
                    </div>
                )}

                {/* Pagination Controls Style */}
                {numberOfPages > 1 && (
                    <div className="mt-12 flex justify-center items-center gap-3">
                        <button 
                            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                            disabled={currentPage === 0}
                            className="p-3 bg-black text-white rounded-xl disabled:bg-gray-200 disabled:text-gray-400 hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                        >
                            <FiChevronLeft size={20} />
                        </button>

                        <div className="flex gap-2">
                            {pages.map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    className={`w-12 h-12 rounded-xl text-sm font-black transition-all border ${
                                        currentPage === page 
                                        ? 'bg-orange-600 border-orange-600 text-white shadow-md' 
                                        : 'bg-white border-gray-200 text-gray-900 hover:border-orange-600'
                                    }`}
                                >
                                    {page + 1}
                                </button>
                            ))}
                        </div>

                        <button 
                            onClick={() => setCurrentPage(prev => Math.min(numberOfPages - 1, prev + 1))}
                            disabled={currentPage === numberOfPages - 1}
                            className="p-3 bg-black text-white rounded-xl disabled:bg-gray-200 disabled:text-gray-400 hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                        >
                            <FiChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClientMessages;