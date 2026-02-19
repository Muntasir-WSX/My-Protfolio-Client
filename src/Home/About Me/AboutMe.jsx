import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <section className="py-10 bg-[#0a0a0a] flex flex-col items-center px-6">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
                About Me
                <div className="w-24 h-1 bg-linear-to-r from-transparent via-orange-500 to-transparent mx-auto mt-2"></div>
            </h2>

            {/* Container Like Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="max-w-5xl w-full bg-[#111111]/50 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-2xl"
            >
                <p className="text-gray-300 text-lg md:text-2xl lg:text-3xl leading-[1.6] font-light tracking-tight">
    I am <span className="text-white font-bold">Muntasir Mahmud</span>, a Full Stack Developer driven by the <br /> 
    art of crafting high-performance and <span className="text-orange-500 font-semibold">visually stunning</span> digital products. <br /><br />

    My evolution started with a deep curiosity for the web, which led me to <br /> 
    master the core fundamentals and eventually specialize in <span className="text-white font-medium italic">React.js</span> <br /> 
    and modern <span className="text-white font-medium">MERN Stack</span> architectures. <br /><br />

    Currently, I focus on building <span className="text-white font-medium">Responsive Admin Ecosystems</span> and architecting <br /> 
    <span className="text-white font-medium">RESTful APIs</span> that bridge the gap between complex logic and <br /> 
    intuitive user-centric design. <br /><br />

    When I’m away from the keyboard, I’m likely <span className="text-orange-500 font-medium italic">Exploring New Horizons</span> as a traveler, <br /> 
    competing in <span className="text-white font-medium">FIFA</span>, or getting lost in the cinematic world of <span className="text-white font-medium">RDR 2</span>. <br /> 
    I believe every great project, like a great game, requires <br /> 
    <span className="text-orange-500 font-medium italic" >Focus and Strategy</span>.
</p>
            </motion.div>
        </section>
    );
};

export default AboutMe;