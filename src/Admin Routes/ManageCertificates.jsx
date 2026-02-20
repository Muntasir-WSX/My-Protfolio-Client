import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { FiAward, FiUploadCloud } from 'react-icons/fi';

const ManageCertificates = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        const certificateInfo = {
            title: data.title,
            organizer: data.organizer,
            category: data.category, 
            date: data.date,
            imageUrl: data.imageUrl,
            order: parseInt(data.order)
        };

        try {
            const res = await axiosPublic.post('/certificates', certificateInfo);
            if (res.data.insertedId) {
                toast.success("Certificate Added Successfully!", {
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
                        <FiAward className="text-4xl text-orange-600" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Manage Achievements</h2>
                    <p className="text-gray-500 text-sm mt-2">Upload and categorize your professional recognitions</p>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Category Selection */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Category</label>
                        <select 
                            {...register("category", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none cursor-pointer"
                        >
                            <option value="Competition">Competition</option>
                            <option value="Webinar">Webinar</option>
                            <option value="Course">Course</option>
                        </select>
                    </div>

                    {/* Achievement Title */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Achievement Title</label>
                        <input 
                            {...register("title", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="e.g. National NextGen-Hackathon"
                        />
                    </div>

                    {/* Organizer */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Organizer</label>
                        <input 
                            {...register("organizer", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="e.g. Programming Hero"
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

                    {/* Issue Date */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Issue Date</label>
                        <input 
                            {...register("date", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="November 2025"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700 flex items-center gap-2">
                            <FiUploadCloud className="text-orange-600" /> Certificate Image URL
                        </label>
                        <input 
                            {...register("imageUrl", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="Paste hosted link..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-4">
                        <button 
                            type="submit"
                            className="w-full py-4 bg-black text-white font-black uppercase tracking-widest rounded-xl hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                        >
                            Publish Certificate
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ManageCertificates;