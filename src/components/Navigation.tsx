import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { GoArrowUpRight } from "react-icons/go";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navItems = [
    { label: "ABOUT", href: "#about-section" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CONTACT", href: "#contact", hasArrow: true },
  ];

  const handleNavClick = (href: string, isContact: boolean = false) => {
    if (isContact) {
      window.open('mailto:r2garhyan@gmail.com', '_blank');
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-background/80 backdrop-blur-sm",
        isVisible ? "nav-reveal" : "opacity-0"
      )}
    >
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        {/* Left side - Logo/Name with STATUS */}
        <div className="flex items-center gap-6 flex-1">
          <div className="text-foreground font-medium tracking-wide hover-lift">
            © Raunak Garhyan
          </div>
          <button
            onClick={() => handleNavClick("#status")}
            className={cn(
              "text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm font-medium tracking-wider hover-lift",
              "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
            )}
          >
            OPEN/
          </button>
        </div>

        {/* Right side - Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href, item.label === "CONTACT")}
              className={cn(
                "text-foreground/80 hover:text-foreground transition-colors duration-300 text-sm font-medium tracking-wider hover-lift",
                "relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="flex items-center gap-1">
                {item.hasArrow && <GoArrowUpRight className="w-4 h-4" />}
                {item.label}{item.hasArrow ? "/" : "/"}
              </span>
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