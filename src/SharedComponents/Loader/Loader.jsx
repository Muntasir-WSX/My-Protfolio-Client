import React from "react";
import { motion } from "framer-motion";
import Logo from "../Logo/Logo";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-xs flex flex-col items-center justify-center z-50">
      
      {/* Animated Logo Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [0.98, 1, 0.98],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex items-center justify-center p-4"
      >
        <Logo />
      </motion.div>

      {/* Animated "Loading..." Text */}
      <motion.p
        initial={{ opacity: 0.4 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mt-4 text-[11px] uppercase tracking-[0.35em] font-extrabold text-emerald-600"
      >
        Loading...
      </motion.p>

      {/* Emerald Progress Bar */}
      <div className="mt-3 w-40 h-[2px] bg-emerald-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-transparent via-emerald-600 to-transparent"
        />
      </div>
    </div>
  );
};

export default Loader;