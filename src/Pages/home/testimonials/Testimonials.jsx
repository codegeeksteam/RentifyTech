import React from "react";

const testimonials = [
  {
    name: "Shakib Haldar",
    img: "https://i.pinimg.com/736x/03/86/a2/0386a273635977141fad2abac149abd9.jpg",
    profession: "Entrepreneur",
    testimonial:
      "Great pricing and reliable service! I've rented cameras and drones multiple times—delivery is always timely, and the gear arrives in perfect condition. Would love to see even more model options in the future. Highly recommend for quality tech rentals!",
  },
  // Add more testimonials here
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
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-6 rounded-lg border border-gray-400 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.img}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.profession}</p>
        </div>
      </div>
      <p className="text-gray-500 italic">"{testimonial.testimonial}"</p>
      <div className="mt-4 flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
