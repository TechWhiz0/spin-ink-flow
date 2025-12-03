import { useEffect, useState } from "react";
import Orb from "./ui/Orb";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto">
        {/* Orb Component - Behind the text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-0" style={{ width: '100%', height: '600px' }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={240}
            forceHoverState={false}
          />
        </div>

        {/* Hero Text - On top with higher z-index */}
        <div 
          className={cn(
            "relative z-50 transition-all duration-1200 transform",
            textVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          )}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
            <span className="block text-foreground">Graphic Design & UI Freelancer</span>
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-40">
        <div className="flex flex-col items-center text-muted-foreground">
          <div className="w-px h-12 bg-current opacity-30 mb-2"></div>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;