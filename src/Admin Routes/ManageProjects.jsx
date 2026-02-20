import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxiosPublic from '../Hooks/useAxiosPublic';


const ManageProjects = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
       
        
        const projectInfo = {
            title: data.title,
            description: data.description,
            image: data.image, 
            tags: data.tags.split(',').map(tag => tag.trim()), 
            liveLink: data.liveLink,
            detailsLink: data.detailsLink,
            clientCode: data.clientCode,
            serverCode: data.serverCode
        };

        try {
            const res = await axiosPublic.post('/projects', projectInfo);
            if (res.data.insertedId) {
                toast.success(" Project Added Succesfully 🚀", {
                    style: { background: '#333', color: '#fff' }
                });
                reset();
            }
        } catch (error) {
            toast.error(" Internal Error!");
        }
    };

    return (
        <div className="bg-white min-h-screen p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="max-w-4xl mx-auto">
                <header className="mb-10 text-center">
                    <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Add New Project</h2>
                    <p className="text-gray-500 text-sm mt-2">Fill in the details to showcase your masterpiece</p>
                </header>

                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project Title */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Project Title</label>
                        <input 
                            {...register("title", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="e.g. NextGen Career"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Full Page Image URL</label>
                        <input 
                            {...register("image", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="Direct image link"
                        />
                    </div>

                    {/* Technologies / Tags */}
                    <div className="md:col-span-2 flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Technologies (Comma separated)</label>
                        <input 
                            {...register("tags", { required: true })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="React, MongoDB, TailwindCss, Firebase"
                        />
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2 flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Short Description</label>
                        <textarea 
                            {...register("description", { required: true })}
                            rows="3"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            placeholder="Briefly describe the project..."
                        />
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Live Demo Link</label>
                        <input {...register("liveLink")} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none" placeholder="https://..." />
                    </div>
                   
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Client Side Code (GitHub)</label>
                        <input {...register("clientCode")} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none" placeholder="GitHub Client Link" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold uppercase text-gray-700">Server Side Code (GitHub)</label>
                        <input {...register("serverCode")} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 outline-none" placeholder="GitHub Server Link" />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-4">
                        <button 
                            type="submit"
                            className="w-full py-4 bg-black text-white font-black uppercase tracking-widest rounded-xl hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                        >
                            Upload Project to Portfolio
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ManageProjects;