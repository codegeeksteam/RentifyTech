import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "New or as good as new Devices",
    description: "With quality check",
    image: "https://i.ibb.co.com/GQvVxf1p/frame-202-272x300.webp",
  },
  {
    title: "Customer Care Offered",
    description: "Repairs covered up to 90%",
    image: "https://i.ibb.co.com/YFNjqsVF/group-201-300x241.webp",
  },
  {
    title: "Flexible rental Periods",
    description: "Rent 1, 3, 6 or 12+ months",
    image: "https://i.ibb.co.com/vCcrvgXv/group-202-295x300.webp",
  },
  {
    title: "Easy device Replacement",
    description: "After the minimum rental period",
    image: "https://i.ibb.co.com/mV01dyNf/group-203-300x218.webp",
  },
];

export default function Electronics() {
  const containerRef = useRef();

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".feature-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="text-center py-12">
      <h3 className="text-gray-500 text-sm uppercase">Electronics Rentals</h3>
      <h2 className="text-3xl font-bold mt-2">Freedom and flexibility</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card p-6 text-center shadow-lg rounded-2xl border border-gray-200"
          >
            <div className="flex justify-center mb-4">
              <div className="w-28 h-28 rounded-full flex items-center justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-48 h-48 object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
