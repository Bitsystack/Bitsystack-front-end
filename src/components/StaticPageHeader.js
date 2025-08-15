"use client";

const StaticPageHeader = ({ title }) => {
  return (
    <div
      className="relative w-full h-[200px] md:h-[400px] lg:h-[250px] bg-center bg-no-repeat bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url("/heroImage.png")`,
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Title content */}
      <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold text-center px-4">
        {title}
      </h1>
    </div>
  );
};

export default StaticPageHeader;
