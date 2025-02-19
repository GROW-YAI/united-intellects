function Contact() {
    return (
      <div className="p-10 bg-white min-h-screen">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <form className="mt-4">
          <input type="text" placeholder="Your Name" className="block p-2 w-full border rounded-md mb-2" />
          <input type="email" placeholder="Your Email" className="block p-2 w-full border rounded-md mb-2" />
          <textarea placeholder="Your Message" className="block p-2 w-full border rounded-md mb-2"></textarea>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  