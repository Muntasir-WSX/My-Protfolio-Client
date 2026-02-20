import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { FiHome, FiMenu, FiX } from "react-icons/fi";

const AdminLayouts = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const adminMenus = [
    { name: "Manage Projects", path: "manage-projects" },
    { name: "Education Info", path: "manage-education" },
    { name: "Experience", path: "manage-experience" },
    { name: "Certificates", path: "manage-certificates" },
    { name: "Client Messages", path: "messages" },
    { name: "Settings", path: "settings" },
  ];

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white font-sans relative">
      
      {/* --- Mobile Top Header --- */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-20 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-gray-800 z-50 flex items-center px-6 justify-between">
        <h2 className="text-lg font-bold text-orange-600 tracking-tighter uppercase">Admin</h2>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="p-3 bg-orange-600 rounded-xl shadow-lg"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* --- Sidebar (Drawer) --- */}
      <aside
        className={`
            fixed inset-y-0 left-0 z-60 w-64 bg-[#0d0d0d] border-r border-gray-800 p-6 transform transition-transform duration-300 ease-in-out
            lg:relative lg:translate-x-0 
            ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Top Part: Menus */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-xl font-bold text-orange-600 tracking-tighter uppercase">
                Admin Panel
              </h2>
              {/* Close Button for Mobile */}
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="lg:hidden p-2 text-gray-400 hover:text-white"
              >
                <FiX size={24} />
              </button>
            </div>

            <ul className="space-y-4">
              {adminMenus.map((menu) => (
                <li key={menu.path}>
                  <NavLink
                    onClick={() => setIsDrawerOpen(false)}
                    to={menu.path}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-lg transition-all border-l-2 ${
                        isActive
                          ? "bg-orange-600/10 border-orange-600 text-orange-500 font-bold"
                          : "border-transparent text-gray-400 hover:text-white"
                      }`
                    }
                  >
                    {menu.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Part: Back to Home */}
          <div className="pt-6 mt-6 border-t border-gray-800">
            <NavLink
              to="/"
              className="flex items-center gap-3 py-3 px-4 text-gray-400 hover:text-orange-500 transition-all duration-300 group"
            >
              <FiHome className="text-xl group-hover:scale-110" />
              <span className="font-semibold uppercase text-xs tracking-widest">
                Back to Home
              </span>
            </NavLink>
          </div>
        </div>
      </aside>

      {/* --- Overlay --- */}
      {isDrawerOpen && (
        <div
          onClick={() => setIsDrawerOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-55 lg:hidden transition-opacity"
        />
      )}

      {/* --- Main Content Area --- */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto w-full pt-28 lg:pt-10">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayouts;