import React from "react";
import { ArrowUp } from "lucide-react";
import InfiniteScrollText from "./InfiniteScrollText";

const ScrollDesign: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Navigation Elements */}
      <div className="absolute left-16 top-8 z-10">
        <div className="flex flex-col items-start space-y-2">
          
          <a
            href="#"
            className="text-lg text-black underline hover:text-gray-600 transition-colors"
          >
            view archive
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8 relative">
        {/* Gray Band with Pattern */}
        <div className="relative w-full max-w-6xl mb-8 z-10">
          <div className="h-32 bg-gray-100 relative overflow-hidden">
            {/* Subtle wavy pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,0,0,0.05)_0%,transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.03)_0%,transparent_50%)]"></div>
            </div>

            {/* Number indicator */}
            <div className="absolute top-4 left-8 text-2xl text-gray-400 font-light">
              01
            </div>
          </div>
        </div>

        {/* Infinite Scrolling Text - Overlapping Effect */}
        <div
          className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
          style={{ width: "100vw", maxWidth: "100%" }}
        >
          <InfiniteScrollText
            text="OPEN/                    ABOUT/                    PROJECTS/                    CONTACT/"
            className="text-center whitespace-pre"
          />
        </div>
      </div>

      {/* Rounded Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white">
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-black rounded-t-[50%]"></div>
      </div>
    </div>
  );
};

export default ScrollDesign;
