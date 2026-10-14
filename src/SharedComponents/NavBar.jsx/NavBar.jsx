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

  const googleDriveResumeUrl = "https://drive.google.com/file/d/1Y829OxYy0flZtnRjDRiqvCwnoMKA7S98/view?usp=sharing";

  const links = [
    { name: "Home", to: "home" },
    { name: "About Me", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Certificate", to: "certificate" },
    { name: "Contact Me", to: "contact" },
  ];

  const handleSignOut = () => {
    logOut().then(() => {
        setIsOpen(false);
        navigate("/");
    }).catch((err) => console.log(err));
  };

  const NavItem = ({ link, mobile = false }) => {
    const baseClass = mobile 
      ? "block w-full px-8 py-4 text-sm font-semibold transition-all cursor-pointer text-gray-700 hover:text-emerald-600 hover:bg-gray-50" 
      : "cursor-pointer transition-colors text-sm font-semibold text-gray-700 hover:text-emerald-600 px-1 py-2";

    if (!isHomePage) {
      return (
        <RouterLink to="/" className={baseClass} onClick={() => setIsOpen(false)}>
          {link.name}
        </RouterLink>
      );
    }
    return (
      <ScrollLink
        to={link.to}
        spy={true}
        smooth={true}
        offset={-100} 
        duration={500}
        activeClass="text-emerald-600 font-bold border-b-2 border-emerald-600" 
        className={baseClass}
        onClick={() => setIsOpen(false)}
      >
        {link.name}
      </ScrollLink>
    );
  };

  return (
    <nav className="bg-white border-b border-gray-100 text-gray-900 w-full sticky top-0 z-[100] shadow-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-24">
        
        {/* Logo Section */}
        <div className="shrink-0 cursor-pointer flex items-center" onClick={() => navigate("/")}>
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8 items-center">
            {links.map((link) => (
              <li key={link.name}><NavItem link={link} /></li>
            ))}
            
            {/* Admin Route */}
            {isAdmin && (
              <li>
                <RouterLink 
                  to="muntasir-admin" 
                  className={`text-sm font-semibold text-gray-700 hover:text-emerald-600 transition-colors cursor-pointer ${location.pathname === '/muntasir-admin' ? 'border-b-2 border-emerald-600 text-emerald-600 font-bold' : ''}`}
                >
                  Admin
                </RouterLink>
              </li>
            )}
          </ul>

          {/* Action Buttons (Half-rounded / rounded-xl) */}
          <div className="flex items-center gap-2.5 ml-2">
            <a
              href={googleDriveResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-emerald-600 transition-all cursor-pointer flex items-center justify-center shadow-2xs"
            >
              Resume
            </a>
            {user && (
              <button
                onClick={handleSignOut}
                className="bg-gray-100 border border-gray-200 text-gray-800 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-red-600 hover:text-white hover:border-red-600 transition-all cursor-pointer shadow-2xs"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(true)} 
            className="flex flex-col gap-1.5 items-end p-2 cursor-pointer relative z-[110]"
          >
            <span className="w-7 h-0.5 bg-gray-900"></span>
            <span className="w-5 h-0.5 bg-emerald-600"></span>
            <span className="w-7 h-0.5 bg-gray-900"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-120">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsOpen(false)} 
              className="absolute inset-0 bg-black/40 backdrop-blur-xs cursor-pointer" 
            />

            <motion.div
              initial={{ x: "-100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute top-0 left-0 h-full w-72 bg-white border-r border-gray-100 flex flex-col z-[130] p-6 shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="pb-6 border-b border-gray-100 flex justify-between items-center">
                <Logo />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 text-xl font-bold p-2 hover:text-black transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <ul className="flex flex-col gap-1 mt-6 overflow-y-auto">
                {links.map((link) => (
                  <li key={link.name} className="w-full">
                    <NavItem link={link} mobile={true} />
                  </li>
                ))}
                
                {isAdmin && (
                  <li>
                    <RouterLink 
                      to="muntasir-admin" 
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-8 py-4 text-sm font-semibold text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                    >
                      Admin
                    </RouterLink>
                  </li>
                )}
              </ul>

              {/* Mobile Action Buttons */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <div className="flex flex-col gap-2.5">
                  <a
                    href={googleDriveResumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wider cursor-pointer shadow-xs disabled:opacity-70"
                  >
                    Resume
                  </a>
                  {user && (
                    <button
                      onClick={handleSignOut}
                      className="w-full py-3.5 bg-gray-100 border border-gray-200 text-gray-800 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
                    >
                      Sign Out
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;