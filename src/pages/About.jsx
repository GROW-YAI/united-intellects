const About = () => {
    return (
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-green-700 text-center">About United Intellects</h2>
        <p className="mt-6 text-lg md:text-xl text-gray-700 text-center">
          United Intellects is dedicated to environmental restoration, sustainable energy, and community empowerment. 
          Our mission is to revitalize degraded river ecosystems while generating clean energy solutions, ensuring a harmonious balance between nature and human development.
        </p>
  
        {/* Background Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-8">
          <img 
            src="/images/background.jpg" 
            alt="Background" 
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700">Our Background</h3>
            <p className="mt-4 text-lg md:text-xl text-gray-700">
              Established by a team of environmentalists, engineers, and visionaries, United Intellects emerged as a response to the increasing degradation of river ecosystems worldwide. 
              We merge environmental conservation with modern technology to restore rivers and harness clean energy for communities.
            </p>
          </div>
        </div>
  
        {/* Mission Section */}
        <div className="mt-12 flex flex-col md:flex-row-reverse items-center gap-8">
          <img 
            src="/images/mission.jpg" 
            alt="Mission" 
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700">Our Mission</h3>
            <ul className="list-disc ml-6 mt-2 text-lg md:text-xl text-gray-700 space-y-2">
              <li>Revive polluted and degraded river ecosystems</li>
              <li>Introduce innovative hydro-based energy solutions</li>
              <li>Promote biodiversity conservation and ecological balance</li>
              <li>Empower local communities through sustainable development</li>
              <li>Foster global partnerships for environmental restoration</li>
            </ul>
          </div>
        </div>
  
        {/* Why It Matters Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-8">
          <img 
            src="/images/why-it-matters.jpg" 
            alt="Why It Matters" 
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-green-700">Why It Matters</h3>
            <p className="mt-4 text-lg md:text-xl text-gray-700">
              The degradation of water bodies has led to severe consequences, including biodiversity loss, water scarcity, and climate instability. 
              United Intellects tackles these issues head-on with **practical, scalable, and community-driven solutions** that restore rivers, enhance livelihoods, and pave the way for a greener future.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  