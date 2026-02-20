import React from "react";
import { motion } from "framer-motion";
import Logo from "../Logo/Logo";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-9999">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0.4, 1, 0.4],
          scale: [0.95, 1, 0.95],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <div className="absolute inset-0 bg-orange-600/20 blur-[50px] rounded-full"></div>

        <div className="relative z-10">
          <Logo />
        </div>
      </motion.div>

      <div className="mt-8 w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-full h-full bg-linear-to-r from-transparent via-orange-600 to-transparent"
        />
      </div>
    </div>
  );
};

export default Loader;
