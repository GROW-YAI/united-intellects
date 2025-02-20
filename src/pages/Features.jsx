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
      icon: <FaWater className="text-blue-500 text-5xl" />,
      title: "Advanced Filtration Technology",
      description: "Uses horizontal membrane filtration to enhance water purity, removing contaminants effectively.",
      bgGradient: "bg-gradient-to-r from-blue-50 to-indigo-50",
    },
    {
      icon: <FaBolt className="text-green-500 text-5xl" />,
      title: "Hydro Power Generation",
      description: "Harnesses the power of flowing water to generate renewable energy for sustainable agricultural processes.",
      bgGradient: "bg-gradient-to-r from-green-50 to-teal-50",
    },
    {
      icon: <FaLeaf className="text-purple-500 text-5xl" />,
      title: "Enhanced Ecosystem & Biodiversity",
      description: "Promotes improved water quality and biodiversity, ensuring a balanced and healthy environment.",
      bgGradient: "bg-gradient-to-r from-purple-50 to-pink-50",
    },
  ];

  return (
    <motion.div
      className="p-10 bg-white min-h-screen flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Key Features
      </motion.h2>

      <motion.ul
        className="space-y-6 max-w-3xl w-full"
        initial="hidden"
        animate="visible"
      >
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className={`p-6 ${feature.bgGradient} rounded-lg shadow-md flex items-center space-x-6`}
            variants={listItemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Features;
