import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <>
            {/* Google Font Import (Lobster Cursive) */}
            <style jsx="true">{`
                @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
                
                .font-lobster {
                    font-family: 'Lobster', cursive;
                    font-weight: 400;
                    font-style: normal;
                }
            `}</style>

            <div className="flex flex-col items-start cursor-pointer group py-1">
                <div className="flex items-center gap-1">
                    {/* Cursive Name Logo */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                        className="font-lobster text-3xl md:text-4xl text-emerald-800 tracking-wide transition-colors duration-300 flex items-center"
                    >
                        Muntasir <span className="text-black ml-1.5">M.</span>
                    </motion.h1>

                    {/* Green Accent Dot */}
                    <motion.span 
                        animate={{ scale: [1, 1.25, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-2 h-2 rounded-full bg-emerald-600 mt-3 ml-0.5"
                    ></motion.span>
                </div>
                
                {/* Tagline Optimized for White BG */}
                <div className="flex items-center gap-2 -mt-1 ml-0.5">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 20 }}
                        transition={{ duration: 0.8 }}
                        className="h-[1.5px] bg-emerald-600"
                    ></motion.div>
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gray-600 group-hover:text-emerald-600 transition-colors duration-300">
                        Web Solutions Expert
                    </span>
                </div>
            </div>
        </>
    );
};

export default Logo;