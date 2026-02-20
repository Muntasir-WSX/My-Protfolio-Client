import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { FiBookOpen } from 'react-icons/fi';

const ManageEducation = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        const eduInfo = {
            institution: data.institution,
            degree: data.degree,
            year: data.year,
            description: data.description,
            cgpa: data.cgpa,
            order: parseInt(data.order)
        };

        try {
            const res = await axiosPublic.post('/education', eduInfo);
            if (res.data.insertedId) {
                toast.success("Education Info Added!", {
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
                        <FiBookOpen className="text-4xl text-orange-600" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Add Education Step</h2>
                    <p className="text-gray-500 text-sm mt-2">Document your academic journey and milestones</p>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Institution */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Institution Name</label>
                        <input 
                            {...register("institution", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="e.g. IIUC"
                        />
                    </div>

                    {/* Degree */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Degree / Group</label>
                        <input 
                            {...register("degree", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="e.g. BSC in CSE"
                        />
                    </div>

                    {/* Duration */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Duration</label>
                        <input 
                            {...register("year", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="e.g. 2023-Present"
                        />
                    </div>

                    {/* CGPA & Order Grid for better mobile fit */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase text-gray-700">Result/CGPA</label>
                            <input 
                                {...register("cgpa")}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                                placeholder="3.80"
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
                        <label className="text-xs font-bold uppercase text-gray-700">Description</label>
                        <textarea 
                            {...register("description", { required: true })}
                            rows="4"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="Briefly describe your focus or achievements..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-4">
                        <button 
                            type="submit"
                            className="w-full py-4 bg-black text-white font-black uppercase tracking-widest rounded-xl hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                        >
                            Update Education Journey
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ManageEducation;