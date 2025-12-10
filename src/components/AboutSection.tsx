import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
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
      className="min-h-[15vh] text-foreground flex items-center justify-center px-6 py-8 relative"
    >
      {/* Wavy Background - Behind the content */}
      <WavyBackground
        className="absolute inset-0 z-0"
        colors={["#000000", "#1a1a1a", "#333333", "#4d4d4d", "#666666"]}
        waveWidth={50}
        backgroundFill="#ffffff"
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
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground/90 font-light">
              I'm Raunak Garhyan, a junior at Gunn High School, a graphic designer and HCI enthusiast who is ready to help you with your design needs! Anything from logos, to website designs, to posters, to marketing-related visuals, I can be contracted to work on for you!
            </p>
          </div>

        </div>

       

      
      </div>

    </section>
  );
};

export default AboutSection;
