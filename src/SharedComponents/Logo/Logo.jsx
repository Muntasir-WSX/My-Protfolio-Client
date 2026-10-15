import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <div className="flex flex-col items-start cursor-pointer group py-1 select-none">
            {/* Google Font Direct Import */}
            <link 
                href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" 
                rel="stylesheet" 
            />

            <div className="flex items-center gap-1">
                {/* Main Name Logo */}
                <motion.h1 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="text-3xl md:text-4xl cursor-pointer tracking-wide flex items-center"
                    style={{ fontFamily: "'Lobster', cursive" }}
                >
                    {/* Guaranteed Emerald Color via Inline Style */}
                    <span style={{ color: '#10b981' }} className="hover:opacity-90 transition-opacity">
                        Muntasir
                    </span>

                    {/* Dark/Light Adaptive Name Text */}
                    <span className="text-slate-900 dark:text-slate-100 ml-1.5 transition-colors duration-300">
                        M.
                    </span>
                </motion.h1>

                {/* Animated Green Accent Dot */}
                <motion.span 
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-2.5 h-2.5 rounded-full mt-2.5 ml-0.5 inline-block"
                    style={{ backgroundColor: '#10b981' }}
                ></motion.span>
            </div>
            
            {/* Tagline Section */}
            <div className="flex items-center gap-2 -mt-1 ml-0.5">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: 20 }}
                    transition={{ duration: 0.8 }}
                    className="h-[1.5px]"
                    style={{ backgroundColor: '#10b981' }}
                ></motion.div>
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-600 dark:text-slate-300 group-hover:text-emerald-500 transition-colors duration-300">
                    Web Solutions Expert
                </span>
            </div>
        </div>
    );
};

export default Logo;