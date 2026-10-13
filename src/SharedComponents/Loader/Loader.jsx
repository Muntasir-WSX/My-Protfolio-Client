import React from "react";
import { motion } from "framer-motion";
import Logo from "../Logo/Logo";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [0.98, 1, 0.98],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
      </motion.div>

      {/* Animated "Loading..." Text */}
      <motion.p
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mt-6 text-[10px] uppercase tracking-[0.35em] font-semibold text-emerald-500/80"
      >
        Loading...
      </motion.p>

      {/* Subtle Progress Bar */}
      <div className="mt-3 w-40 h-[1.5px] bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
        />
      </div>
    </div>
  );
};

export default Loader;