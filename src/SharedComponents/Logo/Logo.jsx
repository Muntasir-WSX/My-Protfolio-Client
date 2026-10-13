import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <>
            {/* Cursive Google Font Import */}
            <style jsx="true">{`
              @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
                .font-cursive {
                    font-family: 'Lobster', cursive;
                    .lobster-regular {
  font-weight: 400;
  font-style: normal;
}

                }
            `}</style>

            <div className="flex flex-col items-start cursor-pointer group py-2">
                <div className="flex items-center gap-1">
                    {/* Cursive Name Logo */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="font-cursive text-4xl md:text-5xl font-normal text-emerald-600 tracking-wide transition-all duration-300  flex items-center"
                    >
                        Muntasir <span className="text-emerald-600 ml-2">M.</span>
                    </motion.h1>

                    {/* Subtle Green Accent Dot */}
                    <motion.span 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-2 h-2 rounded-full bg-emerald-600 mt-4 ml-1"
                    ></motion.span>
                </div>
                
                {/* Tagline with Green Accent */}
                <div className="flex items-center gap-2 -mt-1 ml-1">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 24 }}
                        transition={{ duration: 0.8 }}
                        className="h-[1.5px] bg-emerald-500"
                    ></motion.div>
                    <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-gray-400 group-hover:text-emerald-400 transition-all duration-300">
                        Web Solutions Expert
                    </span>
                </div>
            </div>
        </>
    );
};

export default Logo;