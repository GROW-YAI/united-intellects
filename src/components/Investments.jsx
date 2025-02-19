import { motion } from "framer-motion";
import { FaLeaf, FaHandHoldingUsd, FaGlobeAfrica, FaSeedling, FaHandshake, FaUsers } from "react-icons/fa";

const Investment = () => {
  return (
    <motion.div 
      className="mt-10 p-10 bg-green-50 rounded-lg shadow-lg max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-800 mb-3">
          Invest in a Sustainable Future 🌱
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Become part of a movement that restores Ghana's rivers, empowers communities, and drives sustainable growth.
          Your investment today secures a greener tomorrow.
        </p>
      </header>

      {/* Investment Benefits Section */}
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaLeaf className="text-green-600 text-5xl mb-3" />
          <h3 className="text-xl font-bold text-gray-800">Environmental Impact</h3>
          <p className="text-gray-600 mt-2">
            Restore biodiversity, improve water quality, and protect ecosystems for future generations.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaHandHoldingUsd className="text-yellow-500 text-5xl mb-3" />
          <h3 className="text-xl font-bold text-gray-800">Profitable Returns</h3>
          <p className="text-gray-600 mt-2">
            Sustainable investments offer long-term financial and environmental rewards.
          </p>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaGlobeAfrica className="text-blue-600 text-5xl mb-3" />
          <h3 className="text-xl font-bold text-gray-800">Community Growth</h3>
          <p className="text-gray-600 mt-2">
            Empower farmers, create jobs, and uplift local economies through green initiatives.
          </p>
        </motion.div>
      </div>

      {/* Investment Opportunities Section */}
      <section className="mt-14">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
          Why Invest With Us?
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaSeedling className="text-green-700 text-5xl mb-3" />
            <h3 className="text-xl font-bold text-gray-800">Sustainable Agriculture</h3>
            <p className="text-gray-600 mt-2">
              Support eco-friendly farming techniques that improve productivity while preserving nature.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaHandshake className="text-orange-600 text-5xl mb-3" />
            <h3 className="text-xl font-bold text-gray-800">Strong Partnerships</h3>
            <p className="text-gray-600 mt-2">
              Collaborate with local organizations and governments for impactful projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="mt-14 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
          Our Impact So Far 🌍
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-5xl font-bold text-green-700">100+</span>
            <p className="text-gray-600">Rivers Restored</p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-5xl font-bold text-yellow-500">500+</span>
            <p className="text-gray-600">Jobs Created</p>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="text-5xl font-bold text-blue-600">50,000+</span>
            <p className="text-gray-600">Lives Impacted</p>
          </motion.div>
        </div>
      </section>

      {/* Call-to-Action */}
      <div className="mt-10 text-center">
        <motion.button
          className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          Become an Investor 🚀
        </motion.button>
      </div>

      {/* Testimonial Section */}
      <section className="mt-16 p-8 bg-gray-100 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">What Our Investors Say</h2>
        <motion.div
          className="text-lg text-gray-700 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          “Investing in sustainable projects with this initiative has not only boosted my portfolio but also made me feel part of something bigger. I see real change happening.”  
          <br /> <strong>- Kwame A., Ghana</strong>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Investment;
