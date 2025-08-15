"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0E1B3D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div>
          <div className="flex items-center mb-4">
            {/* <img src="/logo.png" alt="BitsyStack Logo" className="h-10 mr-2" /> */}
            <span className="text-3xl font-bold text-white">BitsyStack</span>
          </div>
          <p className="text-sm">
            BitsyStack is a space where people build lasting relationships with
            the brands they trust, both online and offline.
          </p>
          <div className="flex space-x-4 mt-4 text-white">
            <Link
              href="#"
              className="hover:text-[#E73878] transition-colors duration-300"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="hover:text-[#E73878] transition-colors duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              className="hover:text-[#E73878] transition-colors duration-300"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/company/bitsystack/"
              className="hover:text-[#E73878] transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Web Development",
              "Mobile Applications",
              "UI/UX Design",
              "IT Consulting",
              "AI Solutions",
            ].map((service, i) => (
              <li
                key={i}
                className="hover:text-[#E73878] transition-colors duration-300 cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="hover:text-[#E73878] transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-[#E73878] transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="hover:text-[#E73878] transition-colors duration-300"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#E73878] transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
          <div className="flex items-start text-sm mb-2">
            <FaMapMarkerAlt className="mt-1 mr-2 text-white" />
            <span>Patna, Bihar</span>
          </div>
          <div className="flex items-start text-sm mb-2">
            <FaPhoneAlt className="mt-1 mr-2 text-white" />
            <span>+91-9297721744</span>
          </div>
          <div className="flex items-start text-sm mb-2">
            <FaEnvelope className="mt-1 mr-2 text-white" />
            <span>bitsystack@gmail.com</span>
          </div>
          <div className="flex items-start text-sm">
            <FaClock className="mt-1 mr-2 text-white" />
            <span>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="border-t border-white mx-6" />

      {/* Bottom section */}
      <div className="bg-[#0E1B3D] text-white text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} BitsyStack. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
