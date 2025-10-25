import { useState, useEffect, useCallback, memo } from "react";
import logo from "../assets/62169f4ea3721b0e3213896f6a3bc9ae1b5b9e21.png";
import "../styles/apple-header.css";

export const HeaderOriginal = memo(function HeaderOriginal() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    // Check on mount
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="apple-header-wrap">
      <header
        className={`apple-header ${!isScrolled ? "solid-header" : ""}`}
        role="navigation"
        aria-label="Main header"
      >
        <button
          className="logo-btn"
          tabIndex={0}
          aria-label="Home"
          onClick={() => scrollToSection("home")}
        >
          <img src={logo} alt="Polaroid Dosa logo" />
        </button>

        <nav className="apple-nav" role="menubar" aria-label="Primary">
          <button
            className="link"
            role="menuitem"
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
          <button
            className="link"
            role="menuitem"
            onClick={() => scrollToSection("about-section")}
          >
            About
          </button>
          <button
            className="link"
            role="menuitem"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
        </nav>

        <div>
          <a
            href="https://www.instagram.com/polaroiddosa?igsh=anI2bDJtanJweTh3"
            target="_blank"
            rel="noopener noreferrer"
            className="apple-cta"
          >
            Get in Touch
          </a>
        </div>
      </header>
    </div>
  );
});