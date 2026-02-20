import React from 'react';
import { NavLink, Outlet } from 'react-router';

const AdminLayouts = () => {
 
        const adminMenus = [ 
    { name: "Manage Projects", path: "manage-projects" },
    { name: "Education Info", path: "manage-education" },
    { name: "Experience", path: "manage-experience" },
    { name: "Certificates", path: "manage-certificates" },
    { name: "Client Messages", path: "messages" }, 
    { name: "Settings", path: "settings" }, 
];
    

    return (
        <div className="flex min-h-screen bg-[#0a0a0a] text-white font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-[#0d0d0d] border-r border-gray-800 p-6">
                <h2 className="text-xl font-bold text-orange-600 mb-10 tracking-tighter uppercase">Admin Panel</h2>
                <ul className="space-y-4">
                    {adminMenus.map(menu => (
                        <li key={menu.path}>
                            <NavLink 
                                to={menu.path}
                                className={({ isActive }) => 
                                    `block py-2 px-4 rounded-lg transition-all border-l-2 ${isActive ? 'bg-orange-600/10 border-orange-600 text-orange-500' : 'border-transparent text-gray-400 hover:text-white'}`
                                }
                            >
                                {menu.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-10 overflow-y-auto">
                <Outlet /> 
            </main>
        </div>
    );
};

export default AdminLayouts;