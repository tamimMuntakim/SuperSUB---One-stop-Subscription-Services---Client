import React from 'react';
import Marquee from "react-fast-marquee";

const Partners = () => {
    return (
        <div>
            <h1 className='mt-7 mb-3 text-2xl md:mt-14 md:mb-6 md:text-4xl font-bold text-secondary'>Our Trusted Partners</h1>
            <Marquee pauseOnHover={true} speed={50} className='h-[100px] md:h-[220px]'>
                <div className="mr-4 md:mr-8 flex flex-col gap-2 md:gap-4 justify-center items-center bg-base-200 px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-sm md:shadow-lg">
                    <div className='bg-base-200 p-1 md:p-2 shadow md:shadow-lg'><img className='w-[50px] md:w-[100px] h-auto' src="https://img.icons8.com/color/240/microsoft.png" alt="microsoft" /></div>
                    <p className='text-xs md:text-base'>Microsoft</p>
                </div>
                <div className="mr-4 md:mr-8 flex flex-col gap-2 md:gap-4 justify-center items-center bg-base-200 px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-sm md:shadow-lg">
                    <div className='bg-base-200 p-1 md:p-2 shadow md:shadow-lg'><img className='w-[50px] md:w-[100px] h-auto' src="https://img.icons8.com/color/240/google-logo.png" alt="google-logo" /></div>
                    <p className='text-xs md:text-base'>Google</p>
                </div>
                <div className="mr-4 md:mr-8 flex flex-col gap-2 md:gap-4 justify-center items-center bg-base-200 px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-sm md:shadow-lg">
                    <div className='bg-base-200 p-1 md:p-2 shadow md:shadow-lg'><img className='w-[50px] md:w-[100px] h-auto' src="https://img.icons8.com/ios-filled/250/adobe-logo.png" alt="adobe-logo" /></div>
                    <p className='text-xs md:text-base'>Adobe</p>
                </div>
                <div className="mr-4 md:mr-8 flex flex-col gap-2 md:gap-4 justify-center items-center bg-base-200 px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-sm md:shadow-lg">
                    <div className='bg-base-200 p-1 md:p-2 shadow md:shadow-lg'><img className='w-[50px] md:w-[100px] h-auto' src="https://img.icons8.com/nolan/256/ibm.png" alt="ibm" /></div>
                    <p className='text-xs md:text-base'>IBM</p>
                </div>
                <div className="mr-4 md:mr-8 flex flex-col gap-2 md:gap-4 justify-center items-center bg-base-200 px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-sm md:shadow-lg">
                    <div className='bg-base-200 p-1 md:p-2 shadow md:shadow-lg'><img className='w-[50px] md:w-[100px] h-auto' src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-intel-corporation-an-american-multinational-corporation-and-technology-company-logo-color-tal-revivo.png" alt="external-intel-corporation-an-american-multinational-corporation-and-technology-company-logo-color-tal-revivo" /></div>
                    <p className='text-xs md:text-base'>Intel</p>
                </div>
                <div className="mr-4 md:mr-8 flex flex-col gap-2 md:gap-4 justify-center items-center bg-base-200 px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-sm md:shadow-lg">
                    <div className='bg-base-200 p-1 md:p-2 shadow md:shadow-lg'><img className='w-[50px] md:w-[100px] h-auto' src="https://img.icons8.com/color/240/nvidia.png" alt="nvidia" /></div>
                    <p className='text-xs md:text-base'>NVIDIA</p>
                </div>
                <div className="mr-4 md:mr-8 flex flex-col gap-2 md:gap-4 justify-center items-center bg-base-200 px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-sm md:shadow-lg">
                    <div className='bg-base-200 p-1 md:p-2 shadow md:shadow-lg'><img className='w-[50px] md:w-[100px] h-auto' src="https://img.icons8.com/ios-filled/250/amd.png" alt="amd" /></div>
                    <p className='text-xs md:text-base'>AMD</p>
                </div>
            </Marquee>
        </div>
    );
};

export default Partners;