"use client"
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll event for navbar background and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Optional: detect which section is currently in view
      // This would require setting up the sections with proper IDs
      const sections = ["services", "about", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigation items with section IDs instead of routes
  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 h-16",
        scrolled ? "bg-white shadow-md" : "bg-white backdrop-blur-sm"
      )}>
      <div className="max-w-screen-xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="z-20"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            width={200}
            height={140}
            src="/mainLogo.png"
            className="h-auto"
            alt="Salon Logo"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8 font-medium">
            {navItems
              .filter((item) => item.name !== "Home")
              .map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href.substring(1));
                    }}
                    className={cn(
                      "relative py-1 px-1 transition-colors duration-200",
                      "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0",
                      "after:bg-[#DE3163] after:transition-all after:duration-300",
                      "hover:text-[#DE3163] hover:after:w-full",
                      activeSection === item.href.substring(1)
                        ? "text-[#DE3163] after:w-full"
                        : "text-gray-900"
                    )}>
                    {item.name}
                  </a>
                </li>
              ))}
          </ul>
        </nav>

        {/* Book Now Button & Mobile Menu Toggle */}
        <div className="flex items-center z-20">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.picktime.com/f7554bef-ccaf-4b75-a0c6-901b4ada98e9">
            <Button
              className={cn(
                "hidden md:inline-flex text-white bg-black font-medium rounded-3xl",
                "px-5 py-4 text-sm transition-all duration-200",
                "hover:bg-gray-800 cursor-pointer hover:shadow-md"
              )}>
              Book Now
            </Button>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors duration-200",
              isOpen ? "text-black" : "text-gray-700"
            )}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}>
            <span className="sr-only">Toggle menu</span>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Navigation Menu */}
        <nav
          className={cn(
            "fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 md:hidden",
            "flex flex-col shadow-xl h-screen",
            "transform transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}>
          <div className="flex items-center justify-between p-4 border-b">
            <img
              width={120}
              height={32}
              src="/mainLogo.png"
              className="h-auto"
              alt="Salon Logo"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col flex-1 overflow-y-auto py-8">
            <ul className="flex flex-col space-y-6 px-6">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  className={cn(
                    "transition-all duration-300",
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0",
                    `delay-${index * 100}`
                  )}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.name === "Home") {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else {
                        scrollToSection(item.href.substring(1));
                      }
                    }}
                    className={cn(
                      "text-xl font-medium transition-colors w-full text-left py-2 block",
                      activeSection === item.href.substring(1)
                        ? "text-black"
                        : "text-gray-900 hover:text-black"
                    )}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto px-6 pb-8">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.picktime.com/009fd765-a783-4506-a80c-114fd53e8ebd"
                onClick={() => setIsOpen(false)}>
                <Button
                  className={cn(
                    "w-full text-white bg-black font-medium rounded-3xl",
                    "px-6 py-3 text-lg transition-all duration-200",
                    "hover:bg-gray-800 hover:shadow-md",
                    isOpen ? "opacity-100" : "opacity-0",
                    "transition-opacity duration-300 delay-500"
                  )}>
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
