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
        <footer className="bg-orange-600 relative overflow-hidden">
            {/* Aesthetic Background Pattern (Optional) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#fff_1px,transparent_1px)] bg-size-[40px_40px]"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-black">
                    
                    {/* Brand & Logo Section */}
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <div className="bg-black p-3 rounded-2xl inline-block shadow-2xl">
                            <Logo />
                        </div>
                        <p className="text-black/80 text-xs font-bold uppercase tracking-widest text-center md:text-left">
                            Crafting Digital Experiences <br /> 
                            <span className="text-white">With Innovation & Precision</span>
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="flex flex-col items-center">
                        <h4 className="text-black font-black uppercase tracking-tighter text-xl mb-6">Navigation</h4>
                        <ul className="flex flex-wrap justify-center gap-6 font-bold uppercase text-[10px] tracking-widest">
                            <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                            <li><Link to="/skills" className="hover:text-white transition-colors">Skills</Link></li>
                            <li><Link to="/education" className="hover:text-white transition-colors">Education</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Socials & Top Scroll */}
                    <div className="flex flex-col items-center md:items-end space-y-6">
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 bg-black text-orange-600 rounded-full flex items-center justify-center text-xl hover:bg-white hover:text-black transition-all duration-500 shadow-xl hover:-translate-y-2"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        
                        <button 
                            onClick={scrollToTop}
                            className="group flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
                        >
                            Back to Top <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/60">
                        © 2026 Muntasir Mahmud. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full animate-pulse"></span>
                        <p className="text-[10px] font-black uppercase tracking-widest text-black">
                            Available for Freelance & Full-time
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;