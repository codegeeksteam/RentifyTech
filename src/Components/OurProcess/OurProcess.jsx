/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const OurProcess = () => {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl text-black md:text-4xl font-bold"
        >
          Our Process
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-2 text-gray-600"
        >
          Unleashing the Full Potential of Electronics
        </motion.p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mt-8 px-4">
        {/** Process Steps */}
        {[
          { title: "Browse our Inventory", text: "Explore our diverse range of AV equipment available for rent.", number: "01" },
          { title: "Select your Equipment", text: "Choose the items you need and book them for the desired period.", number: "02" },
          { title: "Confirm and Reserve", text: "Our team ensures prompt delivery to your designated location.", number: "03" },
        ].map((step, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gradient-to-r from-gray-200 to-transparent p-8 rounded-lg shadow-lg w-full md:w-1/3 h-56 flex flex-col justify-center items-start text-left"
          >
            <span className="absolute top-6 right-6 text-7xl font-bold opacity-50"style={{ WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)", color: "transparent" }}>
              {step.number}
            </span>
            <h3 className="text-xl font-bold text-black relative z-10">{step.title}</h3>
            <p className="text-gray-700 mt-2 relative z-10">{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
