import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import useAxiosPublic from '../../Hooks/useAxiosPublic';


const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        const contactMessage = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            date: new Date().toLocaleString(),
            status: 'unread'
        };

        try {
            const res = await axiosPublic.post('/messages', contactMessage);
            if (res.data.insertedId) {
                toast.success("Message Sent! I'll reach out soon.");
                reset();
            }
        } catch (error) {
            toast.error("Something went wrong. Try again!");
        }
    };

    return (
        <section className="bg-[#0a0a0a] min-h-screen py-20 px-6 md:px-16 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px]"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Left Side: Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-12 h-0.5 bg-orange-600"></span>
                            <h2 className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase">Get In Touch</h2>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">
                            Let's <span className="text-transparent stroke-text">Connect</span>
                        </h1>
                        
                        <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                            Have a project in mind or just want to say hi? My inbox is always open.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 bg-[#111] border border-gray-800 rounded-2xl text-orange-500 group-hover:border-orange-600 transition-all">
                                    <FiMail size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Email Me</p>
                                    <a href="mailto:alimuntasir2001@gmail.com" className="text-white text-lg font-medium hover:text-orange-500 transition-colors">
                                        alimuntasir2001@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="p-4 bg-[#111] border border-gray-800 rounded-2xl text-orange-500 group-hover:border-orange-600 transition-all">
                                    <FiPhone size={24} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Call Me</p>
                                    <a href="tel:+8801849643758" className="text-white text-lg font-medium hover:text-orange-500 transition-colors">
                                        +880 1849643758
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#111]/50 border border-gray-800 p-8 md:p-10 rounded-3xl backdrop-blur-sm"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div className="relative">
                                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                <input 
                                    {...register("name", { required: true })}
                                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-12 py-4 text-white focus:border-orange-600 outline-none transition-all placeholder:text-gray-600"
                                    placeholder="YOUR NAME"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="relative">
                                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                    <input 
                                        {...register("email", { required: true })}
                                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-12 py-4 text-white focus:border-orange-600 outline-none transition-all placeholder:text-gray-600"
                                        placeholder="EMAIL ADDRESS"
                                    />
                                </div>
                                <div className="relative">
                                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                    <input 
                                        {...register("phone", { required: true })}
                                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-12 py-4 text-white focus:border-orange-600 outline-none transition-all placeholder:text-gray-600"
                                        placeholder="PHONE NUMBER"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <FiMessageSquare className="absolute left-4 top-6 text-gray-500" />
                                <textarea 
                                    {...register("message", { required: true })}
                                    rows="5"
                                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-12 py-4 text-white focus:border-orange-600 outline-none transition-all placeholder:text-gray-600 resize-none"
                                    placeholder="HOW CAN I HELP YOU?"
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                className="w-full py-4 bg-orange-600 text-white font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(234,88,12,0.2)]"
                            >
                                Send Message <FiSend />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;