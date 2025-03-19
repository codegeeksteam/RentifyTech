/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const ExpertInstallation = () => {
  return (
    <section className="relative py-12 bg-gray-100 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 relative"
        >
          <img 
            src="/your-image.png" 
            alt="Setup" 
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg relative"
        >
          <div className="absolute -top-6 left-6 bg-white px-4 py-2 shadow-md rounded-md">
            <h2 className="text-xl font-bold">Expert Installation</h2>
          </div>
          <p className="text-gray-600 mt-6">
          With years of experience and technical expertise, our installation team ensures a flawless execution of your project. We meticulously measure, cut, and install every piece with precision, paying attention to even the smallest details.
          </p>
          <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition">
            Explore Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertInstallation;