import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router"; 
import { Link as ScrollLink } from "react-scroll"; 
import { Link as RouterLink } from "react-router"; 
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Logo/Logo";
import { AuthContext } from "../../AuthProvider/Authprovier";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isAdmin = user && user.email === "alimuntasir2001@gmail.com";
  const isHomePage = location.pathname === "/";

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Certificate", to: "certificate" },
    { name: "Contact", to: "contact" },
  ];

  const handleSignOut = () => {
    logOut().then(() => {
        setIsOpen(false);
        navigate("/");
    }).catch((err) => console.log(err));
  };

  // ডেক্সটপ ও মোবাইল এর জন্য কমন আইটেম রেন্ডারার
  const NavItem = ({ link, mobile = false }) => {
    const baseClass = mobile 
      ? "block w-full px-8 py-4 text-[13px] font-bold uppercase tracking-[0.2em] transition-all cursor-pointer text-gray-400 hover:text-orange-500" 
      : "cursor-pointer transition-all uppercase font-medium tracking-widest text-[11px] text-gray-400 hover:text-orange-500";

    // যদি হোম পেজে না থাকি, সব লিঙ্ককে হোম পেজে পাঠিয়ে দিবে
    if (!isHomePage) {
      return (
        <RouterLink to="/" className={baseClass} onClick={() => setIsOpen(false)}>
          {link.name}
        </RouterLink>
      );
    }

    // হোম পেজে থাকলে স্মুথ স্ক্রল করবে
    return (
      <ScrollLink
        to={link.to}
        spy={true}
        smooth={true}
        offset={-100} 
        duration={500}
        activeClass="active" 
        className={baseClass}
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </ScrollLink>
    );
  };

  return (
    <nav className="bg-[#0a0a0a] border-b border-gray-800 text-white px-6 md:px-12 z-[100] sticky top-0">
      <div className="container mx-auto flex justify-between items-center h-24">
        {/* Logo */}
        <div className="shrink-0 cursor-pointer" onClick={() => navigate("/")}>
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8 items-center">
            {links.map((link) => (
              <li key={link.name}><NavItem link={link} /></li>
            ))}
            
            {/* Admin Route Fix */}
            {isAdmin && (
              <li>
                <RouterLink 
                  to="muntasir-admin" 
                  className={`text-gray-400 hover:text-orange-500 uppercase font-medium tracking-widest text-[11px] transition-all cursor-pointer ${location.pathname === '/muntasir-admin' ? 'active' : ''}`}
                >
                  Admin
                </RouterLink>
              </li>
            )}
          </ul>

          {/* Sign Out Button Fix */}
          {user && (
            <button 
              onClick={handleSignOut} 
              className="btn btn-sm btn-outline border-orange-600 text-white hover:bg-orange-600 rounded-full px-8 transition-all uppercase text-[10px] font-bold cursor-pointer"
            >
              Sign Out
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} className="flex flex-col gap-1.5 items-end p-2 cursor-pointer relative z-[110]">
            <span className="w-8 h-0.5 bg-orange-600"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-8 h-0.5 bg-orange-600"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[120]">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
              onClick={() => setIsOpen(false)} 
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer" 
            />

            <motion.div
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 left-0 h-full w-70 bg-[#0d0d0d] border-r border-gray-800 flex flex-col z-[130]"
            >
              <div className="px-8 py-8 border-b border-gray-900">
                <Logo />
              </div>

              <ul className="flex flex-col mt-4 overflow-y-auto">
                {links.map((link) => (
                  <li key={link.name} className="w-full">
                    <NavItem link={link} mobile={true} />
                  </li>
                ))}
                
                {/* Admin in Mobile Drawer */}
                {isAdmin && (
                  <li>
                    <RouterLink 
                      to="muntasir-admin" 
                      onClick={() => setIsOpen(false)}
                      className={`block w-full px-8 py-4 text-[13px] font-bold uppercase tracking-[0.2em] transition-all text-gray-400 hover:text-orange-500 ${location.pathname === '/muntasir-admin' ? 'active' : ''}`}
                    >
                      Admin
                    </RouterLink>
                  </li>
                )}
              </ul>

              {/* Mobile Sign Out */}
              <div className="mt-auto p-8 border-t border-gray-900">
                {user && (
                  <button 
                    onClick={handleSignOut} 
                    className="w-full py-4 bg-orange-600/10 border border-orange-600 text-orange-600 font-bold uppercase text-[11px] tracking-widest rounded-xl hover:bg-orange-600 hover:text-white transition-all"
                  >
                    Sign Out
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;