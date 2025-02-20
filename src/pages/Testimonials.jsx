import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kofi Boateng",
      role: "Local Farmer, Volta Region",
      text: "Before this project, our rivers were heavily polluted, and fishing was almost impossible. Now, the water is clean, fish are returning, and farming along the banks is thriving again. My cocoa and maize farms are yielding better crops due to improved irrigation.",
      image: "/test1.webp", // Use local Black images
    },
    {
      name: "Adwoa Mensah",
      role: "Small Business Owner, Kumasi",
      text: "I run a restaurant near Lake Bosomtwe. Before, the dirty water kept tourists away, but now, visitors come to see the clean riverbanks and enjoy fresh fish. My sales have increased by 40%, and our community is proud of this transformation.",
      image: "/test2.webp",
    },
    {
      name: "Nana Kwame Ofori",
      role: "Traditional Leader, Eastern Region",
      text: "As a custodian of the land, I have seen our sacred rivers degrade over time. Thanks to this initiative, our people have renewed respect for nature. We now hold community clean-up events, and young people are learning traditional fishing methods again.",
      image: "/test3.webp",
    },
    {
      name: "Efua Addai",
      role: "Teacher & Environmental Advocate, Accra",
      text: "I teach at a primary school in Accra, and I’ve incorporated water conservation into our lessons. Students now understand the importance of keeping our rivers clean. This project has inspired the next generation to take care of our environment.",
      image: "/test5.webp",
    },
    {
      name: "Yaw Agyemang",
      role: "Fisherman, Cape Coast",
      text: "For years, plastic waste choked our waters, making fishing nearly impossible. But now, with the river restoration, we can cast our nets and catch fresh fish without worrying about pollution. My income has doubled, and my children can now attend school without struggles.",
      image: "/test1.webp",
    },
    {
      name: "Abdul Rashid",
      role: "Health Worker, Tamale",
      text: "Waterborne diseases like cholera were common in our region. Since the restoration, we have seen a drastic decline in cases. Clean water means healthier families, and healthier families mean stronger communities. This project is a life-saver.",
      image: "/test4.webp",
    },
  ];

  return (
    <motion.div
      className="container mx-auto px-6 py-12 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl font-bold text-green-700 text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Voices from Ghana: Testimonials
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Discover how the river revival project is transforming lives across
        Ghana—restoring livelihoods, improving health, and empowering
        communities for a sustainable future.
      </motion.p>

      <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 bg-green-50 rounded-lg shadow-md text-center flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 shadow-md object-cover"
            />
            <p className="italic text-gray-700 mb-4">"{testimonial.text}"</p>
            <h3 className="text-lg font-semibold text-gray-800">
              {testimonial.name}
            </h3>
            <span className="text-sm text-gray-600">{testimonial.role}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Testimonials;
