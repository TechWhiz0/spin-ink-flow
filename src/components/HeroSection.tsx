import { useEffect, useState } from "react";
import InkEffect from "./InkEffect";
import AnimatedFan from "./AnimatedFan";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Ink Effect */}
      <InkEffect />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-6xl mx-auto">
        {/* Hero Text */}
        <div 
          className={cn(
            "mb-16 transition-all duration-1200 transform",
            textVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          )}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
            <span className="block gradient-text">Creativity is</span>
            <span className="block text-foreground mt-2">my craft</span>
          </h1>
        </div>

        {/* Animated Fan */}
        <div className="w-full max-w-4xl">
          <AnimatedFan />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={cn(
              "absolute w-1 h-1 bg-foreground/20 rounded-full",
              "animate-pulse"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;