// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const testimonials = [
//   {
//     name: "Shakib Haldar",
//     img: "https://i.pinimg.com/736x/03/86/a2/0386a273635977141fad2abac149abd9.jpg",
//     profession: "Entrepreneur",
//     testimonial:
//       "Great pricing and reliable service! I've rented cameras and drones multiple times—delivery is always timely, and the gear arrives in perfect condition. Would love to see even more model options in the future. Highly recommend for quality tech rentals!",
//   },
//   {
//     name: "Sarah Johnson",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//     profession: "Photographer",
//     testimonial:
//       "The camera equipment I rented was top-notch and perfectly maintained. The booking process was seamless, and customer support was incredibly helpful when I had questions. Will definitely use this service again!",
//   },
//   {
//     name: "Michael Chen",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//     profession: "Content Creator",
//     testimonial:
//       "As a frequent renter, I'm impressed by how consistently good the experience is. The drones are always up-to-date models, and their flexible rental periods help me manage my project budgets better.",
//   },
// ];

// const TestimonialCard = ({ testimonial }) => {
//   return (
//     <div className="testimonial-card p-6 rounded-lg border border-gray-400 shadow-md hover:shadow-lg transition-shadow duration-300">
//       <div className="flex items-center mb-4">
//         <img
//           src={testimonial.img}
//           alt={testimonial.name}
//           className="w-12 h-12 rounded-full object-cover mr-4"
//         />
//         <div>
//           <h3 className="font-semibold">{testimonial.name}</h3>
//           <p className="text-sm text-gray-500">{testimonial.profession}</p>
//         </div>
//       </div>
//       <p className="text-gray-500 italic">"{testimonial.testimonial}"</p>
//       <div className="mt-4 flex space-x-1">
//         {[...Array(5)].map((_, i) => (
//           <svg
//             key={i}
//             className="w-5 h-5 text-yellow-400"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         ))}
//       </div>
//     </div>
//   );
// };

// const TestimonialSection = () => {
//   const sectionRef = useRef();

//   useEffect(() => {
//     const cards = sectionRef.current.querySelectorAll(".testimonial-card");

//     gsap.fromTo(
//       cards,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         ease: "power3.out",
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 60%",
//         },
//       }
//     );
//   }, []);

//   return (
//     <section className="py-12" ref={sectionRef}>
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
//           <p className="text-gray-500 max-w-2xl mx-auto">
//             Don't just take our word for it - hear from our satisfied customers
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <TestimonialCard key={index} testimonial={testimonial} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;


import React, { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Shakib Haldar",
    img: "https://i.pinimg.com/736x/03/86/a2/0386a273635977141fad2abac149abd9.jpg",
    profession: "Entrepreneur",
    testimonial:
      "Great pricing and reliable service! I've rented cameras and drones multiple times—delivery is always timely, and the gear arrives in perfect condition. Would love to see even more model options in the future. Highly recommend for quality tech rentals!",
  },
  {
    name: "Sarah Johnson",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    profession: "Photographer",
    testimonial:
      "The camera equipment I rented was top-notch and perfectly maintained. The booking process was seamless, and customer support was incredibly helpful when I had questions. Will definitely use this service again!",
  },
  {
    name: "Michael Chen",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Content Creator",
    testimonial:
      "As a frequent renter, I'm impressed by how consistently good the experience is. The drones are always up-to-date models, and their flexible rental periods help me manage my project budgets better.",
  },
  {
    name: "Emma Rodriguez",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    profession: "Film Student",
    testimonial:
      "The equipment quality exceeded my expectations. As a student, the affordable rates made it possible for me to complete my final project with professional-grade gear. Customer service was exceptional from start to finish!",
  },
  {
    name: "David Park",
    img: "https://randomuser.me/api/portraits/men/51.jpg",
    profession: "Vlogger",
    testimonial:
      "I've tried several rental services and this one stands out for reliability and equipment quality. The online booking system is intuitive, and I appreciate how they follow up after each rental to ensure satisfaction.",
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance testimonials with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    const sectionEl = document.getElementById('testimonial-section');
    if (sectionEl) {
      sectionEl.addEventListener('mouseenter', () => clearInterval(interval));
      sectionEl.addEventListener('mouseleave', () => {
        clearInterval(interval);
        const newInterval = setInterval(nextTestimonial, 6000);
        return () => clearInterval(newInterval);
      });
    }
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="testimonial-section"
      className="py-20 bg-white text-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Minimal header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-2 tracking-tight">CUSTOMER EXPERIENCES</h2>
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>
        </div>
        
        {/* Main testimonial display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-16 bg-white">
            {/* Large quote mark */}
            <div className="absolute transform -translate-y-1/2">
              <Quote size={40} className="text-gray-100" />
            </div>
            
            {/* Testimonial content with animation */}
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-center mb-12">
                "{testimonials[activeIndex].testimonial}"
              </p>
              
              <div className="flex flex-col items-center justify-center">
                <div className="relative mb-4">
                  <div className="absolute -inset-1 rounded-full transform rotate-45"></div>
                  <img 
                    src={testimonials[activeIndex].img} 
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover relative z-10"
                  />
                </div>
                
                <h3 className="font-medium text-lg">{testimonials[activeIndex].name}</h3>
                <p className="text-gray-500">{testimonials[activeIndex].profession}</p>
                
                <div className="mt-6 flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Navigation controls */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-2 md:px-8">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors duration-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-6 bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-20 text-center">
       
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "99%", label: "Client Satisfaction" },
              { number: "24h", label: "Delivery Time" },
              { number: "500+", label: "Active Users" },
              { number: "5,000+", label: "Equipment Rentals" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-3xl font-light">{stat.number}</span>
                <span className="text-sm text-gray-500 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;