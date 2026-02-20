import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { FaEdit, FaTrash } from 'react-icons/fa';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const AdminSettings = () => {
    const [projects, setProjects] = useState([]);
    const axiosPublic = useAxiosPublic();

    // ডাটা লোড করা
    const loadData = async () => {
        const res = await axiosPublic.get('/projects');
        setProjects(res.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    // ডিলিট লজিক
    const handleDelete = async (id) => {
        if (window.confirm("মামা, আসলেই ডিলিট করবি?")) {
            try {
                const res = await axiosPublic.delete(`/projects/${id}`);
                if (res.data.deletedCount > 0) {
                    toast.success("প্রজেক্ট হাওয়া হয়ে গেছে! 🗑️");
                    loadData(); // লিস্ট আপডেট
                }
            } catch (error) {
                toast.error("ডিলিট করতে গিয়ে ঝামেলা হয়েছে!");
            }
        }
    };

    return (
        <div className="bg-white min-h-screen p-8 rounded-2xl shadow-sm">
            <header className="mb-8">
                <h2 className="text-3xl font-black text-gray-900 uppercase">Site Settings & Management</h2>
                <p className="text-gray-500">Edit or delete anything from your portfolio</p>
            </header>

            {/* Manage Projects Section */}
            <section className="mb-12">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <h3 className="text-xl font-bold text-gray-800">All Projects ({projects.length})</h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-gray-600 text-xs uppercase font-bold">
                                <th className="p-4 border-b">Image</th>
                                <th className="p-4 border-b">Project Name</th>
                                <th className="p-4 border-b">Technologies</th>
                                <th className="p-4 border-b text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 border-b">
                                        <img src={project.image} alt="" className="w-16 h-10 object-cover rounded-md shadow-sm" />
                                    </td>
                                    <td className="p-4 border-b font-medium text-gray-800">{project.title}</td>
                                    <td className="p-4 border-b text-sm text-gray-500">
                                        {project.tags?.join(', ')}
                                    </td>
                                    <td className="p-4 border-b">
                                        <div className="flex justify-center gap-3">
                                            <button 
                                                onClick={() => toast('Edit feature coming soon!', { icon: '🚧' })}
                                                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                                            >
                                                <FaEdit />
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(project._id)}
                                                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Education বা Skills এর জন্য একই রকম টেবিল নিচে নিচে অ্যাড করবি */}
            <section className="mt-20 opacity-50">
                <h3 className="text-xl font-bold text-gray-400">Manage Education (Coming Soon)</h3>
            </section>
        </div>
    );
};

export default AdminSettings;