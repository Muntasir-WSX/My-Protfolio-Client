import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaFacebookF, FaArrowUp } from 'react-icons/fa';
import Logo from '../Logo/Logo';

const Footer = () => {
    const socialLinks = [
        { icon: <FaGithub />, link: "https://github.com/Muntasir-WSX", name: "GitHub" },
        { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/muntasir-mahmud-aa4291278/", name: "LinkedIn" },
        { icon: <FaInstagram />, link: "https://www.instagram.com/muntasir_wsx/", name: "Instagram" },
        { icon: <FaFacebookF />, link: "https://www.facebook.com/muntasir.mahmud.9843", name: "Facebook" },
    ];

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.08,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <footer className="relative bg-gradient-to-b from-white via-gray-50/50 to-emerald-50/30 border-t border-gray-200/60 text-gray-900 pt-10 pb-6 px-6 md:px-12 overflow-hidden">
            {/* Soft Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-emerald-500/10 blur-2xl pointer-events-none rounded-full" />

            <motion.div 
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center md:items-start justify-between pb-6 border-b border-gray-200/80"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* 1. Brand & AI/Full-Stack Tagline */}
                <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-1.5">
                    <Logo />
                    {/* Compact AI + Full-Stack Tagline */}
                    <p className="text-gray-500 text-[11px] font-medium tracking-wide uppercase max-w-xs text-center md:text-left mt-0.5">
                        Building Intelligent Full-Stack Apps with RAG & LLMs
                    </p>
                    {/* Live Availability Badge */}
                    <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11px] font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Available for new opportunities
                    </div>
                </motion.div>

                {/* 2. Quick Navigation Links */}
                <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
                    <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">Navigation</span>
                    <ul className="flex flex-wrap justify-center gap-4 text-xs font-medium text-gray-600">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <a 
                                    href={link.href} 
                                    className="hover:text-emerald-700 transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* 3. Social Icons */}
                <motion.div variants={itemVariants} className="flex flex-col items-center md:items-end gap-2">
                    <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase">Connect</span>
                    <div className="flex items-center gap-2.5">
                        {socialLinks.map((social) => (
                            <motion.a 
                                key={social.name}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                whileHover={{ scale: 1.08, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-700 hover:text-white hover:bg-emerald-700 hover:border-emerald-700 transition-all duration-300 text-sm shadow-xs hover:shadow-emerald-500/20"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Bottom Copyright & Back To Top */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-7xl mx-auto mt-5 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-[11px] font-medium tracking-wider gap-3"
            >
                <p>© {new Date().getFullYear()} Muntasir Mahmud. All Rights Reserved.</p>

                {/* Smooth Scroll To Top Button */}
                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-600 hover:text-emerald-700 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-xs transition-all duration-200 cursor-pointer"
                >
                    <span>Back to top</span>
                    <FaArrowUp className="text-[10px]" />
                </motion.button>
            </motion.div>
        </footer>
    );
};

export default Footer;