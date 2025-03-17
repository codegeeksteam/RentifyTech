import { useEffect, useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";

export default function Banner() {
    const slides = [
        {
            src: "https://ap-priotech.myshopify.com/cdn/shop/files/Mask_group_19.png?v=1689066184&width=3000",
            title: "Smart Door Lock",
            description: "Advanced technology for your home security.",
            buttonText: "Shop Now",
        },
        {
            src: "https://ap-priotech.myshopify.com/cdn/shop/files/Mask_group_60.png?v=1690337759&width=1920",
            title: "Smart Wireless Speaker",
            description: "High-quality sound with smart features.",
            buttonText: "Shop Now",
        },
        {
            src: "https://ap-priotech.myshopify.com/cdn/shop/files/Mask_group_53.png?v=1689840170&width=3000",
            title: "Smart Lighting System",
            description: "Brighten up your home with smart controls.",
            buttonText: "Shop Now",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
                setFade(false);
            }, 500); // Fade-out effect duration
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-200">
            {/* Left: Auto-Sliding Banner */}
            <div className="col-span-2 h-[550px] overflow-hidden rounded-3xl shadow-lg relative">
                <img
                    src={slides[currentIndex].src}
                    alt={`Slide ${currentIndex + 1}`}
                    className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ease-in ${fade ? "opacity-0" : "opacity-100"}`}
                />
                {/* Overlay for Title, Description, and Button */}
                <div className="absolute inset-0 flex flex-col justify-center items-start p-10 bg-black/30 text-white">
                    <h1 className="text-4xl font-bold">{slides[currentIndex].title}</h1>
                    <p className="text-lg mt-2">{slides[currentIndex].description}</p>
                    <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition">
                        {slides[currentIndex].buttonText}
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="relative overflow-hidden rounded-3xl">
                    <img
                        src="https://ap-priotech.myshopify.com/cdn/shop/files/Mask_group_20.png?v=1689067332&width=1920"
                        alt="Top Image"
                        className="rounded-3xl h-[267px] w-full shadow-md object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                    />
                    <div className="absolute top-15 left-10 text-white">
                        <p className="font-medium text-lg uppercase">Super Thin</p>
                        <h1 className="font-semibold text-4xl">Smart door lock</h1>
                        <br />
                        <button className="underline hover:text-blue-600 flex items-center gap-3">
                            Discover More <FaGreaterThan />
                        </button>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-3xl">
                    <img
                        src="https://ap-priotech.myshopify.com/cdn/shop/files/Mask_group_21.png?v=1689067967&width=1920"
                        alt="Bottom Image"
                        className="rounded-3xl h-[267px] w-full shadow-md object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                    />
                    <div className="absolute top-15 left-10 text-white">
                        <p className="font-medium text-lg uppercase">Sale 20% Off</p>
                        <h1 className="font-semibold text-4xl">Smart Wireless Speaker</h1>
                        <br />
                        <button className="underline hover:text-blue-600 flex items-center gap-3">
                            Discover More <FaGreaterThan />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
