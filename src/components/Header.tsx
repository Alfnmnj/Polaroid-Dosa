import { useState, useEffect, useCallback, memo } from "react";
import "../styles/apple-header.css";

export const Header = memo(function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.9);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          <img
            src="/assets/62169f4ea3721b0e3213896f6a3bc9ae1b5b9e21.png"
            alt="Polaroid Dosa logo"
            loading="eager"
            decoding="async"
          />
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
