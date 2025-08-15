"use client";
import React from "react";
import {
  FaBug,
  FaCloud,
  FaDesktop,
  FaPaintBrush,
  FaApple,
  FaAndroid,
  FaBullhorn,
  FaCog,
  FaPhoneAlt,
} from "react-icons/fa";
import StaticPageHeader from "../../components/StaticPageHeader";

const services = [
  // 💡 DESIGN SERVICES
  {
    title: "UI/UX Design",
    desc: "User-centric interface and experience design that blends functionality with visual appeal across all devices.",
    icon: (
      <div className="p-2 rounded-md inline-block">
        <FaPaintBrush className="h-6 w-6 text-[#E73878]" />
      </div>
    ),
  },

  // 💻 DEVELOPMENT SERVICES
  {
    title: "Website Development",
    desc: "We develop robust websites with responsive UI, secure backend, and SEO-optimized code to meet your business goals.",
    icon: (
      <div className="p-2 rounded-md inline-block">
        <FaDesktop className="h-6 w-6 text-[#E73878]" />
      </div>
    ),
  },
  {
    title: "iOS Development",
    desc: "We create seamless, intuitive, and high-performance iOS apps tailored to Apple devices using Swift and modern tools.",
    icon: (
      <div className=" p-2 rounded-md inline-block">
        <FaApple className="h-6 w-6 text-[#E73878]" />
      </div>
    ),
  },
  {
    title: "Android Development",
    desc: "We build scalable and feature-rich Android apps that offer superior user experience across all devices and screen sizes.",
    icon: (
      <div className="p-2 rounded-md inline-block">
        <FaAndroid className="h-6 w-6 text-[#E73878]" />
      </div>
    ),
  },
  {
    title: "CRM Development",
    desc: "We develop custom CRM solutions to streamline your sales, customer support, and relationship management processes.",
    icon: (
      <div className="p-2 rounded-md inline-block">
        <FaCog className="h-6 w-6 text-[#E73878]" />
      </div>
    ),
  },
  {
    title: "ERP Development",
    desc: "We build ERP systems that integrate all your business functions into a unified platform to increase efficiency and transparency.",
    icon: (
      <div className="p-2 rounded-md inline-block">
        <FaCog className="h-6 w-6 text-[#E73878]" />
      </div>
    ),
  },

  // 🤖 AI & AUTOMATION
  {
    title: "AI Solutions",
    desc: "Leverage AI for automation, intelligent decision-making, and predictive insights that drive growth.",
    icon: (
      <div className="p-2 rounded-md inline-block">
        <FaCog className="h-6 w-6 text-[#E73878]" />
      </div>
    ),
  },
  {
    title: "AI Chatbots",
    desc: "Enhance customer support and engagement with intelligent AI-powered chatbots available 24/7.",
    icon: (
      <div className="p-2 rounded-md inline-block">
        <FaAndroid className="h-6 w-6 text-[#E73878]" />
      </div>
    ),
  },

  // ☁️ INFRASTRUCTURE & TESTING
  {
    title: "Cloud Solutions",
    desc: "We offer scalable and secure cloud infrastructure, migration, and DevOps services to optimize performance and reduce costs.",
    icon: (
      <div className="p-2 rounded-md inline-block">
        <FaCloud className="h-6 w-6 text-[#E73878]" />
      </div>
    ),
  },
  {
    title: "Software Testing Service",
    desc: "We ensure your applications are secure, scalable, and bug-free through rigorous automated and manual testing processes.",
    icon: (
      <div className="p-2 rounded-md inline-block">
        <FaBug className="h-6 w-6 text-[#E73878]" />
      </div>
    ),
  },

  // 📣 MARKETING & CONSULTING
  {
    title: "Digital Marketing",
    desc: "We help you grow online through SEO, SEM, content marketing, and social media strategies tailored to your business.",
    icon: (
      <div className="p-2 rounded-md inline-block">
        <FaBullhorn className="h-6 w-6 text-[#E73878]" />
      </div>
    ),
  },
  {
    title: "IT Consulting",
    desc: "Strategic planning and IT implementation to align your technology with business goals.",
    icon: (
      <div className="p-2 rounded-md inline-block">
        <FaPhoneAlt className="h-6 w-6 text-[#E73878]" />
      </div>
    ),
  },
];

const Services = () => {
  return (
    <>
      <StaticPageHeader title="Services" />
      <div className="py-16 px-q bg-[#F9F9FF] text-center mx-auto">
        <h2 className="text-4xl font-bold text-[#0E1B3D] mb-4">
          <span className="text-[#E73878]">Our</span> Services
        </h2>
        <p className="max-w-2xl mx-auto text-[#0E1B3D] mb-10">
          Discover a wide range of services tailored to your business needs with
          cutting-edge technologies and expert solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-7xl mx-auto px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 cursor-pointer hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 bg-[#E73878]/10 rounded-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0E1B3D] mb-2 group-hover:text-[#E73878] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#0E1B3D] text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
