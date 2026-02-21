import React from 'react';
import { motion } from 'framer-motion';
import { TbDeer } from 'react-icons/tb'; 

const Logo = () => {
    return (
        <div className="flex flex-col items-start cursor-pointer group">
            <div className="flex items-center gap-2">
                <motion.div 
                    whileHover={{ 
                        scale: 1.1, 
                        rotate: -5,
                    }}
                    className="text-orange-600 text-4xl transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(234,88,12,0.4)]"
                >
                    <TbDeer strokeWidth={1.5} />
                </motion.div>

                <div className="flex items-center">
                    <h1 className="text-3xl font-black tracking-tighter text-white uppercase flex items-center">
                        M
                        <span className="text-orange-600">u</span>
                        n
                        <span className="relative px-3 mx-1 inline-block">
                            <span className="absolute inset-0 bg-orange-600 -skew-x-12 transform group-hover:skew-x-0 transition-transform duration-500 rounded-sm"></span>
                            <span className="relative z-10 text-white italic">TASIR</span>
                        </span>
                        <span className="text-gray-400 group-hover:text-white transition-all duration-300">WSX</span>
                    </h1>
                </div>
            </div>
            
            {/* Tagline with matching Orange accent */}
            <div className="flex items-center gap-2 mt-1 ml-1">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: 24 }}
                    transition={{ duration: 0.8 }}
                    className="h-[1.5px] bg-orange-600"
                ></motion.div>
                <span className="text-[10px] uppercase tracking-[0.45em] font-bold text-gray-500 group-hover:text-orange-500 transition-all duration-300">
                    Web Solutions Expert
                </span>
            </div>
        </div>
    );
};

export default Logo;