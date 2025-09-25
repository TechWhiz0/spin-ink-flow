import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navItems = [
    { label: "STATUS", href: "#status" },
    { label: "ABOUT", href: "#about-section" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-sm",
        isVisible ? "nav-reveal" : "opacity-0"
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo/Name */}
        <div className="text-foreground font-medium tracking-wide hover-lift">
          © Raunak Garhyan
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm font-medium tracking-wider hover-lift",
                "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}/
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground hover-lift">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;