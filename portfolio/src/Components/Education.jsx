import React, { useState, useEffect } from 'react';
import { Edata } from './EducationData';

function Education() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    setData(Edata);
  }, []);

  const handleDownload = (fileUrl) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop();
    link.click();
  };

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className=""></div>

      {/* Glass Effect Section */}
      <div className="relative z-10 bg-gradient-to-bl from-white to-white py-14 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-center text-4xl mb-12 text-black ">
            <span className='text-or'>Ed</span>ucation
          </h3>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {Data.map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 border border-gray-300 border-opacity-50"
              >
                {/* Left Side - Image */}
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={item.img}
                    alt="University Logo"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Right Side - Details */}
                <div className="flex flex-col justify-center w-full">
                  <h4 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h4>
                  <p className="text-lg text-gray-600 mb-4">{item.location}</p>
                  <p className="text-gray-500 mb-4">{item.year}</p>

                  {/* Progress Bar */}
                  <div className="bg-gray-200 rounded-full h-4 w-full relative">
                    <div
                      className="bg-orange-500 h-4 rounded-full"
                      style={{ width: `${item.result}%` }}
                    />
                    <span
                      className="absolute top-0 text-sm font-bold"
                      style={{
                        left: `${item.result}%`,
                        transform: 'translateX(-50%) translateY(-150%)',
                      }}
                    >
                      {item.result}%
                    </span>
                  </div>

                  {/* Download Button */}
                  {item.certificate ? (
                    <button
                      onClick={() => handleDownload(item.certificate)}
                      className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-1 px-4 rounded-lg transition duration-200 w-52 text-center"
                    >
                      Download Certificate
                    </button>
                  ) : (
                    <p className="mt-6 text-gray-600">No certificate available</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
