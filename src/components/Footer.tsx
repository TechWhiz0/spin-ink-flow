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
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold uppercase mb-8 text-white tracking-tight leading-none">
            LET'S CONNECT
          </h1>

          {/* Email Address */}
          <p className="text-xl md:text-2xl text-white/80 mb-16">
            r2garhyan@gmail.com
          </p>

          {/* Circular Button with Outline */}
          <div className="flex justify-center mb-16">
            <button
              type="button"
              onClick={() => window.open("mailto:r2garhyan@gmail.com", "_blank")}
              className="w-56 h-56 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer"
            >
              <span className="text-xl font-medium text-white group-hover:text-black transition-colors">
                Send a Message
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
