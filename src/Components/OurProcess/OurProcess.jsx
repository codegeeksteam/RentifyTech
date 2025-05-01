/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurProcess = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 60%",
        },
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 65%",
        },
      }
    );

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 65%",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  const steps = [
    {
      title: "Browse our Inventory",
      text: "Explore our diverse range of AV equipment available for rent.",
      number: "01",
    },
    {
      title: "Select your Equipment",
      text: "Choose the items you need and book them for the desired period.",
      number: "02",
    },
    {
      title: "Confirm and Reserve",
      text: "Our team ensures prompt delivery to your designated location.",
      number: "03",
    },
  ];

  return (
    <section className="relative lg:px-16 md:px-8 px-3 md:py-10 py-8 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
        <h2
          ref={titleRef}
          className="text-3xl text-black md:text-4xl font-bold"
        >
          Our Process
        </h2>
        <p ref={subtitleRef} className="mt-2 text-gray-600">
          Unleashing the Full Potential of Electronics
        </p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative bg-gradient-to-r from-gray-200 to-transparent p-8 rounded-lg shadow-lg w-full md:w-1/3 h-56 flex flex-col justify-center items-start text-left hover:scale-105 transition-transform duration-300"
          >
            <span
              className="absolute top-6 right-6 text-7xl font-bold opacity-50"
              style={{
                WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                color: "transparent",
              }}
            >
              {step.number}
            </span>
            <h3 className="text-xl font-bold text-black relative z-10">
              {step.title}
            </h3>
            <p className="text-gray-700 mt-2 relative z-10">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
