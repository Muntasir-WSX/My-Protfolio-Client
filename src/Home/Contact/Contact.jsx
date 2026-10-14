import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        const contactMessage = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            date: new Date().toLocaleString(),
            status: 'unread'
        };

        try {
            // Post to backend API which triggers Nodemailer / EmailJS
            const res = await axiosPublic.post('/messages', contactMessage);
            if (res.data.insertedId || res.status === 200) {
                toast.success("Message Sent! I'll reach out soon.");
                reset();
            }
        } catch (error) {
            toast.error("Failed to send message. Please try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-transparent border-t border-gray-100 py-16 md:py-24 px-4 md:px-16 text-gray-900 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center lg:text-left"
                >
                    <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-1">
                        Let's Connect
                    </h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Left Side: Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed font-normal">
                            Have a project in mind, a opportunity to discuss, or just want to say hi? Feel free to reach out directly.
                        </p>

                        <div className="space-y-5">
                            {/* Email Card */}
                            <div className="flex items-center gap-4 p-4 bg-gray-50/70 border border-gray-200/80 rounded-2xl">
                                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                                    <FiMail size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Email Me</p>
                                    <a href="mailto:alimuntasir2001@gmail.com" className="text-gray-900 font-semibold text-sm md:text-base hover:text-emerald-600 transition-colors">
                                        alimuntasir2001@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="flex items-center gap-4 p-4 bg-gray-50/70 border border-gray-200/80 rounded-2xl">
                                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                                    <FiPhone size={20} />
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Call Me</p>
                                    <a href="tel:+8801849643758" className="text-gray-900 font-semibold text-sm md:text-base hover:text-emerald-600 transition-colors">
                                        +880 1849643758
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-7 bg-gray-50/60 border border-gray-200/80 p-6 md:p-8 rounded-2xl"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* Name Input */}
                            <div className="relative">
                                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                <input 
                                    {...register("name", { required: true })}
                                    className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-gray-900 focus:border-emerald-600 outline-none transition-colors text-sm placeholder:text-gray-400"
                                    placeholder="Your Full Name"
                                />
                                {errors.name && <span className="text-xs text-red-500 mt-1 block">Name is required</span>}
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="relative">
                                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input 
                                        type="email"
                                        {...register("email", { required: true })}
                                        className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-gray-900 focus:border-emerald-600 outline-none transition-colors text-sm placeholder:text-gray-400"
                                        placeholder="Email Address"
                                    />
                                    {errors.email && <span className="text-xs text-red-500 mt-1 block">Email is required</span>}
                                </div>
                                <div className="relative">
                                    <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input 
                                        {...register("phone", { required: true })}
                                        className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-gray-900 focus:border-emerald-600 outline-none transition-colors text-sm placeholder:text-gray-400"
                                        placeholder="Phone Number"
                                    />
                                </div>
                            </div>

                            {/* Message Textarea */}
                            <div className="relative">
                                <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                                <textarea 
                                    {...register("message", { required: true })}
                                    rows="4"
                                    className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 text-gray-900 focus:border-emerald-600 outline-none transition-colors resize-none text-sm placeholder:text-gray-400"
                                    placeholder="How can I help you?"
                                ></textarea>
                                {errors.message && <span className="text-xs text-red-500 mt-1 block">Message is required</span>}
                            </div>

                            {/* Submit Button (Half Rounded) */}
                            <button 
                                type="submit"
                                disabled={loading}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer shadow-xs disabled:opacity-70"
                            >
                                {loading ? "Sending..." : "Send Message"}
                                <FiSend />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;