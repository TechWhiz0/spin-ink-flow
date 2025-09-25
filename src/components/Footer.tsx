import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white min-h-screen flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 relative z-10">
        {/* Central Container with Soft Rounded Corners and Border */}
        <div
          className="border border-gray-300 rounded-3xl p-12 max-w-7xl w-full text-center relative"
          style={{ backgroundColor: "#101010" }}
        >
          {/* Bold Centered Headline */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Got a project in mind?
          </h2>

          {/* Larger Uppercase Text */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold uppercase mb-16 text-white tracking-tight leading-none">
            LET'S CONNECT
          </h1>

          {/* Circular Button with Outline */}
          <div className="flex justify-center mb-16">
            <button className="w-56 h-56 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
              <span className="text-xl font-medium text-white group-hover:text-black transition-colors">
                Send a Message
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Minimal Social Section */}
      <div className="px-8 mb-8 pb-12 bg-black relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left Label */}
            <div className="text-xl font-medium uppercase tracking-wider text-white">
              FIND ME ON SOCIAL
            </div>

            {/* Social Links with Horizontal Spacing */}
            <div className="flex gap-8">
              <a
                href="#"
                className="text-xl font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black px-6 py-3 rounded-full transition-all duration-300"
              >
                INSTAGRAM
              </a>
              <a
                href="#"
                className="text-xl font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black px-6 py-3 rounded-full transition-all duration-300"
              >
                LINKEDIN
              </a>
              <a
                href="#"
                className="text-xl font-medium uppercase tracking-wider text-white hover:bg-white hover:text-black px-6 py-3 rounded-full transition-all duration-300"
              >
                ARTSTATION
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* White Curved Effect at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-black rounded-t-[50%]"></div>
      </div>
    </footer>
  );
};

export default Footer;
