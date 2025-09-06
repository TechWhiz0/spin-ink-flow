import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-section"
      className="min-h-screen bg-primary text-primary-foreground flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={cn(
            "transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* About Content */}
          <div className="mb-12">
            <p className="text-lg md:text-xl leading-relaxed text-primary-foreground/90 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              pellentesque quis velit eget dictum. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
              Pellentesque vitae neque velit. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
            </p>
          </div>

          {/* Call to Action Button */}
          <div
            className={cn(
              "transition-all duration-1200 delay-300 transform",
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            )}
          >
            <Button
              variant="outline"
              size="lg"
              className={cn(
                "bg-transparent border-2 border-primary-foreground text-primary-foreground",
                "hover:bg-primary-foreground hover:text-primary transition-all duration-300",
                "px-8 py-4 text-base font-medium rounded-full",
                "hover-lift transform hover:scale-105"
              )}
            >
              Learn more About Me
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={cn(
                "absolute w-px h-20 bg-primary-foreground/10",
                "animate-pulse"
              )}
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + index * 10}%`,
                animationDelay: `${index * 0.8}s`,
                animationDuration: `${3 + index}s`,
              }}
            />
          ))}
        </div>

        {/* Curved Transition at Top - Reversed Effect */}
        <div className="absolute  z-20 left-0 mt-96 right-0 h-48 overflow-hidden">
          <div className="relative w-full h-full">
            {/* Main Curved Wave - Reversed Up Down Up Down Pattern */}
            <svg
              className="absolute top-0 w-full h-full"
              viewBox="0 0 1200 192"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="curveGradient1"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="black" />
                  <stop offset="50%" stopColor="black" />
                  <stop offset="100%" stopColor="black" />
                </linearGradient>
              </defs>

              {/* Main Wave - Rolling Hills Style */}
              <path
                d="M0,80 C200,120 400,60 600,100 C800,40 1000,120 1200,80 L1200,0 L0,0 Z"
                fill="url(#curveGradient1)"
                className="animate-curve-wave-1"
              />
            </svg>

            {/* Floating Elements - Positioned at Top */}
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="absolute bg-black/20 rounded-full animate-floating-element"
                style={{
                  width: `${6 + (index % 2) * 3}px`,
                  height: `${6 + (index % 2) * 3}px`,
                  left: `${15 + index * 16}%`,
                  top: `${40 + (index % 3) * 12}px`,
                  animationDelay: `${index * 0.4}s`,
                  animationDuration: `${4 + (index % 2)}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated Wave Effect at Bottom */}
      <div className="absolute bottom-0 w-full h-24 left-0 right-0 z-10">
        <svg
          className="w-full h-full text-primary-foreground animate-wave-flow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,133.3C672,117,768,107,864,117.3C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;
