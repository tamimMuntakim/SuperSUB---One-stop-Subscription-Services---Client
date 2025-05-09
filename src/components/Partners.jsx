import React from 'react';
import Marquee from "react-fast-marquee";

const Partners = () => {
    const partners = [
        {
            name: "Microsoft",
            logo: "https://img.icons8.com/color/240/microsoft.png"
        },
        {
            name: "Google",
            logo: "https://img.icons8.com/color/240/google-logo.png"
        },
        {
            name: "Adobe",
            logo: "https://img.icons8.com/ios-filled/250/adobe-logo.png"
        },
        {
            name: "IBM",
            logo: "https://img.icons8.com/nolan/256/ibm.png"
        },
        {
            name: "Intel",
            logo: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-intel-corporation-an-american-multinational-corporation-and-technology-company-logo-color-tal-revivo.png"
        },
        {
            name: "NVIDIA",
            logo: "https://img.icons8.com/color/240/nvidia.png"
        },
        {
            name: "AMD",
            logo: "https://img.icons8.com/ios-filled/250/amd.png"
        }
    ];
    return (
        <div>
            <h1 className='mt-7 mb-3 text-2xl md:mt-14 md:mb-6 md:text-4xl font-bold text-secondary'>Our Trusted Partners</h1>
            <Marquee pauseOnHover={true} speed={50} className='h-[100px] md:h-[220px]'>
                {partners.map((partner, index) => (
                    <div key={index} className="mr-4 md:mr-12 flex flex-col gap-2 md:gap-4 justify-center items-center bg-base-100 px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-sm md:shadow-lg">
                    <div className='bg-base-200 p-1 md:p-2 shadow md:shadow-lg rounded md:rounded-lg'><img className='w-[40px] md:w-[80px] h-auto' src={partner.logo} alt="Partner's Logo" /></div>
                    <p className='text-xs md:text-base'>{partner.name}</p>
                </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Partners;