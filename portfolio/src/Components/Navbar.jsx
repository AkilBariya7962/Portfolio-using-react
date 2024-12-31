import React, { useState, useEffect } from 'react';
import logodefault from '../assets/img/logo_default.png';
import logoscroll from '../assets/img/logo_scroll.png';
import homeBg from '../assets/img/back.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navbarBg ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="w-36 sm:w-44 md:w-55 lg:w-67">
            <img
              src={navbarBg ? logoscroll : logodefault}
              alt="Logo"
              className="w-full h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'Project', 'Education', 'About-Us', 'Contact'].map(
                (item, index) => (
                  <Link
                    key={index}
                    to={item.toLowerCase().replace('-', '')}
                    className={`px-3 py-2 text-sm font-medium ${navbarBg ? 'text-gray-800' : 'text-white'
                      } hover:border-b-2 border-orange-400`}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className={`p-2 rounded-md inline-flex items-center justify-center ${navbarBg ? 'bg-gray-200 text-gray-800' : 'text-orange-400'
                } hover:bg-gray-300`}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {['Home', 'Project', 'Education', 'About-Us', 'Contact'].map(
              (item, index) => (
                <Link
                  key={index}
                  to={item.toLowerCase().replace('-', '')}
                  className="block px-3 py-2 text-gray-800 text-sm font-medium hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

const HomePage = () => {
  return (
    <div id="home" className="h-screen relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${homeBg})` }}
      ></div>
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="max-w-8xl mt-12 p-6">
          <h1 className="text-4xl sm:text-5xl  md:text-6xl lg:text-6xl mb-4 w-full">
            Do something you love,
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8">
            While I <span className='text-orange-500'>Do</span> The Thinking For Your <span className='text-orange-500'>Business.</span>
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    </div>
  );
};


const Main = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
};

export default Main;
