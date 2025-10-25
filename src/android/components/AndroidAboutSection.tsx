import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function AndroidAboutSection() {
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

    const section = document.getElementById('about-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="android-about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.8 }}
      >
        {/* ABOUT US Label - Same as web */}
        <div className="android-about-label">
          ABOUT US
        </div>

        {/* Title - Same as web but mobile optimized */}
        <p className="android-about-title">
          We're Creative Directors
        </p>
        <h1 className="android-about-subtitle">
          Who Shape Brands
        </h1>

        {/* Orange Line - Same as web */}
        <div className="android-about-line"></div>

        {/* Orange Card with Text - Same as web */}
        <motion.div 
          className="android-about-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileTap={{ scale: 0.98 }}
        >
          <p className="android-about-text">
            We're a collective of independent creators who joined forces to cook up something bigger than ourselves. At Polaroid Dosa, design meets imagination to craft experiences that are fresh, bold, and made to be remembered.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}