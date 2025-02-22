import { motion } from "framer-motion";
import { FaWater, FaBolt, FaLeaf } from "react-icons/fa";

function Features() {
  // Animation variants
  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Features data
  const features = [
    {
      icon: <FaWater className="text-blue-600 text-6xl" />,
      title: "Advanced Filtration Technology",
      description:
        "Our cutting-edge horizontal membrane filtration system ensures the highest water purity. It effectively removes harmful contaminants such as bacteria, heavy metals, and microplastics, making water safer for drinking, irrigation, and industrial use.",
      bgGradient: "bg-gradient-to-r from-blue-100 to-indigo-200",
    },
    {
      icon: <FaBolt className="text-green-600 text-6xl" />,
      title: "Hydro Power Generation",
      description:
        "Utilizing the natural flow of water, our hydro power generation system converts kinetic energy into renewable electricity. This eco-friendly innovation supports sustainable agricultural practices, reducing dependence on non-renewable energy sources and lowering carbon footprints.",
      bgGradient: "bg-gradient-to-r from-green-100 to-teal-200",
    },
    {
      icon: <FaLeaf className="text-purple-600 text-6xl" />,
      title: "Enhanced Ecosystem & Biodiversity",
      description:
        "By promoting cleaner water and reducing pollutants, our system fosters a thriving ecosystem. Improved water quality leads to healthier aquatic life, increased biodiversity, and a more balanced natural environment that benefits both wildlife and human communities.",
      bgGradient: "bg-gradient-to-r from-purple-100 to-pink-200",
    },
  ];

  return (
    <motion.div
      className="p-12 bg-white min-h-screen flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <motion.h2
        className="text-5xl font-bold text-gray-900 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Key Features & Innovations
      </motion.h2>

      {/* Features List */}
      <motion.ul
        className="space-y-8 max-w-4xl w-full"
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className={`p-8 ${feature.bgGradient} rounded-lg shadow-lg flex items-center space-x-8 transform transition duration-300 hover:scale-105`}
            variants={listItemVariants}
          >
            {/* Feature Icon */}
            <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-xl">
              {feature.icon}
            </div>
            {/* Feature Text Content */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-700 mt-3 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Features;
