import React from 'react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Sliders = () => {
    const slides = [
        {
            title: "Master Engineering Software",
            description: "Access professional tools like SolidWorks, MATLAB, and ANSYS with our comprehensive subscription plans.",
            bgColor: "bg-gradient-to-r from-blue-500 to-indigo-600",
            buttonText: "Explore Software",
            buttonLink: "/software"
        },
        {
            title: "Enhance Your Research",
            description: "Get premium access to IEEE Xplore, Overleaf Pro, and Zotero reference manager for your academic projects.",
            bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
            buttonText: "View Research Tools",
            buttonLink: "/research"
        },
        {
            title: "Develop Like a Pro",
            description: "JetBrains IDEs, GitHub Copilot, and Docker - everything you need for professional-grade development.",
            bgColor: "bg-gradient-to-r from-green-500 to-teal-600",
            buttonText: "See Dev Tools",
            buttonLink: "/development"
        },
        {
            title: "Data Science Made Easy",
            description: "JupyterLab Pro, Tableau, and Kaggle datasets to power your data analysis and machine learning projects.",
            bgColor: "bg-gradient-to-r from-orange-500 to-red-500",
            buttonText: "Discover Data Tools",
            buttonLink: "/data-science"
        }
    ];

    return (
        <div className="w-full h-full relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="rounded-lg shadow-xl"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={`hero min-h-[320px] md:min-h-[400px] ${slide.bgColor} text-white`}>
                            <div className="hero-content text-center">
                                <div className="max-w-2xl flex flex-col justify-center items-center gap-3 md:gap-6">
                                    <h1 className="text-2xl md:text-5xl font-bold">{slide.title}</h1>
                                    <p className="text-sm md:text-xl w-[60%]">{slide.description}</p>
                                    <button className="mt-4 btn btn-primary btn-active text-white btn-sm md:btn-lg md:font-bold md:w-auto">
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Sliders;