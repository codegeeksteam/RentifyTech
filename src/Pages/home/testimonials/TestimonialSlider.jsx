import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: "MD. Sirazul Islam",
      position: "CEO, Company",
      image: "https://i.ibb.co.com/0fpSpQd/miraz.jpg", // Using placeholder as we can't use external images
      text: "The quality of service provided exceeded all my expectations. Their team was professional, responsive, and delivered exactly what we needed. I'm thoroughly impressed with their attention to detail and commitment to excellence.",
      rating: 4.5
    },
    {
      id: 2,
      name: "Jhonny Deep",
      position: "CEO, Company",
      image: "https://i.ibb.co.com/Vx3k8Xt/download-7.jpg", // Using placeholder as we can't use external images
      text: "Working with this team was an absolute pleasure. They understood our requirements perfectly and delivered a solution that perfectly matched our vision. Their expertise and customer service are unmatched in the industry.",
      rating: 4.5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto slide effect
  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('prev');
    
    setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    }, 200);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('next');
    
    setTimeout(() => {
      const isLastSlide = currentIndex === testimonials.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    }, 200);
  };

  const goToSlide = (slideIndex) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(slideIndex > currentIndex ? 'next' : 'prev');
    
    setTimeout(() => {
      setCurrentIndex(slideIndex);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 800);
    }, 200);
  };

  const currentTestimonial = testimonials[currentIndex];

  // Animation classes based on direction
  const slideAnimationClass = isAnimating 
    ? direction === 'next' 
      ? 'animate-slide-out-left opacity-0 scale-90 rotate-3' 
      : 'animate-slide-out-right opacity-0 scale-90 -rotate-3'
    : 'animate-slide-in opacity-100 scale-100 rotate-0 shadow-2xl';

  return (
    <div className="mx-auto px-4 md:py-10 py-8 w-full relative overflow-hidden lg:px-16 md:px-8">
      <div className="absolute w-full h-full top-0 left-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 right-1/4 w-36 h-36 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-full mx-auto relative z-10">
        <div className="mb-8 text-center">
          <p className="text-gray-600 font-medium">Testimonial</p>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-800 bg-clip-text text-transparent">What Customers Are Saying</h2>
        </div>
        
        <div className="relative h-[400px] flex items-center justify-center">
          {/* Main Testimonial Card */}
          <div 
            className={`w-full lg:px-32 md:px-16 rounded-xl p-8 relative border border-gray-200 backdrop-blur-sm bg-white/80 
              transition-all duration-1000 transform ${slideAnimationClass}`}
            style={{
              boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.2), 0 0 20px -5px rgba(0, 0, 0, 0.1)',
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
          >
            {/* Quote Icon Top Left */}
            <div className="absolute -top-5 -left-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white transform hover:scale-110 transition-transform">
              <FaQuoteLeft className="text-sm" />
            </div>
            
            {/* Center Profile Image */}
            <div className="flex justify-center lg:px-20 mb-6 transform hover:rotate-y-12 transition-transform duration-500">
              <div className="w-24 h-24 rounded-full border-4 border-blue-500 overflow-hidden shadow-lg" 
                style={{
                  transform: 'translateZ(20px)',
                  boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.3)'
                }}>
                <img 
                  src={currentTestimonial.image} 
                  alt={currentTestimonial.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Testimonial Text */}
            <div className="mb-6">
              <p className="text-gray-600 text-base text-center leading-relaxed"
                style={{ transform: 'translateZ(10px)' }}>
                {currentTestimonial.text}
              </p>
            </div>
            
            {/* User Info and Rating */}
            <div className="flex justify-between items-end">
              <div className="flex-1"></div> {/* Empty space on left */}
              
              <div className="flex flex-col items-end"
                style={{ transform: 'translateZ(15px)' }}>
                <h4 className="font-bold text-blue-900 text-lg">{currentTestimonial.name}</h4>
                <p className="text-sm text-gray-500">{currentTestimonial.position}</p>
                
                {/* Star Rating */}
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(currentTestimonial.rating) ? 'text-yellow-400' : i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ 
                        filter: i < Math.floor(currentTestimonial.rating) ? 'drop-shadow(0 0 2px rgba(250, 204, 21, 0.4))' : 'none',
                        transform: `translateZ(${25 - i * 2}px)` 
                      }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Quote Icon Bottom Right */}
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white transform hover:scale-110 transition-transform">
              <FaQuoteRight className="text-sm" />
            </div>
          </div>

          {/* Left Arrow */}
          <div 
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white cursor-pointer hover:from-blue-700 hover:to-blue-600 transition-colors shadow-lg hover:scale-105"
            onClick={goToPrevious}
            style={{ zIndex: 20 }}
          >
            <FaChevronLeft className="text-lg" />
          </div>
          
          {/* Right Arrow */}
          <div 
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-colors shadow-lg hover:scale-105"
            onClick={goToNext}
            style={{ zIndex: 20 }}
          >
            <FaChevronRight className="text-lg" />
          </div>
        </div>
        
        {/* Dots Navigation */}
        <div className="flex justify-center mt-8">
          {testimonials.map((testimonial, slideIndex) => (
            <div
              key={testimonial.id}
              className={`w-4 h-4 rounded-full mx-2 cursor-pointer transition-all duration-300 ${
                slideIndex === currentIndex 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 scale-110 shadow-md' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => goToSlide(slideIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}