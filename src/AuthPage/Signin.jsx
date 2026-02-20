import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { HiArrowLeft } from 'react-icons/hi'; 
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router'; 
import Logo from '../SharedComponents/Logo/Logo';
import { AuthContext } from '../AuthProvider/Authprovier';


const Signin = () => {
    const { googleLogin } = useContext(AuthContext);
    
    const { register, trigger, getValues, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleGoogleSignIn = async () => {
        
        const isValid = await trigger();
        
        if (isValid) {
            const formData = getValues();
            console.log("Collected Local Data:", formData);

            try {
               
                const result = await googleLogin();
                const user = result.user;
                console.log("Firebase User:", user);
                navigate('/'); 
                
            } catch (error) {
                console.error("Login Failed:", error.message);
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 md:p-10 font-sans relative overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-6 left-6 z-50"
            >
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg transition-all group-hover:bg-orange-50">
                        <HiArrowLeft className="text-black text-xl" />
                        <span className="text-black text-xs font-black uppercase tracking-widest hidden sm:block">Back to Home</span>
                    </div>
                </Link>
            </motion.div>

            <div className="max-w-5xl w-full grid md:grid-cols-2 bg-[#111] rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative">
                <div className="flex flex-col justify-center p-8 md:p-12 pt-24 bg-linear-to-br from-orange-600 to-orange-700 text-white relative overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-32 h-32 bg-black/20 rounded-full blur-2xl"></div>

                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative z-10"
                    >
                        <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black uppercase tracking-widest bg-black rounded-full text-white">
                            Wise Man says'
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                            "Code is like humor. When you have to explain it, it’s bad."
                        </h2>
                        <p className="text-orange-200 text-sm md:text-lg italic opacity-80">- Cory House</p>
                    </motion.div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center bg-[#0d0d0d] md:bg-transparent">
                    <div className="md:hidden mb-8 flex justify-center">
                        <Logo />
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 text-center md:text-left"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase tracking-tighter">Join Now</h3>
                        <p className="text-gray-500 text-xs md:text-sm uppercase tracking-wider font-medium">Complete details to continue</p>
                    </motion.div>

                    <div className="space-y-4 md:space-y-6">
                        <div className="relative">
                            <input 
                                {...register("name", { required: "Name is required" })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-orange-600 outline-none transition-all placeholder:text-gray-600"
                                placeholder="Full Name"
                            />
                            {errors.name && <p className="text-orange-500 text-[10px] mt-1 font-bold uppercase">{errors.name.message}</p>}
                        </div>

                        <div className="relative">
                            <input 
                                {...register("mobile", { required: "Mobile is required" })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-orange-600 outline-none transition-all placeholder:text-gray-600"
                                placeholder="Mobile Number"
                            />
                            {errors.mobile && <p className="text-orange-500 text-[10px] mt-1 font-bold uppercase">{errors.mobile.message}</p>}
                        </div>

                        <div className="relative">
                            <input 
                                {...register("country", { required: "Country is required" })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:border-orange-600 outline-none transition-all placeholder:text-gray-600"
                                placeholder="Country"
                            />
                            {errors.country && <p className="text-orange-500 text-[10px] mt-1 font-bold uppercase">{errors.country.message}</p>}
                        </div>

                        <div className="pt-4">
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleGoogleSignIn}
                                className="w-full py-4 bg-white text-black font-black uppercase text-xs tracking-widest rounded-xl flex items-center justify-center gap-3 shadow-xl transition-all active:bg-gray-100"
                            >
                                <FcGoogle className="text-2xl" />
                                Continue with Google
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;