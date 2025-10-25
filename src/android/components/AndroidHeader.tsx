import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AndroidHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsMenuOpen(false); // Close menu after navigation
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about-section' },
    { label: 'Projects', id: 'projects' },
    { label: 'Capabilities', id: 'capabilities' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <motion.header 
        className={`android-header ${!isScrolled ? 'solid-header' : ''}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.button
          onClick={() => scrollToSection("home")}
          whileTap={{ scale: 0.95 }}
          className="android-logo-btn"
        >
          <img 
            src="/assets/62169f4ea3721b0e3213896f6a3bc9ae1b5b9e21.png" 
            alt="Polaroid Dosa logo" 
            className="android-header-logo"
            loading="eager"
            decoding="async"
          />
        </motion.button>
        
        <div className="android-header-right">
          <motion.a 
            href="https://www.instagram.com/polaroiddosa?igsh=anI2bDJtanJweTh3"
            target="_blank"
            rel="noopener noreferrer"
            className="android-header-cta"
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
          
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            className="android-hamburger-btn"
          >
            <div className={`android-hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="android-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              className="android-mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="android-menu-header">
                <h3>Navigation</h3>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="android-menu-close"
                >
                  ×
                </button>
              </div>
              
              <div className="android-menu-items">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="android-menu-item"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
              
              <div className="android-menu-footer">
                <motion.a 
                  href="https://www.instagram.com/polaroiddosa?igsh=anI2bDJtanJweTh3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="android-menu-cta"
                  whileTap={{ scale: 0.95 }}
                >
                  Follow us on Instagram
                </motion.a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}