 /* eslint-disable no-unused-vars */
import { FaTools, FaPencilRuler, FaCogs, FaBoxOpen, FaLeaf, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  { icon: <FaTools size={40} />, title: "Unmatched Quality", desc: "Our team of professionals will help you plan, design, and install your dream kitchen." },
  { icon: <FaPencilRuler size={40} />, title: "Unique Designs", desc: "Experience the difference with our top-notch kitchen planning, custom design, and installation services." },
  { icon: <FaCogs size={40} />, title: "Extensive Material Range", desc: "Save time and effort with our efficient kitchen planning, custom design, and installation solutions." },
  { icon: <FaBoxOpen size={40} />, title: "Customization Options", desc: "Our team of professionals will help you plan, design, and install your dream kitchen." },
  { icon: <FaLeaf size={40} />, title: "Sustainable Sourcing", desc: "Experience the difference with our top-notch kitchen planning, custom design, and installation services." },
  { icon: <FaUserTie size={40} />, title: "Expert Guidance", desc: "Save time and effort with our efficient kitchen planning, custom design, and installation solutions." },
];

const rowVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, duration: 0.8, ease: "easeOut" } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const ServiceSection = () => {
  return (
    <section className="py-12 bg-gray-100 overflow-hidden">
      <div className="container mx-auto text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold"
        >
          Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-2 text-lg font-semibold"
        >
          Unleashing the Full Potential of Electronics
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-2 text-gray-600 max-w-2xl mx-auto"
        >
          Our commitment to excellence goes beyond delivering quality services. At our company, it’s not just about providing quality services – it’s about building lasting relationships.
        </motion.p>
        
        <motion.div 
          variants={rowVariants} 
          initial="hidden" 
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mt-10"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ scale: 1.15, rotateX: 15, rotateY: 15, boxShadow: "0px 20px 30px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 perspective-1000"
            >
              <motion.div 
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-primary mb-4"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 text-center mt-2">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
