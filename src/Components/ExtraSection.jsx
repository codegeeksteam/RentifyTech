/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const ExtraSection = () => {
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
          <img src="" alt="Setup" className="w-full rounded-lg shadow-lg" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">
            By seamlessly combining engineering and design to create a unique
            experience
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Creating a customized design plan that meets the client's
              preferences and specifications.
            </li>
            <li>
              Renovating or updating an existing kitchen to improve its
              functionality and aesthetics.
            </li>
            <li>
              Expert installation of kitchen islands, countertops, cabinets, and
              other features.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtraSection;
