import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { HiArrowLeft } from 'react-icons/hi'; 
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router'; 
import Logo from '../SharedComponents/Logo/Logo';
import { AuthContext } from '../AuthProvider/Authprovier';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import useAxiosSecure from '../Hooks/useAxiosSeceure';
import ThemeToggle from '../SharedComponents/ThemeToggle';

const Signin = () => {
    const { googleLogin, logOut } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, trigger, getValues, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        const isValid = await trigger();
        
        if (isValid) {
            const formData = getValues();
            try {
                const result = await googleLogin();
                const loggedInUser = result.user;

                // Admin Email Verification
                if (loggedInUser.email !== "alimuntasir2001@gmail.com") {
                    await logOut(); 
                    toast("Nice try, stranger! But this kingdom has only one King. 👑", {
                        duration: 4000,
                        position: 'top-center',
                        style: {
                            borderRadius: '12px',
                            background: '#18181b', 
                            color: '#10b981',  
                            border: '1px solid #27272a',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        },
                    }); 
                    return;
                }

                // --- JWT Generation & Storage ---
                const userInfoForToken = { email: loggedInUser.email };
                const tokenRes = await axiosPublic.post('/jwt', userInfoForToken);
                
                if (tokenRes.data.token) {
                    localStorage.setItem('access-token', tokenRes.data.token);

                    const userInfo = {
                        name: formData.name,       
                        email: loggedInUser.email,         
                        image: loggedInUser.photoURL,     
                        mobile: formData.mobile,   
                        country: formData.country, 
                        role: 'admin', 
                    };

                    // Save user to DB
                    await axiosSecure.post('/users', userInfo);
                    
                    toast.success("Welcome Back Master 👑", {
                        duration: 4000,
                        position: 'top-center',
                        style: {
                            borderRadius: '12px',
                            background: '#18181b', 
                            color: '#10b981',  
                            border: '1px solid #27272a',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        },
                    }); 
                    navigate('/'); 
                }
                
            } catch (error) {
                console.error("Login Error:", error.message);
                toast.error("Authentication failed!");
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 md:p-10 font-sans relative overflow-hidden">
            {/* Top Left Back Button */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-6 left-6 z-50"
            >
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-xs border border-gray-200 transition-all group-hover:bg-gray-100">
                        <HiArrowLeft className="text-gray-900 text-lg" />
                        <span className="text-gray-900 text-xs font-bold uppercase tracking-wider hidden sm:block">Back to Home</span>
                    </div>
                </Link>
            </motion.div>
            <div className="absolute top-6 right-6 z-50">
                <ThemeToggle compact />
            </div>

            <div className="max-w-4xl w-full grid md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200/80 relative">
                
                {/* Left Side Quote Section */}
                <div className="flex flex-col justify-center p-8 md:p-12 pt-20 bg-emerald-600 text-white relative overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>

                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative z-10"
                    >
                        <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black uppercase tracking-widest bg-emerald-800/60 rounded-full text-emerald-100 border border-emerald-500/30">
                            Wise Man Says
                        </span>
                        <h2 className="text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
                            "Code is like humor. When you have to explain it, it’s bad."
                        </h2>
                        <p className="text-emerald-100 text-sm md:text-base italic font-medium opacity-90">
                            — Cory House
                        </p>
                    </motion.div>
                </div>

                {/* Right Side Form Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                    <div className="md:hidden mb-6 flex justify-center">
                        <Logo />
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 text-center md:text-left"
                    >
                        <h3 className="text-2xl font-black text-gray-900 mb-1 uppercase tracking-tight">Admin Sign In</h3>
                        <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Complete details to continue</p>
                    </motion.div>

                    <div className="space-y-4">
                        <div className="relative">
                            <input 
                                {...register("name", { required: "Name is required" })}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-emerald-600 focus:bg-white outline-none transition-all placeholder:text-gray-400 text-sm"
                                placeholder="Full Name"
                            />
                            {errors.name && <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">{errors.name.message}</p>}
                        </div>

                        <div className="relative">
                            <input 
                                {...register("mobile", { required: "Mobile is required" })}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-emerald-600 focus:bg-white outline-none transition-all placeholder:text-gray-400 text-sm"
                                placeholder="Mobile Number"
                            />
                            {errors.mobile && <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">{errors.mobile.message}</p>}
                        </div>

                        <div className="relative">
                            <input 
                                {...register("country", { required: "Country is required" })}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:border-emerald-600 focus:bg-white outline-none transition-all placeholder:text-gray-400 text-sm"
                                placeholder="Country"
                            />
                            {errors.country && <p className="text-red-500 text-[10px] mt-1 font-bold uppercase">{errors.country.message}</p>}
                        </div>

                        <div className="pt-2">
                            <motion.button 
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleGoogleSignIn}
                                className="w-full py-3.5 bg-black hover:bg-emerald-600 text-white font-bold uppercase text-xs tracking-wider rounded-xl flex items-center justify-center gap-3 shadow-xs transition-all cursor-pointer"
                            >
                                <FcGoogle className="text-xl bg-white rounded-full p-0.5" />
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