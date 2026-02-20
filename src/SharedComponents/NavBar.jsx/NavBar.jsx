import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router"; 
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Logo/Logo";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const links = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
    { name: "Admin", path: "/muntasir-admin", adminOnly: true },
  ];

  return (
    <nav className="bg-[#0a0a0a] border-b border-gray-800 text-white px-6 md:px-12 z-50 relative">
      <div className="flex justify-between items-center h-24">
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8 font-medium uppercase tracking-widest text-[11px]">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-orange-600 font-bold" : "hover:text-orange-500 transition-all text-gray-400"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => navigate("/signin")} 
            className="btn btn-sm btn-outline border-orange-600 text-white hover:bg-orange-600 hover:border-orange-600 rounded-full px-8 transition-all"
          >
            Sign In
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} className="group flex flex-col gap-1.5 items-end p-2">
            <span className="w-8 h-0.5 bg-orange-600 group-hover:w-6 transition-all"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-8 h-0.5 bg-orange-600 group-hover:w-4 transition-all"></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-60"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-75 bg-[#0d0d0d] border-r border-gray-800 z-70 flex flex-col shadow-2xl"
            >
              <div className="flex items-center px-2 py-5 border-b border-gray-900">
                <div className="scale-70 origin-center shrink-0">
                  <Logo />
                </div>
              </div>

              <ul className="flex flex-col gap-1 mt-4">
                {links.map((link, index) => (
                  <motion.li key={link.name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * index }}>
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `block px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all border-l-4 ${isActive ? "text-orange-600 border-orange-600 bg-orange-600/5" : "text-gray-400 border-transparent hover:text-white"}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto p-6">
            
               <button 
  onClick={() => { navigate("/signin"); setIsOpen(false); }}
  className="w-full py-3 bg-orange-600 text-white font-bold uppercase text-[10px] tracking-[0.2em] rounded-lg shadow-lg shadow-orange-600/20 
             hover:bg-orange-500 hover:shadow-orange-600/40 
             active:scale-95 active:bg-orange-700
             transition-all duration-200 ease-in-out transform"
>
  SignIn Now
</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;