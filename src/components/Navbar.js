"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full z-50 font-semibold fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 flex justify-between items-center h-[70px]">
        <div className="flex-shrink-0">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-12 w-auto object-contain"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-10 justify-center flex-1">
          <Link
            href="/"
            className="text-[#0E1B3D] hover:text-[#E73878] font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/service"
            className="text-[#0E1B3D] font-bold hover:text-[#E73878]"
            onClick={() => setIsMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            href="/about"
            className="text-[#0E1B3D] font-bold hover:text-[#E73878]"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/projects"
            className="text-[#0E1B3D] font-bold hover:text-[#E73878]"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/testimonials"
            className="text-[#0E1B3D] font-bold hover:text-[#E73878]"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
        </div>

        {/* Right - Desktop Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-[#0E1B3D] text-white px-5 py-2 rounded-md hover:bg-[#1c2b55] transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-6 space-y-4 shadow-md absolute top-[70px] w-full">
          <Link
            href="/"
            className="block text-black hover:text-[#FCA31A]"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/service"
            className="block text-black hover:text-[#FCA31A]"
            onClick={() => setIsMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            href="/blogs"
            className="block text-black hover:text-[#FCA31A]"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="block text-black hover:text-[#FCA31A]"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-[#0E1B3D] text-white px-5 py-2 rounded-md hover:bg-[#1c2b55] transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
