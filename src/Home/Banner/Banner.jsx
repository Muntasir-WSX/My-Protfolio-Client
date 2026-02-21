import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
// react-scroll থেকে Link ইমপোর্ট করতে হবে (নামটা ক্ল্যাশে এড়াতে alias ইউজ করবি)
import { Link as ScrollLink } from "react-scroll"; 

const Banner = () => {
    const socialLinks = [
        { icon: <FaGithub />, link: "https://github.com/Muntasir-WSX", name: "GitHub" },
        { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/muntasir-mahmud-aa4291278/", name: "LinkedIn" },
        { icon: <FaInstagram />, link: "https://www.instagram.com/muntasir_wsx/", name: "Instagram" },
        { icon: <FaFacebookF />, link: "https://www.facebook.com/muntasir.mahmud.9843", name: "Facebook" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, 
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden px-6 md:px-16 py-12">
            
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[100px]"></div>
            
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 items-center z-10">
                
                {/* Image Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, filter: "grayscale(100%)" }}
                    animate={{ opacity: 1, scale: 1, filter: "grayscale(20%)" }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative order-1 lg:order-2 flex justify-center items-center h-full -top-2 lg:-top-5 z-0"
                >
                    <div className="absolute w-72 h-72 bg-orange-600/20 rounded-full blur-[100px] z-0"></div>
                    
                    <div className="relative w-full max-w-70 md:max-w-95 lg:max-w-112.5">
                        <img 
                            src="https://res.cloudinary.com/dnk0bvpym/image/upload/v1771535767/low-qual_w0lpbi.jpg"
                            alt="Muntasir" 
                            className="w-full h-95 md:h-125 lg:h-145 object-cover object-[center_15%] transition-all duration-700 rounded-2xl shadow-2xl"
                        />
                        
                        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none"></div>
                        
                        <motion.div 
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                            className="absolute bottom-10 -right-4 bg-[#111]/90 border border-gray-800 p-3 rounded-lg backdrop-blur-md shadow-2xl z-10"
                        >
                            <p className="text-orange-600 font-bold text-[10px] uppercase tracking-tighter">Experience</p>
                            <p className="text-white font-black text-xl">2+ Years</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Text Content Section */}
                <div className="order-2 lg:order-1 relative z-20 -mt-12 lg:mt-0 text-center lg:text-left">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3">
                                <span className="w-10 h-0.5 bg-orange-600"></span>
                                <h2 className="text-orange-500 font-bold tracking-[0.2em] text-xs uppercase">
                                    Available for Projects
                                </h2>
                            </motion.div>
                            
                            <motion.h1 
                                variants={itemVariants}
                                className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] uppercase tracking-tighter"
                            >
                                Building <br />
                                <span className="text-transparent stroke-text">Scalable</span> <br />
                                Solutions
                            </motion.h1>
                        </div>
                        
                        <motion.p 
                            variants={itemVariants}
                            className="text-gray-300 max-w-lg mx-auto lg:mx-0 text-lg md:text-xl leading-relaxed font-light"
                        >
                            Transforming your ideas into cutting-edge web solutions. 
                            I craft high-performance websites and applications.
                        </motion.p>

                        <motion.div 
                            variants={itemVariants}
                            className="flex flex-wrap justify-center lg:justify-start gap-5 pt-2"
                        >
                            <button className="group btn bg-orange-600 hover:bg-orange-700 border-none text-white px-8 h-14 rounded-full font-bold flex items-center gap-2 transition-all duration-300">
                               Download Resume
                                <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform" />
                            </button>
                            
                            {/* ফিক্সড বাটন: এখানে ScrollLink ইউজ করা হয়েছে */}
                            <ScrollLink 
                                to="contact" 
                                smooth={true} 
                                duration={800} 
                                offset={-80}
                                className="btn btn-outline border-gray-700 text-white hover:bg-white hover:text-black h-14 rounded-full px-8 transition-all duration-300 flex items-center justify-center cursor-pointer"
                            >
                                Get In Touch
                            </ScrollLink>
                        </motion.div>

                        <motion.div 
                            variants={itemVariants}
                            className="flex items-center justify-center lg:justify-start gap-6 pt-4"
                        >
                            {socialLinks.map((item, index) => (
                                <motion.a 
                                    whileHover={{ y: -5, scale: 1.1, color: "#ea580c" }}
                                    whileTap={{ scale: 0.9 }}
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    className="text-gray-500 text-2xl transition-colors duration-300"
                                >
                                    {item.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <style jsx="true">{`
                .stroke-text {
                    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
                }
                .stroke-text:hover {
                    -webkit-text-stroke: 1.5px #ea580c;
                    transition: 0.5s;
                }
                @media (max-width: 768px) {
                    .stroke-text {
                        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
                    }
                }
            `}</style>
        </section>
    );
};

export default Banner;