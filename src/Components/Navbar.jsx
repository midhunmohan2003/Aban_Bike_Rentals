import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/blgLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#0B132B]/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 sm:px-6 py-3 md:py-4 overflow-hidden">
        {/* Logo + Name */}
        <Link to="/">
          <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
            <img
              src={logo}
              alt="Logo"
              className="w-14 sm:w-16 h-auto object-contain"
            />
            <span className="whitespace-nowrap select-none text-2xl sm:text-3xl font-bold">
              <span className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">
                Brightline
              </span>
              <span className="text-[#00F5A0] drop-shadow-[0_0_6px_rgba(0,245,160,0.5)] ml-1">
                Global
              </span>
              <span className="text-gray-300 text-sm ml-1">LLC</span>
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 font-medium text-white">
          <Link to="/">
            <li className="hover:text-[#00F5A0]  cursor-pointer transition">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-[#00F5A0] cursor-pointer transition">
              About
            </li>
          </Link>
          <Link to="/services">
            <li className="hover:text-[#00F5A0] cursor-pointer transition">
              Services
            </li>{" "}
          </Link>
          <Link to="/gallery">
            <li className="hover:text-[#00F5A0] cursor-pointer transition">
              Gallery
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-[#00F5A0] cursor-pointer transition">
              Contact
            </li>
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer text-2xl text-white"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#0B132B]/95 backdrop-blur-md text-white flex flex-col items-center space-y-5 py-6 font-medium transition-all duration-300">
          <Link to="/">
            <li className="hover:text-[#00F5A0] cursor-pointer transition">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-[#00F5A0] cursor-pointer transition">
              About
            </li>
          </Link>
          <Link to="/services">
            {" "}
            <li className="hover:text-[#00F5A0] cursor-pointer transition">
              Services
            </li>
          </Link>
          <Link to="/gallery">
            <li className="hover:text-[#00F5A0] cursor-pointer transition">
              Gallery
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-[#00F5A0] cursor-pointer transition">
              Contact
            </li>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
