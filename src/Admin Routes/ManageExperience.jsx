import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { FiBriefcase } from 'react-icons/fi';

const ManageExperience = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        const expInfo = {
            company: data.company,
            role: data.role,
            duration: data.duration,
            description: data.description,
            location: data.location,
            order: parseInt(data.order)
        };

        try {
            const res = await axiosPublic.post('/experience', expInfo);
            if (res.data.insertedId) {
                toast.success("Internship Experience Added!", {
                    duration: 4000,
                    position: 'top-center',
                    style: {
                        borderRadius: '10px',
                        background: '#000', 
                        color: '#ea580c',  
                        border: '1px solid #333',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    },
                }); 
                reset();
            }
        } catch (error) {
            toast.error("Internal Error!");
        }
    };

    return (
        <div className="bg-white min-h-screen p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="max-w-4xl mx-auto">
                <header className="mb-10 text-center">
                    <div className="flex justify-center mb-2">
                        <FiBriefcase className="text-4xl text-orange-600" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Add Experience</h2>
                    <p className="text-gray-500 text-sm mt-2">Showcase your internships and professional milestones</p>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Company Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Company Name</label>
                        <input 
                            {...register("company", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="e.g. Google or Local Startup"
                        />
                    </div>

                    {/* Role */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Job Role / Position</label>
                        <input 
                            {...register("role", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="e.g. Frontend Intern"
                        />
                    </div>

                    {/* Duration */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Duration</label>
                        <input 
                            {...register("duration", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="e.g. Jan 2024 - June 2024"
                        />
                    </div>

                    {/* Location & Order Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase text-gray-700">Location</label>
                            <input 
                                {...register("location")}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                                placeholder="e.g. Remote / Dhaka"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase text-gray-700">Order</label>
                            <input 
                                type="number"
                                {...register("order", { required: true })}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                                placeholder="1"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2 flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Key Contributions</label>
                        <textarea 
                            {...register("description", { required: true })}
                            rows="4"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="List your main tasks or what you learned..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-4">
                        <button 
                            type="submit"
                            className="w-full py-4 bg-black text-white font-black uppercase tracking-widest rounded-xl hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                        >
                            Add Internship Experience
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ManageExperience;