import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: { 
            opacity: 1, y: 0, filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <section className="py-24 bg-[#0a0a0a] px-6 md:px-16 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-[120px] -translate-y-1/2 z-0"></div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-7xl mx-auto relative z-10"
            >
                {/* --- Updated Header Section (Left Aligned) --- */}
                <motion.div variants={itemVariants} className="mb-16 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                        <span className="w-12 h-0.5 bg-orange-600"></span>
                        <h2 className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase">
                            Know More
                        </h2>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        About <span className="text-transparent stroke-text hover:stroke-orange-600 transition-all duration-300">
    Me
</span>
                    </h1>
                </motion.div>

                {/* Content Container */}
                <motion.div 
                    variants={itemVariants}
                    className="bg-[#111111]/50 border border-white/10 p-8 md:p-12 lg:p-16 rounded-3xl backdrop-blur-sm shadow-2xl relative overflow-hidden group"
                >
                    {/* Background Glow inside Card */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px] group-hover:bg-orange-600/20 transition-all duration-700"></div>

                    <div className="text-gray-300 text-lg md:text-2xl lg:text-3xl leading-[1.6] font-light tracking-tight relative z-10 space-y-8">
                        <p>
                            I am <span className="text-white font-bold">Muntasir Mahmud</span>, a Full Stack Developer driven by the art of crafting high-performance and <span className="text-orange-500 font-semibold italic">visually stunning</span> digital products. My journey is defined by a relentless pursuit of turning complex problems into elegant, scalable solutions.
                        </p>

                        <p>
                            With a strong foundation in <span className="text-white font-medium underline decoration-orange-600/40 underline-offset-8">MERN Stack</span> and modern architectures, I specialize in building ecosystems where seamless <span className="text-white font-medium">User Experience</span> meets robust backend logic. I don't just write code; I architect experiences.
                        </p>

                        <p className="text-base md:text-xl lg:text-2xl text-gray-400 border-l-2 border-orange-600 pl-6 py-2 italic">
                            "Beyond the terminal, I’m a traveler seeking new perspectives, a strategist on the virtual pitch of <span className="text-white">FIFA</span>, and an explorer in the vast world of <span className="text-white">Red Dead Redemption 2</span>. I believe a great developer needs the strategy of a gamer and the soul of an explorer."
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Stroke Text Style */}
            <style jsx="true">{`
                .stroke-text-about {
                    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
                }
                @media (max-width: 768px) {
                    .stroke-text-about {
                        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutMe;