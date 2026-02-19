import React from 'react';

const Logo = () => {
    return (
        <div className="flex flex-col items-start cursor-pointer group">
            <div className="flex items-center">
                {/* Solid Orange Box/Shape for 'tasir' - inspired by MaXel logo */}
                <div className="relative flex items-center">
                    <h1 className="text-3xl font-extrabold tracking-tighter text-white uppercase flex items-center">
                        Mun
                        <span className="relative px-2 mx-1 inline-block">
                            {/* The Solid Shape Background */}
                            <span className="absolute inset-0 bg-orange-600 -skew-x-6 transform group-hover:skew-x-0 transition-transform duration-300"></span>
                            {/* The Text over the shape */}
                            <span className="relative z-10 text-white">TASIR</span>
                        </span>
                        WSX
                    </h1>
                </div>
            </div>
            
            {/* Tagline below with matching Orange accent */}
            <div className="flex items-center gap-2 mt-1 ml-1">
                <span className="h-[2px] w-4 bg-orange-600"></span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 group-hover:text-orange-500 transition-colors">
                    Web Solutions Expert
                </span>
            </div>
        </div>
    );
};

export default Logo;