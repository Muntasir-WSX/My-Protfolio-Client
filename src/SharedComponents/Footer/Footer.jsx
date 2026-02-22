import React from 'react';
import { Link } from 'react-router';
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

    return (
        <footer className="bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-orange-600/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 py-12 md:py-16 relative z-10">
                
                {/* --- Grid Layout: Mobile (1), Tablet (2), Desktop (3) --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-start lg:items-center">
                    
                    {/* 1. Brand Section */}
                    <div className="flex flex-col items-center sm:items-start space-y-4">
                        <div className="scale-75 md:scale-90 origin-center sm:origin-left transition-transform">
                            <Logo />
                        </div>
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] leading-relaxed text-center sm:text-left">
                            Crafting Digital Experiences <br /> 
                            <span className="text-orange-500">With Innovation & Precision</span>
                        </p>
                    </div>

                    {/* 2. Navigation - Tablet e side-e shift hobe */}
                    <div className="flex flex-col items-center sm:items-end lg:items-center">
                        <h4 className="text-white font-black uppercase tracking-tighter text-lg mb-6">Navigation</h4>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-4 sm:flex sm:flex-wrap sm:justify-end lg:justify-center font-bold uppercase text-[10px] tracking-widest text-gray-400">
                            <li><Link to="/projects" className="hover:text-orange-500 transition-all">Projects</Link></li>
                            <li><Link to="/skills" className="hover:text-orange-500 transition-all">Skills</Link></li>
                            <li><Link to="/education" className="hover:text-orange-500 transition-all">Education</Link></li>
                            <li><Link to="/contact" className="hover:text-orange-500 transition-all">Contact</Link></li>
                        </ul>
                    </div>

                    {/* 3. Socials & Scroll - Tablet e full width ba next line e balanced hobe */}
                    <div className="flex flex-col items-center lg:items-end space-y-6 sm:col-span-2 lg:col-span-1 border-t border-white/5 pt-10 lg:border-none lg:pt-0">
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.name}
                                    href={social.link}
                                    className="w-11 h-11 bg-[#111] border border-white/10 text-gray-400 rounded-full flex items-center justify-center text-lg hover:bg-orange-600 hover:text-white transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        
                        <button 
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 bg-[#111] border border-white/10 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-orange-600 transition-all"
                        >
                            Back to Top <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* --- Bottom Bar --- */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600 order-2 sm:order-1">
                        © 2026 Muntasir Mahmud. All Rights Reserved.
                    </p>
                    
                    <div className="flex items-center gap-2 px-4 py-2 bg-orange-600/5 border border-orange-600/10 rounded-full order-1 sm:order-2">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-orange-500">
                            Available for Freelance
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;