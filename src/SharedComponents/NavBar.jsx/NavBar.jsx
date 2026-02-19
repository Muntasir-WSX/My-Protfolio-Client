import React, { useState } from 'react';
import { NavLink } from 'react-router'; 
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo/Logo';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Education', path: '/education' },
        { name: 'Experience', path: '/experience' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="navbar bg-[#0a0a0a] border-b border-gray-800 text-white px-4 md:px-8 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
            <div className="navbar-start">
                <button 
                    onClick={() => setIsOpen(true)} 
                    className="btn btn-ghost lg:hidden text-orange-600 hover:bg-orange-600/10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M12 12h8m-8 6h16" />
                    </svg>
                </button>
                <Logo />
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6 font-medium uppercase tracking-widest text-xs">
                    {links.map((link) => (
                        <li key={link.name}>
                            <NavLink 
                                to={link.path} 
                                className={({ isActive }) => 
                                    isActive 
                                    ? "text-orange-600 font-bold border-b border-orange-600 rounded-none bg-transparent" 
                                    : "hover:text-orange-500 transition-all bg-transparent"
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="navbar-end hidden lg:flex">
                <button className="btn btn-sm btn-outline border-orange-600 text-white hover:bg-orange-600 hover:border-orange-600 rounded-full px-8 transition-all shadow-[0_0_15px_rgba(234,88,12,0.1)]">
                    Login
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60]" 
                        />
                        
                        <motion.div 
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 h-full w-[85%] max-w-[350px] bg-[#0d0d0d] border-r border-gray-800 z-[70] p-8 shadow-2xl flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-16">
                                <Logo />
                                <button onClick={() => setIsOpen(false)} className="text-orange-600 hover:rotate-90 transition-transform duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            
                            <ul className="flex flex-col gap-6 text-xl font-bold tracking-tight uppercase">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <NavLink 
                                            to={link.path} 
                                            onClick={() => setIsOpen(false)}
                                            
                                        >
                                            {({ isActive }) => (
                                                <span className={`flex items-center gap-3 transition-colors ${isActive ? "text-orange-600" : "text-gray-400"}`}>
                                                    {isActive && <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>}
                                                    {link.name}
                                                </span>
                                            )}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pb-10">
                                <button className="btn bg-orange-600 hover:bg-orange-700 border-none text-white w-full flex items-center justify-center gap-3 py-4 text-lg font-bold rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Login
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavBar;