import { motion } from "framer-motion";
import notFoundImage from "/404.webp"; // Replace with the correct path

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <motion.img
        src={notFoundImage}
        alt="404 Not Found"
        className="w-80 h-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.h1
        className="text-4xl font-bold text-red-600 mt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        404 - Page Not Found
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 mt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Oops! Looks like you took a wrong turn.
      </motion.p>
      <motion.a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Go Home
      </motion.a>
    </div>
  );
};

export default NotFound;
