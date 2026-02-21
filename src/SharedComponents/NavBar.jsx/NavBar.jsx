import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router"; 
import { Link as ScrollLink } from "react-scroll"; // স্ক্রল করার জন্য
import { Link as RouterLink } from "react-router"; // পেজ চেঞ্জ করার জন্য
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
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  const handleSignOut = () => {
    logOut().then(() => navigate("/")).catch((err) => console.log(err));
  };

  // Nav Item Component (Code reuse করার জন্য)
  const NavItem = ({ link, mobile = false }) => {
    const commonClass = mobile 
      ? "block px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all border-l-4" 
      : "cursor-pointer hover:text-orange-500 transition-all text-gray-400";

    const activeClass = mobile 
      ? "text-orange-600 border-orange-600 bg-orange-600/5" 
      : "text-orange-600 font-bold";

    // যদি হোম পেজে না থাকে (যেমন অ্যাডমিন পেজে আছে), তাহলে ক্লিক করলে আগে হোমে যাবে
    if (!isHomePage) {
      return (
        <RouterLink 
          to="/" 
          className={`${commonClass} text-gray-400`}
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </RouterLink>
      );
    }

    return (
      <ScrollLink
        to={link.to}
        spy={true}
        smooth={true}
        offset={-100} // Navbar height এর জন্য offset
        duration={500}
        activeClass={activeClass}
        className={`${commonClass} ${!mobile && 'text-gray-400'}`}
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </ScrollLink>
    );
  };

  return (
    <nav className="bg-[#0a0a0a] border-b border-gray-800 text-white px-6 md:px-12 z-50 sticky top-0">
      <div className="flex justify-between items-center h-24">
        <div className="shrink-0 cursor-pointer" onClick={() => navigate("/")}>
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8 font-medium uppercase tracking-widest text-[11px]">
            {links.map((link) => (
              <li key={link.name}>
                <NavItem link={link} />
              </li>
            ))}
            
            {isAdmin && (
              <li>
                <RouterLink
                  to="/muntasir-admin"
                  className="hover:text-orange-500 transition-all text-gray-400"
                >
                  Admin
                </RouterLink>
              </li>
            )}
          </ul>

          {user && (
            <button
              onClick={handleSignOut}
              className="btn btn-sm btn-outline border-orange-600 text-white hover:bg-orange-600 hover:border-orange-600 rounded-full px-8 transition-all uppercase text-[10px] font-bold"
            >
              Sign Out
            </button>
          )}
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-60" />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-75 bg-[#0d0d0d] border-r border-gray-800 z-70 flex flex-col shadow-2xl"
            >
              <div className="px-4 py-6 border-b border-gray-900 scale-75 origin-left">
                <Logo />
              </div>

              <ul className="flex flex-col gap-1 mt-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <NavItem link={link} mobile={true} />
                  </li>
                ))}
                {isAdmin && (
                  <li>
                    <RouterLink 
                      to="/muntasir-admin" 
                      onClick={() => setIsOpen(false)}
                      className="block px-8 py-3 text-sm font-bold uppercase tracking-widest text-gray-400 border-l-4 border-transparent"
                    >
                      Admin
                    </RouterLink>
                  </li>
                )}
              </ul>

              <div className="mt-auto p-6">
                {user && (
                  <button onClick={handleSignOut} className="w-full py-3 bg-white/5 border border-orange-600 text-orange-600 font-bold uppercase text-[10px] tracking-[0.2em] rounded-lg">
                    Sign Out
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;