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
                duration: 0.6,
                staggerChildren: 0.1,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    return (
        <footer className="bg-white border-t border-gray-100 text-gray-900 py-12 px-6 md:px-12 overflow-hidden">
            <motion.div 
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Brand & Tagline */}
                <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-2">
                    <Logo />
                    <p className="text-gray-500 text-xs font-medium tracking-wider uppercase mt-1">
                        Crafting Digital Experiences
                    </p>
                </motion.div>

                {/* Social Icons (Half Rounded / Rounded-xl) */}
                <motion.div variants={itemVariants} className="flex items-center gap-3">
                    {socialLinks.map((social) => (
                        <motion.a 
                            key={social.name}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:text-white hover:bg-emerald-800 hover:border-black transition-all duration-300 text-base shadow-xs"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>

            {/* Bottom Copyright */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-[11px] font-medium tracking-wider uppercase gap-4"
            >
                <p>© {new Date().getFullYear()} Muntasir Mahmud. All Rights Reserved.</p>
            </motion.div>
        </footer>
    );
};

export default Footer;