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
    <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans relative">
      
      {/* --- Mobile Top Header --- */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 flex items-center px-6 justify-between shadow-2xs">
        <h2 className="text-base font-bold text-emerald-700 tracking-wider uppercase">Admin Panel</h2>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="p-2.5 bg-black text-white rounded-xl shadow-xs cursor-pointer"
        >
          <FiMenu size={20} />
        </button>
      </div>

      {/* --- Sidebar (Drawer) --- */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-60 w-64 bg-white border-r border-gray-200/80 p-6 transform transition-transform duration-300 ease-in-out shadow-xs
          lg:relative lg:translate-x-0 
          ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Top Part: Header & Menus */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <h2 className="text-lg font-extrabold text-gray-900 tracking-tight uppercase">
                Admin <span className="text-emerald-600">Panel</span>
              </h2>
              {/* Close Button for Mobile */}
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="lg:hidden p-1 text-gray-500 hover:text-black cursor-pointer"
              >
                <FiX size={22} />
              </button>
            </div>

            <ul className="space-y-2">
              {adminMenus.map((menu) => (
                <li key={menu.path}>
                  <NavLink
                    onClick={() => setIsDrawerOpen(false)}
                    to={menu.path}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-xl transition-all text-xs uppercase tracking-wider font-bold ${
                        isActive
                          ? "bg-emerald-600 text-white shadow-xs"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
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
          <div className="pt-4 mt-auto border-t border-gray-100">
            <NavLink
              to="/"
              className="flex items-center gap-3 py-3 px-4 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50/60 rounded-xl transition-all duration-300 group"
            >
              <FiHome className="text-lg group-hover:scale-110 text-emerald-600" />
              <span className="font-bold uppercase text-xs tracking-wider">
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
          className="fixed inset-0 bg-black/30 backdrop-blur-2xs z-55 lg:hidden transition-opacity"
        />
      )}

      {/* --- Main Content Area --- */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto w-full pt-20 lg:pt-10">
        <div className="max-w-5xl mx-auto bg-white p-6 md:p-8 rounded-2xl border border-gray-200/80 shadow-2xs">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayouts;