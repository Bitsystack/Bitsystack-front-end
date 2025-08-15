"use client";

import { CheckCircle2 } from "lucide-react";
import StaticPageHeader from "../../components/StaticPageHeader";

const AboutUs = () => {
  return (
    <>
      <StaticPageHeader title="About Us" />

      {/* Main About Section */}
      <section className="bg-white py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src="/mission-img.png"
            alt="About Our Team"
            className="w-full h-auto rounded-3xl shadow-xl"
          />

          {/* Experience Box */}
          <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl px-6 py-4 flex gap-8 items-center w-11/12 max-w-sm">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#0E1B3D]">2+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-gray-300"></div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#0E1B3D]">98%</h3>
              <p className="text-sm text-gray-500">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="pt-14 md:pt-0">
          <h4 className="text-[#E73878] font-semibold uppercase mb-2 tracking-wider">
            About Us
          </h4>
          <h2 className="text-4xl font-bold mb-4 text-[#0E1B3D] leading-snug">
            Empowering your business with <br />
            <span className="text-[#E73878]">agility</span>,{" "}
            <span className="text-[#E73878]">innovation</span>, &{" "}
            <span className="text-[#E73878]">speed</span>
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            At <span className="font-medium text-[#E73878]">BitsyStack</span>,
            we don’t just build products—we build possibilities. Our mission is
            to turn your ideas into powerful digital solutions that move your
            business forward.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            With a client-first mindset and a passion for innovation, we deliver
            tailored software, reliable infrastructure, and engaging user
            experiences that meet real-world needs and future goals.
          </p>

          {/* Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Custom software development",
              "Cloud infrastructure",
              "User experience design",
              "Digital transformation",
              "Mobile app development",
              "IT strategy consulting",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-800">
                <CheckCircle2 className="text-[#E73878] w-5 h-5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="/about"
            className="inline-block bg-[#E73878] text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#0E1B3D]">
            Why <span className="text-[#E73878]">Choose Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            From ideation to execution, we’re with you every step of the way.
            Here’s what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Expert Team",
              desc: "Our developers, designers, and project managers bring top-tier expertise to your project.",
            },
            {
              title: "Client First",
            },
            {
              title: "End-to-End Solutions",
              desc: "Whether it’s mobile, web, or backend — we’ve got everything covered.",
            },
          ].map((box) => (
            <div
              key={box.title}
              className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#0E1B3D]">
                {box.title}
              </h3>
              <p className="text-gray-600">{box.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center bg-[#0E1B3D] text-white">
        <h2 className="text-4xl font-bold mb-4">
          Let’s <span className="text-[#E73878]">Build</span> Together
        </h2>
        <p className="max-w-xl mx-auto mb-6 text-gray-200">
          Have a project in mind? Let's connect and make your vision a reality.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#E73878] text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-all"
        >
          Contact Us
        </a>
      </section>
    </>
  );
};

export default AboutUs;
