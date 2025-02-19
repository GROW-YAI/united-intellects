import { FaLeaf, FaWater, FaBolt, FaPeopleCarry, FaGlobe } from "react-icons/fa";
import { GiRiver, GiEnergyTank } from "react-icons/gi";
import { MdOutlineRestore } from "react-icons/md";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-12">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-green-700 text-center flex items-center justify-center gap-3">
        <FaLeaf className="text-green-700" /> About Us
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-700 text-center">
        United Intellects is committed to restoring rivers, generating clean energy, and empowering communities.
      </p>

      {/* Background */}
      <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
        <img src="/bg1.webp" alt="Background" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-green-700 flex items-center gap-2">
            <GiRiver className="text-green-700" /> Our Story
          </h3>
          <p className="mt-2 text-lg text-gray-700">
            Founded by experts in conservation and technology, we integrate eco-restoration with modern energy solutions.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="mt-10 flex flex-col md:flex-row-reverse items-center gap-8">
        <img src="/bg3.webp" alt="Mission" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-green-700 flex items-center gap-2">
            <MdOutlineRestore className="text-green-700" /> Our Mission
          </h3>
          <ul className="list-none mt-2 text-lg text-gray-700 space-y-2">
            <li className="flex items-center gap-2"><FaWater className="text-blue-500" /> Restore degraded rivers</li>
            <li className="flex items-center gap-2"><GiEnergyTank className="text-yellow-500" /> Develop clean energy</li>
            <li className="flex items-center gap-2"><FaLeaf className="text-green-500" /> Protect biodiversity</li>
            <li className="flex items-center gap-2"><FaPeopleCarry className="text-orange-500" /> Support communities</li>
            <li className="flex items-center gap-2"><FaGlobe className="text-gray-600" /> Build global partnerships</li>
          </ul>
        </div>
      </div>

      {/* Why It Matters */}
      <div className="mt-10 flex flex-col md:flex-row items-center gap-8">
        <img src="/bg4.webp" alt="Why It Matters" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-green-700 flex items-center gap-2">
            <FaBolt className="text-green-700" /> Why It Matters
          </h3>
          <p className="mt-2 text-lg text-gray-700">
            Degraded rivers lead to biodiversity loss, water shortages, and climate issues. Our solutions restore nature and create a sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
