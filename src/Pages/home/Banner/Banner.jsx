import React, { useState, useEffect } from "react";
import '../Banner/Banner.css';

const sliderImages = [
    {
        url: "https://techno-workdo.myshopify.com/cdn/shop/files/main-banner-1.png?v=1714560913",
        title: "Experience the Best Sound",
        buttonLink: "/shop",
    },
    {
        url: "https://techno-workdo.myshopify.com/cdn/shop/files/main-banner-2.png?v=1714560913",
        title: "Unmatched Quality",
        buttonLink: "/shop",
    },
    {
        url: "https://techno-workdo.myshopify.com/cdn/shop/files/main-banner-3.png?v=1714560913",
        title: "Your Music, Your Way",
        buttonLink: "/shop",
    }
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex items-center justify-center h-screen">
            {/* Full-width Slider */}
            <div className="w-full h-full overflow-hidden -mt-32">

                {/* Foreground Image (Top) */}
                <img src="https://techno-workdo.myshopify.com/cdn/shop/files/banner-img-1.png?v=1714561466"
                    className="absolute banner-img-1 top-22 z-2 "
                    alt="banner-img-1"
                />

                {sliderImages.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                        style={{ backgroundImage: `url(${slide.url})` }}
                    >
                        {/* Text Content */}
                        <div className="absolute right-36 inset-0 flex flex-col items-center justify-center pl-10 sm:pl-16 md:pl-24 lg:pl-32 xl:pl-40 text-white">
                            <h1 className="text-3xl uppercase tracking-wider sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                {slide.title}
                            </h1>


                            <a href={slide.buttonLink} className="bg-white text-black font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-400">
                                Shop Now
                            </a>
                        </div>
                    </div>
                ))}

                {/* Foreground Image (Bottom) */}
                <img src="https://techno-workdo.myshopify.com/cdn/shop/files/banner-img-2.png?v=1714561470"
                    className="absolute banner-img-2 bottom-0 right-0 z-2 "
                    alt="banner-img-2"
                />
            </div>
        </section>
    );
};

export default Banner;