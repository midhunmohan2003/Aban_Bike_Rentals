import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-t from-[#0A0F1F] to-[#0F172A] text-gray-300 py-16 px-6"
      style={{ fontFamily: '"Exo 2", sans-serif' }}
    >
      <div className="container mx-auto grid gap-10 md:grid-cols-3">
        {/* Logo / Brand */}
        <div>
          <span className="whitespace-nowrap select-none text-2xl sm:text-3xl font-bold">
            <span className="text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">
              Brightline
            </span>
            <span className="text-[#00F5A0] drop-shadow-[0_0_6px_rgba(0,245,160,0.5)] ml-1">
              Global
            </span>
            <span className="text-gray-300 text-sm ml-1">LLC</span>
          </span>

          <p className="text-gray-400 max-w-sm">
            Providing quality electrical, plumbing, and maintenance services
            with professional expertise and reliability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-xl font-semibold text-teal-400 mb-4">
            Quick Links
          </h5>
          <ul className="space-y-2">
            <Link to="/">
              <li className="hover:text-teal-400 transition cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hover:text-teal-400 transition cursor-pointer">
                About Us
              </li>
            </Link>
            <Link to="/services">
              {" "}
              <li className="hover:text-teal-400 transition cursor-pointer">
                Services
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-teal-400 transition cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h5 className="text-xl font-semibold text-teal-400 mb-4">Contact</h5>
          <p className="mb-2">Phone: +96878026775</p>
          <p className="mb-4">Email: brightlinegloballlc@gmail.com</p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="p-3 rounded-full bg-[#1E294B] hover:bg-teal-400 hover:text-[#0F172A] transition"
            >
              <FaFacebookF />
            </a>
            {/* <a href="#" className="p-3 rounded-full bg-[#1E294B] hover:bg-teal-400 hover:text-[#0F172A] transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#1E294B] hover:bg-teal-400 hover:text-[#0F172A] transition">
              <FaInstagram />
            </a> */}
            <a
              href="#"
              className="p-3 rounded-full bg-[#1E294B] hover:bg-teal-400 hover:text-[#0F172A] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-teal-400/30 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BrightlineGlobal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
