import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const benefits = [
  { label: "Improved Water Quality", value: 85, color: "text-blue-600" },
  { label: "Increased Biodiversity", value: 75, color: "text-green-600" },
  { label: "Job Creation & Economic Growth", value: 90, color: "text-orange-600" },
];

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === value) clearInterval(interval);
    }, 20); // Adjust speed
    return () => clearInterval(interval);
  }, [value]);

  return <span className="font-bold text-3xl md:text-4xl lg:text-5xl">{count}%</span>;
};

const Benefits = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-center p-6 rounded-lg shadow-lg">
      {benefits.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg w-full sm:w-[30%] lg:w-[28%]"
        >
          <Counter value={item.value} />
          <p className={`text-lg md:text-xl font-semibold ${item.color} mt-2`}>{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Benefits;
