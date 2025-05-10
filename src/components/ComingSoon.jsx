import React from 'react';
import { AiFillThunderbolt } from "react-icons/ai";
import { LuBellPlus } from "react-icons/lu";

const ComingSoon = () => {
    const upcomingFeatures = [
        {
            title: "Virtual Engineering Labs",
            description: "Cloud-based lab environments for hands-on practice",
            eta: "Q3 2025"
        },
        {
            title: "AI Code Mentor",
            description: "Personalized programming assistance for engineering projects",
            eta: "Q3 2025"
        },
        {
            title: "Academic License Manager",
            description: "Track and manage all your educational software licenses",
            eta: "Q1 2026"
        }
    ];
    return (
        <div>
            <h1 className='mt-7 mb-3 text-2xl md:mt-14 md:mb-6 md:text-4xl font-bold text-primary'>Coming Soon</h1>
            <p className='mb-3 md:mb-6'>Exciting New Services in Development</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {upcomingFeatures.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white p-3 md:p-6 border border-slate-300 rounded-2xl shadow-md hover:shadow-lg"
                    >
                        <div className="flex items-start mb-4">
                            <div className="bg-primary p-2 md:p-3 rounded-lg mr-2 md:mr-4">
                                <AiFillThunderbolt className="text-secondary w-[25px] h-auto" />
                            </div>
                            <div>
                                <h3 className="md:text-xl font-bold">{feature.title}</h3>
                                <div className="badge badge-primary badge-xs md:badge-md text-white">{feature.eta}</div>
                            </div>
                        </div>
                        <p className="text-sm md:text-base">{feature.description}</p>
                        <button className="mt-4 text-primary text-sm md:text-base hover:font-medium flex items-center gap-1">
                            Details coming soon... <LuBellPlus/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComingSoon;