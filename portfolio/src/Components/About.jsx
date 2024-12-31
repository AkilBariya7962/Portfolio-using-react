import React from "react";
import img from '../assets/img/1734070900480.jpeg'

function AboutMe() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume.pdf"; // Update the path to your resume file
    link.download = "My_Resume.pdf"; // Set the file name
    link.click();
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* About Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl  text-gray-800 mb-4">About Me</h1>
        </div>
        <div className="flex flex-col md:flex-row  items-center gap-8">
          {/* Photo */}
          <div className="w-80 h-80 flex-shrink-0">
            <img
              src={img}
              alt="My Photo"
              className="w-full h-full object-cover rounded-3xl  shadow-lg border border-gray-300"
            />
          </div>

          {/* Description and Button */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Hi, I'm Akil Bariya
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I am a passionate developer with expertise in creating elegant and
              functional solutions. I specialize in front-end development and
              thrive on crafting user-friendly experiences.my skill is HTML , CSS , js ,ts, and stylish for Bootstrap , tailwind.........
            </p>
            <button
              onClick={handleResumeDownload}
              className="mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded-lg shadow-md transition duration-200"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Contact Me
          </h2>
          <form action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 rounded-lg shadow-md transition duration-200 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
