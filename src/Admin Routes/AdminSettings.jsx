import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash, FaProjectDiagram, FaGraduationCap, FaBriefcase, FaCertificate, FaEnvelope, FaTimes } from 'react-icons/fa';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const AdminSettings = () => {
    const [activeTab, setActiveTab] = useState('projects');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editingItem, setEditingItem] = useState(null); 
    const axiosPublic = useAxiosPublic();

    const [currentPage, setCurrentPage] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const size = 5;

    const loadData = async () => {
        setLoading(true);
        try {
            let endpoint = `/${activeTab}`;
            if (activeTab === 'messages') {
                endpoint = `/messages?page=${currentPage}&size=${size}`;
                const countRes = await axiosPublic.get('/messagesCount');
                setTotalCount(countRes.data.count);
            }
            const res = await axiosPublic.get(endpoint);
            setData(res.data);
        } catch (error) {
            toast.error("Failed to load data!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, [activeTab, currentPage]);

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This action cannot be undone!",
            icon: 'warning',
            showCancelButton: true,
            background: '#0f0f0f',
            color: '#fff',
            confirmButtonColor: '#ea580c', 
            cancelButtonColor: '#333',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosPublic.delete(`/${activeTab}/${id}`);
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Item removed successfully.',
                            icon: 'success',
                            background: '#0f0f0f',
                            color: '#fff'
                        });
                        loadData();
                    }
                } catch (error) {
                    toast.error("Server error during deletion!");
                }
            }
        });
    };

   
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const id = editingItem._id;
        
        let updatedData = {};

        if (activeTab === 'projects') {
            updatedData = {
                title: form.field1.value,
                image: form.field2.value,
                description: form.field3.value,
            };
        } 
      
        else if (activeTab === 'certificates') {
            updatedData = {
                title: form.field1.value,
                imageUrl: form.field2.value,
                organizer: form.field3.value,
            };
        } 
        // ৩. এডুকেশনের জন্য (degree এবং institution)
        else if (activeTab === 'education') {
            updatedData = {
                degree: form.field1.value,
                institution: form.field3.value,
                year: form.field2.value, 
            };
        } 
       
        else if (activeTab === 'experience') {
            updatedData = {
                role: form.field1.value,
                company: form.field3.value,
                duration: form.field2.value,
            };
        }

        try {
            const res = await axiosPublic.patch(`/${activeTab}/${id}`, updatedData);
            if (res.data.modifiedCount > 0 || res.data.matchedCount > 0) {
                toast.success("Successfully Updated! 🔥");
                setEditingItem(null);
                loadData();
            } else {
                toast("No changes detected.");
                setEditingItem(null);
            }
        } catch (error) {
            toast.error("Update failed!");
        }
    };

    const tabs = [
        { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
        { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
        { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
        { id: 'certificates', label: 'Certificates', icon: <FaCertificate /> },
        { id: 'messages', label: 'Messages', icon: <FaEnvelope /> },
    ];

    return (
        <div className="bg-[#0f0f0f] min-h-screen p-4 md:p-8 text-white rounded-3xl border border-gray-800">
            <header className="mb-10">
                <h2 className="text-4xl font-black uppercase tracking-tighter text-orange-500">Command Center</h2>
                <div className="flex flex-wrap gap-2 mt-6 bg-[#1a1a1a] p-2 rounded-2xl border border-gray-800">
                    {tabs.map((tab) => (
                        <button 
                            key={tab.id} 
                            onClick={() => { setActiveTab(tab.id); setCurrentPage(0); }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest transition-all ${activeTab === tab.id ? "bg-orange-600 text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>
            </header>

            <div className="bg-[#141414] rounded-2xl border border-gray-800 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-[#1a1a1a] text-gray-500 text-[10px] uppercase font-black tracking-widest border-b border-gray-800">
                        <tr>
                            <th className="p-5">Details</th>
                            <th className="p-5 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/50">
                        {loading ? (
                            <tr><td colSpan="2" className="p-20 text-center text-orange-500 animate-pulse font-bold uppercase">Fetching Data...</td></tr>
                        ) : data.map((item) => (
                            <tr key={item._id} className="hover:bg-white/5 transition-colors group">
                                <td className="p-5">
                                    <div className="flex items-center gap-4">
                                        {(item.image || item.imageUrl) && <img src={item.image || item.imageUrl} className="w-14 h-14 object-cover rounded-xl border border-gray-700" alt=""/>}
                                        <div>
                                            <p className="font-bold text-gray-200 uppercase text-sm">
                                                {item.title || item.degree || item.role || item.name}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1 italic">
                                                {item.institution || item.company || item.organizer || item.email}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-5">
                                    <div className="flex justify-center gap-3">
                                        {activeTab !== 'messages' && (
                                            <button onClick={() => setEditingItem(item)} className="p-3 bg-blue-500/10 text-blue-500 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                                                <FaEdit size={16}/>
                                            </button>
                                        )}
                                        <button onClick={() => handleDelete(item._id)} className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-600 hover:text-white transition-all">
                                            <FaTrash size={16}/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination for Messages omitted for brevity, use your existing logic */}

            {/* --- Edit Modal --- */}
            {editingItem && (
                <div className="fixed inset-0 z-1000 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
                    <div className="bg-[#141414] border border-gray-800 w-full max-w-xl rounded-3xl p-8 relative">
                        <button onClick={() => setEditingItem(null)} className="absolute top-6 right-6 text-gray-500 hover:text-orange-500">
                            <FaTimes size={20}/>
                        </button>
                        
                        <div className="mb-8">
                            <h3 className="text-2xl font-black uppercase tracking-tighter text-orange-500">Edit {activeTab}</h3>
                        </div>
                        
                        <form onSubmit={handleEditSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black text-gray-500">Title / Degree / Role</label>
                                    <input 
                                        name="field1" 
                                        defaultValue={editingItem.title || editingItem.degree || editingItem.role} 
                                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none" 
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black text-gray-500">Image URL / Year</label>
                                    <input 
                                        name="field2" 
                                        defaultValue={editingItem.image || editingItem.imageUrl || editingItem.year || editingItem.duration} 
                                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none" 
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black text-gray-500">Organization / Company / Description</label>
                                <textarea 
                                    name="field3" 
                                    rows="4" 
                                    defaultValue={editingItem.description || editingItem.institution || editingItem.company || editingItem.organizer} 
                                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none resize-none"
                                ></textarea>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <button type="button" onClick={() => setEditingItem(null)} className="flex-1 bg-gray-800 text-white font-black py-4 rounded-xl uppercase text-[10px]">Cancel</button>
                                <button type="submit" className="flex-2 bg-orange-600 text-white font-black py-4 rounded-xl uppercase text-[10px] shadow-lg shadow-orange-600/20">Commit Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminSettings;