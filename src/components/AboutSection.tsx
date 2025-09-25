import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WavyBackground } from "@/components/ui/wavy-background";

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
      className="min-h-screen text-primary-foreground flex items-center justify-center px-6 py-20 relative"
    >
      {/* Wavy Background - Behind the content */}
      <WavyBackground
        className="absolute inset-0 z-0"
        colors={["#ffffff", "#f3f4f6", "#e5e7eb", "#d1d5db", "#9ca3af"]}
        waveWidth={50}
        backgroundFill="#000000"
        blur={10}
        speed="fast"
        waveOpacity={0.3}
      />
      
      {/* Content - On top of wavy background */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
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

       

      
      </div>

    </section>
  );
};

export default AboutSection;
