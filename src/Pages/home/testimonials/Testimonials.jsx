import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Shakib Haldar',
      img: 'https://i.pinimg.com/736x/03/86/a2/0386a273635977141fad2abac149abd9.jpg',
      profession: 'Entrepreneur',
      testimonial:
        'Great pricing and reliable service. I rented cameras and drones a few times. Delivery is timely, and products are in great condition. Would love to see more model options available. Overall, a solid choice!',
    },
    {
      name: 'Evanul Haque',
      img: 'https://i.pinimg.com/736x/3b/1b/b5/3b1bb542fe47e9071103e8f3fd7d5fd0.jpg',
      profession: 'Content Creator',
      testimonial:
        'Rentify Tech provided excellent service! I rented a laptop, and it arrived on time in perfect condition. The website was easy to use, and customer support was very responsive. Highly recommend!',
    },
    {
      name: 'Samir Khan',
      img: 'https://i.pinimg.com/736x/f2/3e/80/f23e80aa657ac661d6d7d8c99b0065f3.jpg',
      profession: 'Student',
      testimonial:
        'Rentify Tech is fantastic! Rented a high-end camera and mic setup for my project. Everything arrived as promised, with clear instructions. The return process was smooth. I’ll definitely rent from them again!',
    },
  ];

  return (
    <div className="container py-8 px-2 flex flex-col gap-4 mx-auto text-center">
      <h1 className="text-4xl font-bold ">Testimonials</h1>
      <h3 className="text-md mb-3 text-gray-600">
        We don’t just Rent Products
        We Build Relationships!
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between flex-grow">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="mid p-4 border-b-4 border-r-4 text-left border rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.profession}</p>
              </div>
            </div>
            <p className="mt-3">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;