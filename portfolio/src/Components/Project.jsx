import React, { useEffect, useState } from 'react';
import { Pdata } from './ProjectData';
import '../Components/Modulel.css'

function Project() {
  const [data, setdata] = useState([]);
  const [More, setMore] = useState(false)

  const toggleContent = () => {
    setMore(!More);
  };

  useEffect(() => {
    setdata(Pdata);
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl text-center text-gray-800 mb-8 Heading">
          My Projects
        </h2>

        <div>
          <p className='justify-center mb-7 Heading'>Developed a React.js-based e-commerce website with product listing, cart management, user authentication, and API-powered search functionality. Used Redux and Tailwind CSS for state management and styling.Created a hospital management system with features like appointment booking, invoice generation, doctors' profiles, and animated sections using AOS and Tailwind CSS.and Many Project............
            {More && (
              <p>
                <span>1. Hospital management</span>
                <br />
                <span>2. E-commerce website</span>
                <br />
                <span>3. FoodZone website</span>
                <br />
                <span>4. Food ordering app</span>
              </p>
            )}


            <button onClick={toggleContent} className='text-orange-500 decoration-dotted' href="">

              {More ? "see Less" : "see More"}
            </button>
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through data */}
          {data.map((items, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={items.image}
                alt={items.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {items.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {items.description}
                </p>
                <div className="flex justify-center">
                  <a
                    href={items.link}
                    className="bg-orange-500 text-white px-16 py-2 rounded hover:bg-orange-700"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
