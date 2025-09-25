import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const InkEffect = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Primary Ink Splash */}
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-90",
          isVisible ? "ink-effect" : "opacity-0"
        )}
        style={{ animationDelay: "0.2s" }}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full filter blur-sm"
          fill="none"
        >
          <path
            d="M200 50 C 120 80, 80 120, 50 200 C 80 280, 120 320, 200 350 C 280 320, 320 280, 350 200 C 320 120, 280 80, 200 50 Z"
            fill="url(#inkGradient)"
            className="animate-pulse"
          />
          <path
            d="M150 100 C 180 90, 220 90, 250 100 C 260 130, 260 170, 250 200 C 220 210, 180 210, 150 200 C 140 170, 140 130, 150 100 Z"
            fill="black"
            opacity="0.6"
          />
          <defs>
            <radialGradient id="inkGradient" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#333333" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Secondary Ink Elements */}
      <div
        className={cn(
          "absolute top-1/3 left-1/3 w-64 h-64 opacity-60",
          isVisible ? "ink-secondary" : "opacity-0"
        )}
        style={{ animationDelay: "0.8s" }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full filter blur-sm"
          fill="none"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="url(#smokeGradient)"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="80"
            cy="80"
            r="40"
            fill="black"
            opacity="0.4"
          />
          <defs>
            <radialGradient id="smokeGradient" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.1" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={cn(
            "absolute w-2 h-2 bg-foreground rounded-full opacity-30",
            isVisible ? "ink-float" : "opacity-0"
          )}
          style={{
            left: `${20 + index * 15}%`,
            top: `${30 + index * 10}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${4 + index}s`,
          }}
        />
      ))}
    </div>
  );
};

export default InkEffect;