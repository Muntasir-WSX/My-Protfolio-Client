import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { FiArrowLeft, FiArrowUpRight, FiGithub, FiCheckCircle, FiAlertTriangle, FiTrendingUp } from "react-icons/fi";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loader from "../../SharedComponents/Loader/Loader";

export default function ProjectsDetails() {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axiosPublic.get(`/projects/${id}`)
      .then(res => {
        setProject(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading project details:", err);
        setLoading(false);
      });
  }, [id, axiosPublic]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white ">
        <Loader />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white  text-gray-900  p-6">
        <h2 className="text-2xl font-bold mb-4">Project Not Found!</h2>
        <Link to="/" className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-xs uppercase">
          Back To Home
        </Link>
      </div>
    );
  }

  // Handle case-sensitivity for liveLink / livelink
  const activeLiveLink = project.liveLink || project.livelink;

  return (
    <section className="bg-white  text-gray-900  min-h-screen py-12 md:py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Back Button */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100  hover:bg-gray-200  text-gray-800  rounded-xl text-xs font-bold uppercase transition-all shadow-2xs"
          >
            <FiArrowLeft size={16} /> Back To Projects
          </Link>
        </div>

        {/* Title Header */}
        <div className="space-y-3">
          <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase">
            Project Overview
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            {project.title}
          </h1>
        </div>

        {/* Main Banner Image */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-200/80  bg-gray-50  shadow-sm max-h-[480px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quick Action Links */}
        <div className="flex flex-wrap gap-4 pt-2">
          {activeLiveLink && (
            <a
              href={activeLiveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all"
            >
              Live Project Demo <FiArrowUpRight size={16} />
            </a>
          )}
          {project.clientCode && (
            <a
              href={project.clientCode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs transition-all"
            >
              GitHub Client Repository <FiGithub size={16} />
            </a>
          )}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
          
          {/* Main Description & Challenges */}
          <div className="md:col-span-8 space-y-8">
            
            {/* Description */}
            <div className="bg-gray-50/70  border border-gray-200/80  rounded-2xl p-6 md:p-8 space-y-3">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <FiCheckCircle className="text-emerald-600" /> Brief Description
              </h3>
              <p className="text-gray-600  text-sm leading-relaxed font-normal whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* Challenges Faced */}
            <div className="bg-gray-50/70  border border-gray-200/80  rounded-2xl p-6 md:p-8 space-y-3">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <FiAlertTriangle className="text-amber-500" /> Challenges Faced
              </h3>
              <p className="text-gray-600  text-sm leading-relaxed font-normal whitespace-pre-line">
                {project.challenges || "Managing multi-tier roles (User, Agent, Admin), Stripe payment gateway integration, and ensuring real-time claim status updates."}
              </p>
            </div>

            {/* Potential Improvements & Future Plans */}
            <div className="bg-gray-50/70  border border-gray-200/80  rounded-2xl p-6 md:p-8 space-y-3">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <FiTrendingUp className="text-blue-600" /> Future Plans & Improvements
              </h3>
              <p className="text-gray-600  text-sm leading-relaxed font-normal whitespace-pre-line">
                {project.futurePlans || "Integrating AI-based policy recommendation engine, adding automated email notifications, and mobile app support."}
              </p>
            </div>
          </div>

          {/* Tech Stack Side Panel */}
          <div className="md:col-span-4">
            <div className="bg-gray-50/70  border border-gray-200/80  rounded-2xl p-6 space-y-4 sticky top-28">
              <h3 className="text-base font-bold text-gray-900 uppercase tracking-wider">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags && project.tags.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white  border border-gray-200  rounded-xl text-xs text-gray-800  font-semibold uppercase tracking-wider shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}