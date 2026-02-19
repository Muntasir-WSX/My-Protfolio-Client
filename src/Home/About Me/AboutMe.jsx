import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    // Banner-এর মতো একই Variants
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
        <section className="py-20 bg-[#0a0a0a] flex flex-col items-center px-6 overflow-hidden">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-5xl w-full"
            >
                {/* Title */}
                <motion.div variants={itemVariants} className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                        About <span className="text-orange-600">Me</span>
                    </h2>
                    <div className="w-24 h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent mx-auto mt-4"></div>
                </motion.div>

                {/* Content Container */}
                <motion.div 
                    variants={itemVariants}
                    className="bg-[#111111]/50 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-2xl relative overflow-hidden group"
                >
                    {/* Background Glow inside Card */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-600/10 rounded-full blur-[80px] group-hover:bg-orange-600/20 transition-all duration-700"></div>

                    <p className="text-gray-300 text-lg md:text-2xl lg:text-3xl leading-[1.6] font-light tracking-tight relative z-10">
                        I am <span className="text-white font-bold">Muntasir Mahmud</span>, a Full Stack Developer driven by the <br /> 
                        art of crafting high-performance and <span className="text-orange-500 font-semibold">visually stunning</span> digital products. <br /><br />

                        My evolution started with a deep curiosity for the web, which led me to <br /> 
                        master the core fundamentals and eventually specialize in <span className="text-white font-medium italic underline decoration-orange-600/30">React.js</span> <br /> 
                        and modern <span className="text-white font-medium">MERN Stack</span> architectures. <br /><br />

                        Currently, I focus on building <span className="text-white font-medium">Responsive Admin Ecosystems</span> and architecting <br /> 
                        <span className="text-white font-medium">RESTful APIs</span> that bridge the gap between complex logic and <br /> 
                        intuitive user-centric design. <br /><br />

                        When I’m away from the keyboard, I’m likely <span className="text-orange-500 font-medium italic">Exploring New Horizons</span> as a traveler, <br /> 
                        competing in <span className="text-white font-medium">FIFA</span>, or getting lost in the cinematic world of <span className="text-white font-medium">RDR 2</span>. <br /> 
                        I believe every great project requires <span className="text-orange-500 font-medium italic">Focus and Strategy</span>.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;