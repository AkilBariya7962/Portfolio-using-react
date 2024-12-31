import React from 'react';
import logo from '../assets/img/logo_default.png';
import { Link, useLocation } from 'react-router-dom';
import './Custom.css'

function Footer() {
  const location = useLocation();

  // Function to handle navigation and scroll
  const handleHomeClick = (e) => {
    if (location.pathname == '/') {
      // Prevent default navigation if already on the home page
      e.preventDefault();
      // Scroll to the top
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling
      });
    }
  };

  return (
    <footer className="bg-black text-gray-200 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <img className="w-48" src={logo} alt="Logo" />
          <br />
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            Hello... <br /> My name is Akil Bariya, and I am a Front-End Developer specializing in React.js, Vue.js, HTML, and CSS.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                onClick={handleHomeClick} // Attach scroll logic
                className="hover:text-orange-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/project" className="hover:text-orange-500">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500"
            >
              <i className="fab fa-facebook-f new"></i>
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400"
            >
              <i className="fab fa-twitter new"></i>
            </Link>
            <Link
              to="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <i className="fab fa-github new"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} created by Akil All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
